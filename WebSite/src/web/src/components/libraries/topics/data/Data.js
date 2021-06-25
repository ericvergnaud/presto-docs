import React from 'react';
import Topic from "../../../content/Topic";
import CSV from "./CSV";
import JSON from "./JSON";
import YAML from "./YAML";

class ThisTopic extends Topic {

    constructor() {
        super("Data", [ JSON, CSV, YAML ]);
    }

    renderContent(topicSelected) {
        return <React.Fragment>
                    <h2>Data</h2>
                    <p>Business data can be provided by users through input screens, or receveid from other systems.</p>
                    <p>Prompto supports reading data in the following formats:</p>
                    <ul>
                        <li>CSV</li>
                        <li>JSON</li>
                        <li>YAML</li>
                        <li>XML (not available yet)</li>
                    </ul>
            </React.Fragment>;
    }

}

export default new ThisTopic();