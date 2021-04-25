import React from 'react';
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Cursor");
    }

    renderContent(topicSelected) {
        return <>
            <h2>Cursor</h2>

                <p>The <code>Cursor</code> type is a technical type used to navigate through data returned by the data store.</p>
                <pre><code>c = fetch all -> returns a Cursor which will produce an item on each iteration</code></pre>

            </>;
    }

}

export default new ThisTopic();