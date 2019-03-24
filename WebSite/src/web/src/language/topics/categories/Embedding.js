import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Embedding");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Embedding objects</h2>

            <p>Once a category is defined, it can be used as a type for attribute definitions.</p>
            <p>In the below example, we:</p>
            <ul>
                <li>define a <i>Person</i> category</li>
                <li>define an <i>author</i> attribute with type <i>Person</i>.</li>
                <li>use this <i>person</i> attribute to define the <i>Book</i> category:</li>
            </ul>
            <PromptoPlayer lines={16} sampleUrl="samples/categories/embedded.pec" runnable={true}/>
            <p>In the above example, we have <i>embedded</i> a Person instance into a Book instance.</p>


            </React.Fragment>;
    }

}

export default new ThisTopic();