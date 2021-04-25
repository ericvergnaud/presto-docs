import React from 'react';
import Topic from "../../../../content/Topic";
import PromptoPlayer from "../../../../player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Overriding");
    }

    renderContent(topicSelected) {
        return <>


            <h2>Overriding category methods</h2>

            <p>When a category implements a method, it can be handy to override that method in derived categories.</p>
            <p>This is done simply by providing with the derived category definition a new version of the method
                defined in the parent category.</p>
            <p>In the below example, we:</p>
            <ul>
                <li>define an 'Animal' category with a 'speak' method</li>
                <li>define an 'Dog' category, derived from 'Animal', which overrides the 'speak' method</li>
                <li>define an 'Cat' category, derived from 'Animal', which overrides the 'speak' method</li>
                <li>call the 'speak' method for an instance of each of them</li>
            </ul>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={22} sampleUrl="samples/categories/methods/override.pec" runnable={true}/>


            </>;
    }

}

export default new ThisTopic();