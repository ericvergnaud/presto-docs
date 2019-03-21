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

            <PromptoPlayer sampleUrl="samples/types/date/attributes.pec" runnable={true}/>
            </React.Fragment>;
    }

}

export default new ThisTopic();