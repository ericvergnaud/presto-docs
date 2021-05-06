import React from 'react';
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Iterator");
    }

    renderContent(topicSelected) {
        return <>
            <h2>Iterator</h2>

            <p>The <code>Iterator</code> type is a technical type produced by Prompto when transforming a collection inline.</p>
            <pre><code>x + 1 for each x in [1..5] -> returns an Iterator which will produce an item on each iteration</code></pre>

        </>;
    }

}

export default new ThisTopic();