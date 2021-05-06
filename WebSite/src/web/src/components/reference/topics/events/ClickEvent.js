import React from 'react';
import Topic from "../../../content/Topic";
import PromptoPlayer from "../../../player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("ClickEvent");
    }

    renderContent(topicSelected) {
        return <>
            <h2>ClickEvent</h2>
            <p>As its name indicates, a ClickEvent is generated when the user clicks on a widget or html element.<br/>
                The event is generated when the user <i>releases</i> the mouse, not when he/she presses it.</p>
            <p>As of writing, a ClickEvent has no specific method</p>
            <p>In the below example, we install a click handler on a &lt;div&gt; element:</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={12} sampleUrl="samples/events/example.poc" />
            </>;
    }

}

export default new ThisTopic();