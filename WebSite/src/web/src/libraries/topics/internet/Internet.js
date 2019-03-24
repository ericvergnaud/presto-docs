import React from 'react';
import Topic from "../../../components/Topic";
import Url from './Url';

class ThisTopic extends Topic {

    constructor() {
        super("Internet", [ Url ]);
    }

    renderContent(topicSelected) {
        return <React.Fragment>
                    <h2>Internet</h2>
                    <p>Prompto has the following Internet related resources:</p>
                    <ul><li>Url</li></ul>
            </React.Fragment>;
    }

}

export default new ThisTopic();