import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Do while");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Do while statement</h2>

            <p>A do while statement is a way to execute a set of statements until a condition stops being met.<br/>
                A do while statement has the form <code>do</code> followed by a list of statements which will be
                executed repeatedly,
                followed by <code>while <i>condition</i></code> where <code><i>condition</i></code> is a boolean
                expression.</p>
                <PromptoPlayer key={PromptoPlayer.nextKey()} lines={10} sampleUrl="samples/statements/do-while.pec" runnable={true}/>
                <br/>

                <h3>
                    Breaking the iteration
                </h3>

                <p>It is sometimes useful to break the iteration before testing the condition again. This is achieved
                    using the <code>break</code> statement.</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={12} sampleUrl="samples/statements/do-while-break.pec" runnable={true}/>
                <br/>
                <p>The difference between a while and a do while statements is that the embedded statements in a while
                    statement may never get executed,
                    whilst they are always executed at least once with a do while statement</p>

            </React.Fragment>;
    }

}

export default new ThisTopic();