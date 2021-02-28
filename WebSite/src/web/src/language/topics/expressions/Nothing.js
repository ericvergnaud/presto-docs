import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Nothing");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h3><i>Nothing/None/null</i> value</h3>

            <p>In Prompto, all values are objects.<br/>
                But what if the result of a computation cannot be determined? What object should be returned by the
                computation?<br/>
                The <i>null</i> value is used to return non-values.<br/>
                The <i>null</i> value has the following form:</p>
            <ul>
                <li><code>nothing</code> in the E dialect</li>
                <li><code>None</code> in the M dialect</li>
                <li><code>null</code> in the O dialect</li>
            </ul>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={10} sampleUrl="samples/expressions/nothing.pec" runnable={true}/>
            <p>Please note that whatever the dialect, the <i>null</i> value always prints out as <i>'null'</i>.</p>

            </React.Fragment>;
    }

}

export default new ThisTopic();