import React from 'react';
import Topic from "../../../components/Topic";
import CSV from "./CSV";
import JSON from "./JSON";

class ThisTopic extends Topic {

    constructor() {
        super("Data", [ JSON, CSV ]);
    }

    renderContent(topicSelected) {
        return <React.Fragment>
                    <h2>Data</h2>
                    <p>Business data can be provided by users through input screens, or receveid from other systems.</p>
                    <p>Prompto supports reading data in the following formats:</p>
                    <ul>
                        <li>JSON</li>
                        <li>CSV</li>
                        <li>XML (not available yet)</li>
                    </ul>
            </React.Fragment>;
    }

}

export default new ThisTopic();