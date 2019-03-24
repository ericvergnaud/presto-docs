import React from 'react';
import Topic from "../../../components/Topic";
import Methods from "./Methods";
import Services from "./Services";

class ThisTopic extends Topic {

    constructor() {
        super("Server", [ Services, Methods ]);
    }

    renderContent(topicSelected) {
        return <React.Fragment>
                    <h2>Server specific libraries</h2>
                    <p>The Prompto Web server provides server-specific methods, categories and Web service handlers.</p>


            </React.Fragment>;
    }

}

export default new ThisTopic();