import React from 'react';
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Boolean");
    }

    renderContent(topicSelected) {
        return <>
            <h2>Boolean</h2>

            <p>The <code>Boolean</code> type is a technical type used exclusively for the values true and false.<br/>
                A Boolean literal is simply one of the words <code>true</code> or <code>false</code>.<br/>
                Alternately, Prompto also supports the words <code>True</code> and <code>False</code>.
            </p>
        </>;
    }

}

export default new ThisTopic();