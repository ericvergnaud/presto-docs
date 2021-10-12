import React from 'react';
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("DbId");
    }

    renderContent(topicSelected) {
        return <>
            <h2>DbId</h2>

            <p>The <code>DbId</code> type is a general technical type to represent the type of data used by the data store for uniquely identifying records.<br/>
                Each data store may internally use a different type of data: Integer, UUID or Text.<br/>
                The DbId type wraps the internal type such that corresponding values can be copied, returned or passed as parameters without knowing the actual type.<br/>
            </p>
            </>;
    }

}

export default new ThisTopic();