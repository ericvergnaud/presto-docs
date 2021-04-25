import React from 'react';
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Lifecycle");
    }

    renderContent(topicSelected) {
        return <>
            <img src="/img/ReactLifecycle.jpeg" alt=""/>
            </>;
    }

}

export default new ThisTopic();