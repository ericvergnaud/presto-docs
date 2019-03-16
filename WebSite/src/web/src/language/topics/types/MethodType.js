import React from 'react';
import Topic from "../Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Method");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>Method</h2>

            <p>The <code>Method</code> type is a technical type used to hold Prompto methods as values.<br/>
                Method types are declared implicitly when declaring methods.<br/>
                Prompto supports assigning methods to variables and passing them as parameters.</p>
            <pre><code>m = Method: myMethod -> assign the method 'myMethod' to variable 'm'</code></pre>

            </React.Fragment>;
    }

}

export default new ThisTopic();