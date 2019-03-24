import React from 'react';
import Topic from "../../../components/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Worker");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>Worker</h2>

            <p>The <code>Worker</code> type is a technical type used to start and control additional threads of execution.<br/>
                See the Workers section for more details.
            </p>
            </React.Fragment>;
    }

}

export default new ThisTopic();