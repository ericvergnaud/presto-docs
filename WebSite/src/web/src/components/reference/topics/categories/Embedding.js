import React from 'react';
import Topic from "../../../content/Topic";
import PromptoPlayer from "../../../player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Embedding");
    }

    renderContent(topicSelected) {
        return <>

            <h2>Embedding objects</h2>

            <p>Once a category is defined, it can be used as a type for attribute definitions.</p>
            <p>In the below example, we:</p>
            <ul>
                <li>define a <i>Person</i> category</li>
                <li>define an <i>author</i> attribute with type <i>Person</i>.</li>
                <li>use this <i>person</i> attribute to define the <i>Book</i> category:</li>
            </ul>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={16} sampleUrl="samples/categories/embedded.pec" runnable={true}/>
            <p>In the above example, we have <i>embedded</i> a Person instance into a Book instance.</p>


            </>;
    }

}

export default new ThisTopic();