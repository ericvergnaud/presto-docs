import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Natural");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Sorting <i>natural</i> expressions</h2>

                <p>Texts, numbers and dates have a <i>natural</i> sorting order.</p>
                <p>Sorting a collection of such values is done using <i>natural</i> sorting, as follows:</p>
            <PromptoPlayer sampleUrl="samples/expressions/sort-natural.pec" runnable={true}/>
            <br/>

            <h3>Sorting backwards</h3>

            <p>Sorting backwards is done by inserting the <code>descending</code> keyword after
                the <code>sorted</code> one.<br/>
                In O and M dialects, the <code>desc</code> abbreviated keyword is preferred.</p>
            <PromptoPlayer sampleUrl="samples/expressions/sort-backwards.pec" runnable={true}/>
            <br/>


            </React.Fragment>;
    }

}

export default new ThisTopic();