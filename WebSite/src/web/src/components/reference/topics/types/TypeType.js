import React from 'react';
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Type");
    }

    renderContent(topicSelected) {
        return <>
            <h2>Type</h2>

            <p>The <code>Type</code> type is a technical type used to hold Prompto types as values.<br/>
                Prompto supports assigning types to variables and passing them as parameters.</p>
                This is useful when defining widget property types, for example:
            <pre><code>@WidgetProperties({'{'} componentClass: Type&lt;ReactWidget&gt; {'}'}) -> assigns the type 'ReactWidget' to the 'componentClass' widget property</code></pre>

            </>;
    }

}

export default new ThisTopic();