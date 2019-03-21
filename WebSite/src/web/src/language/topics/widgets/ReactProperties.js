import React from 'react';
import Topic from "../Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Properties");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>React widget properties</h2>
            <p>React components often require properties in order to render meaningful content.<br/>
                Properties are ofthen referred to as <code>props</code> in React literature.<br/>
                Properties are provided to the widget through attributes set on the Html tag.</p>
            <p>To access properties, React widgets come with 1 method:</p>
            <ul>
                <li>getProperties<br/>
                    The getProperties is a method that can be called from widget code. It returns a Document.
                </li>
            </ul>
            <p>In the below example, we create a <i>Minimal</i> widget, which renders a <i>title</i> dynamically.<br/>
                In the <i>Page</i> widget, we set the <i>title</i> value, and pass it as a property to the <i>Minimal</i> widget.</p>
            <PromptoPlayer lines={18} sampleUrl="samples/widgets/react-props.poc" />
            <p><i>(there are plans to support the props field directly, but as of now, you need to call <code>getProperties</code>.</i></p>

            </React.Fragment>;
    }

}

export default new ThisTopic();