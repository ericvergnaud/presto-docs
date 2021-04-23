import React from 'react';
import PromptoPlayer from "../../../player/PromptoPlayer";
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("RadioChangedEvent");
    }

    renderContent(topicSelected) {
        return <>
            <h2>RadioChangedEvent</h2>
            <p>As its name indicates, a RadioChangedEvent is generated when the user selects a radio button.<br/>
                The event is generated when the user <i>releases</i> the mouse, not when he/she presses it.</p>
            <p>The RadioChangedEvent provides the following methods:</p>
            <ul>
                <li><b>getSelectedRadio</b><br/>
                    This method returns a Text, which is set to the id attribute of the newly selected radio button.</li>
            </ul>
            <p>In the below example, we capture each RadioChangedEvent, and apply business rules:</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={22} sampleUrl="samples/events/radio-changed-event.poc"/>
            <p><i>(the above Radio widget is a fictitious one. See ReactBootstrap for a real example)</i></p>
            </>;
    }

}

export default new ThisTopic();