import React from 'react';
import Topic from "../../../components/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Uuid");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>Uuid</h2>

            <p>The <code>Uuid</code> type is a technical type often used in IT systems to provide unique identifiers.<br/>
                A Uuid generator is a system which using specific hardware unique data such as MAC address, and current instant,
                is able to generate a globally <b>U</b>niversal <b>U</b>nique <b>ID</b>entifier.<br/>
                A Uuid literal is a sequence of characters, digits and hyphens which conform to the <a target="_blank" rel="noopener noreferrer"
                                                                                                       href="https://tools.ietf.org/html/rfc4122">RFC 4122 specification</a>.<br/>
                A Uuid literal must be enclosed in single quotes.</p>
                <pre><code>'123e4567-e89b-12d3-a456-426655440000' -> a valid UUID</code></pre>
            <br/>
            </React.Fragment>;
    }

}

export default new ThisTopic();