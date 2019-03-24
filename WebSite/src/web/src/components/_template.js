import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Keywords");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
                    <h2>Keywords</h2>
                    <p>Stuff</p>
                    <PromptoPlayer sampleUrl="samples/types/date/attributes.pec" runnable={true}/>
            </React.Fragment>;
    }

}

export default new ThisTopic();