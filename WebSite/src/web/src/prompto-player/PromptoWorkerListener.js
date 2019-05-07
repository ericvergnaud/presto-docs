// eslint-disable-next-line
import PromptoWorker from "worker-loader!./PromptoWorker";

class PromptoWorkerListener {

    constructor() {
        this.worker = new PromptoWorker();
        this.worker.onmessage = this.onMessage.bind(this);
        this.nextMessageId = 0;
        this.messageHandlers = {};
    }

    onMessage(msg) {
        const message = msg.data;
        const handler = this.messageHandlers[message.inResponseTo];
        if(!message.keepHandlerAlive)
            delete this.messageHandlers[message.inResponseTo];
        if(handler)
            handler(message.data);
        else
            console.log("No handler for: " + msg);
    }

    translate(content, from, to, callback) {
        const message = {
            id : ++this.nextMessageId,
            verb : "translate",
            data : {
                content : content,
                from : from,
                to : to
            }
        };
        this.messageHandlers[message.id] = data => {
            callback(data.translated, -1);
        };
        this.worker.postMessage(message);
    }

    execute(content, dialect, callback) {
        var message =  {
            id : ++this.nextMessageId,
            verb : "execute",
            data : {
                content : content,
                dialect : dialect
            }
        };
        // register handler for this message's responses
        this.messageHandlers[message.id] = data => {
            callback(data.toStdOut, data.toStdErr);
        };
        this.worker.postMessage(message);
    }

    repl(input, callback) {
        var message =  {
            id : ++this.nextMessageId,
            verb : "repl",
            data : {
                input : input
            }
        };
        // register handler for this message's responses
        this.messageHandlers[message.id] = data => {
            callback(data.toStdOut, data.toStdErr);
        };
        this.worker.postMessage(message);

    }
}

const PROMPTO_WORKER = new PromptoWorkerListener();

export default PROMPTO_WORKER;
