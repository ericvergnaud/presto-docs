import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("For each");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>For each statements</h2>

            <p>A for each statement is a way to execute a set of statements for each item in a collection.<br/>
                A simple for each statement has the form <code>for each <i>item</i> in <i>collection</i></code>
                followed by a list of statements which will be executed for each item in the collection,
                where <code><i>item</i></code> is a variable name and <code><i>collection</i></code> is a collection.
                If <code><i>item</i></code> already exists, its type must be compatible with the item type of the
                collection.</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/statements/for-each.pec" runnable={true}/>
                <br/>

                <p>Optionally, a for each statement can populate an index variable.
                </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={12} sampleUrl="samples/statements/for-each-index.pec" runnable={true}/>
            <br/>

                <h3>
                    Breaking the iteration
                </h3>

                <p>It is sometimes useful to break the iteration before reaching the end of the collection. This is
                    achieved using the <code>break</code> statement.</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/statements/for-each-break.pec" runnable={true}/>
                <br/>

            </React.Fragment>;
    }

}

export default new ThisTopic();