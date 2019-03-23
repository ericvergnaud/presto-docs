import React from 'react';
import Topic from "../Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("InputChangedEvent");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>InputChangedEvent</h2>
            <p>As its name indicates, an InputChangedEvent is generated when the user types or deletes text from an input.<br/>
                The event is generated when the user <i>releases</i> the keyboard key, not when he/she presses it.</p>
            <p>The InputChangedEvent provides the following methods:</p>
            <ul>
                <li><b>getProposedText</b><br/>
                This method returns a Text, which is set to the new value immediately after typing.<br/>
                At this point it is possible to reject the input, by resetting the input Text to its current value.</li>
                <li><b>getCurrentText</b><br/>
                    This method returns a Text, which is set to the input value before new Text was typed or deleted.<br/>
                    This method is useful to analyze the change in a stateless fashion.
                </li>
            </ul>
            <p>In the below example, we capture each InputChangedEvent, and apply business rules:</p>
            <PromptoPlayer lines={22} sampleUrl="samples/events/input-changed-event.poc"/>
            <p><i>(the above Input widget is a fictitious one, not the html tag. See ReactBootstrap for a real example)</i></p>
            </React.Fragment>;
    }

}

export default new ThisTopic();