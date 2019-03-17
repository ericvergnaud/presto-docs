import React from 'react';
import Topic from "../Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Store then");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            TODO
            <PromptoPlayer sampleUrl="samples/types/date/attributes.pec" runnable={true}/>
            </React.Fragment>;
    }

}

export default new ThisTopic();