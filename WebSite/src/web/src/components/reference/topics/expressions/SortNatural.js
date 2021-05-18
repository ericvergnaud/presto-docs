import React from 'react';
import Topic from "../../../content/Topic";
import PromptoPlayer from "../../../player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Natural");
    }

    renderContent(topicSelected) {
        return <>

            <h2>Sorting <i>natural</i> expressions</h2>

                <p>Texts, numbers and dates have a <i>natural</i> sorting order.</p>
                <p>Sorting a collection of such values is done using <i>natural</i> sorting, as follows:</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/expressions/sort-natural.pec" runnable={true}/>
            <br/>

            <h3>Sorting backwards</h3>

            <p>Sorting backwards is done by inserting the <code>descending</code> keyword after
                the <code>sorted</code> one.<br/>
                In O and M dialects, the <code>desc</code> abbreviated keyword is preferred.</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/expressions/sort-backwards.pec" runnable={true}/>
            <br/>


            </>;
    }

}

export default new ThisTopic();