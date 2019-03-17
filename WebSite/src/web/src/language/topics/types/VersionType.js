import React from 'react';
import Topic from "../Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Version");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>Version</h2>

            <p>The <code>Version</code> type is a technical type often used in IT systems to provide software version.<br/>
                A Version literal is a sequence of 1 to 4 Integers, separated by characters, optionally preceded by 'v'.<br/>
                Each Integer must be comprised between 0 and 255.<br/>
                A Version literal must be enclosed in single quotes.</p>
                <pre><code>'v1.12.37' -> a valid version</code></pre>
            <br/>
            </React.Fragment>;
    }

}

export default new ThisTopic();