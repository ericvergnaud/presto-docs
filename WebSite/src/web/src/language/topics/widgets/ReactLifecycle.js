import React from 'react';
import Topic from "../Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Lifecycle");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <img src="/img/ReactLifecycle.jpeg"/>
            </React.Fragment>;
    }

}

export default new ThisTopic();