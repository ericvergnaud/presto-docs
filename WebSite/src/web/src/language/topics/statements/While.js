import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("While");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>While statement</h2>

            <p>A while statement is a way to execute a set of statements while a condition is met.<br/>
                A while statement has the form <code>while <i>condition</i></code>
                followed by a list of statements which will be executed repeatedly,
                where <code><i>condition</i></code> is a boolean expression.
                </p>
            <PromptoPlayer lines={12} sampleUrl="samples/statements/while.pec" runnable={true}/>
                <br/>

                <h3>
                    Breaking the iteration
                </h3>

                <p>It is sometimes useful to break the iteration before testing the condition again. This is achieved
                    using the <code>break</code> statement.</p>
            <PromptoPlayer lines={12} sampleUrl="samples/statements/while-break.pec" runnable={true}/>
                <br/>

                <p>The difference between a while and a do while statements is that the embedded statements in a while
                    statement may never get executed,
                    whilst they are executed at least once with a do while statement</p>
            </React.Fragment>;
    }

}

export default new ThisTopic();