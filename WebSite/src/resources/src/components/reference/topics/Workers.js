import React from 'react';
import Topic from "../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Workers");
    }

    renderContent(topicSelected) {
        return <>
            <h2>Workers</h2>

            <p><i>Under construction</i></p>
            </>;
    }

}

export default new ThisTopic();