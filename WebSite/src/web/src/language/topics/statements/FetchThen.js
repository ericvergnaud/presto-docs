import React from 'react';
import Topic from "../Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Fetch then");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>Fetch then statement</h2>

            <p>A fetch then statement is a way to request data from the server, return immediately, and run continuing statements locally later, once the data is fetched from the server.<br/>
                A fetch then statement has the form <code><i>fetch</i> then with <i>value continuation</i></code>, where <i>fetch</i> is a <i>fetch</i> statement as described in the Fetch section,
                <i>value</i> is the name you want to give to the local variable holding the result, and <i>continuation</i> is a list of statements which are to be executed only after the data is fetched from the server.</p>
            <PromptoPlayer lines={10} sampleUrl="samples/statements/fetch-then.pec"/>
            <br/>
            <h3><i>Async</i> programming</h3>
            <p>The store then technique is called <i>async</i> programming. It is useful when running code in a browser, to provide the best user experience by avoiding a non-responsive UI.<br/>
                Without it, the browser would be blocked until the data is completely fetched.<br/>
                You should <i>never</i> make assumptions on the execution sequence of async statements.
                Notably, if you call multiple async statements, you should not expect that their respective continuations will be executed in the same sequence.<br/>
                As of writing, Prompto executes async statements only when running in the browser. In other environments, it waits for completion.</p>
           </React.Fragment>;
    }

}

export default new ThisTopic();