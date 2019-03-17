import React from 'react';
import Topic from "../Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Workers");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>Workers</h2>

            <p><i>Under construction</i></p>
            </React.Fragment>;
    }

}

export default new ThisTopic();