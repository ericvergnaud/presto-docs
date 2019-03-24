import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Store then");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>Store then statement</h2>

            <p>A store then statement is a way to request storage of data on the server, return immediately, and run continuing statements locally later, once the storage is complete on the server.<br/>
                A store then statement has the form <code><i>store</i> then <i>continuation</i></code>, where <i>store</i> is a <i>delete and store</i> statement as described in the Store section,
                and <i>continuation</i> is a list of statements which are to be executed only after the storage has completed on the server.</p>
            <PromptoPlayer sampleUrl="samples/statements/store-then.pec"/>
            <br/>
            <h3><i>Async</i> programming</h3>
            <p>The store then technique is called <i>async</i> programming. It is useful when running code in a browser, to provide the best user experience by avoiding a non-responsive UI.<br/>
                Without it, the browser would be blocked until the storage has completed.<br/>
                You should <i>never</i> make assumptions on the execution sequence of async statements.
                Notably, if you call multiple async statements, you should not expect that their respective continuations will be executed in the same sequence.<br/>
                As of writing, Prompto executes async statements only when running in the browser. In other environments, it waits for completion.</p>
        </React.Fragment>;
    }

}

export default new ThisTopic();