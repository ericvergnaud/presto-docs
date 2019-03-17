import React from 'react';
import Topic from "./Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Keywords");
    }

    renderContent(topicSelected) {
        return "must override!";
    }

}

export default new ThisTopic();