import React from 'react';
import Topic from "../../../components/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Any");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>Any</h2>

            <p>The <code>Any</code> type is a general technical type to represent any type of data.<br/>
                This type is useful internally for describing value types when the actual type is not known at compile time.<br/>
                It is also useful to hold opaque native values.<br/>
            </p>
            </React.Fragment>;
    }

}

export default new ThisTopic();