import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Buffer");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
                    <h2>Buffer</h2>
                    <p>Buffer is a native <i>resource</i> which follows Prompto resource requirements.<br/>
                        You can <code>read</code> and <code>write</code> Text to a <i>Buffer</i>.</p>
                    <PromptoPlayer key={PromptoPlayer.nextKey()} lines={12} sampleUrl="samples/console/buffer.pec" runnable={true}/>
            </React.Fragment>;
    }

}

export default new ThisTopic();