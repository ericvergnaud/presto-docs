import React from 'react';
import Topic from "../../../components/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Code");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>Code</h2>

            <p>The <code>Code</code> type is a technical type used to represent Prompto code as values.<br/>
                Prompto supports passing code snippets as parameters, so this type is useful for passing code to methods.</p>
                <pre><code>c = Code: a + b -> assign the Prompto code 'a + b' to variable 'c'</code></pre>
            </React.Fragment>;
    }

}

export default new ThisTopic();