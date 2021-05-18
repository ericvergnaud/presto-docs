import React from 'react';
import PromptoPlayer from "../../../player/PromptoPlayer";
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Abstract");
    }

    renderContent(topicSelected) {
        return <>

            <h2>Abstract categories</h2>

            <p>Like global methods, category methods can be declared <i>abstract</i>. A category which contains 1 or
                more abstract method is said to be an <i>abstract</i> category.</p>
            <p>The category is <i>abstract</i> in the sense that you cannot create an object of that category. The
                reason is that if you could, Prompto would irremediably fail when
                your code tries to call an abstract method for that instance.</p>
            <p>Instead, the abstract method(s) must be defined in categories derived from it.</p>
            <p>This is done simply by providing inside the derived category definition a concrete version of the
                abstract method defined in the parent category.</p>
            <p>In the below example, we:</p>
                <ul>
                    <li>define an 'Animal' category with an abstract 'speak' method</li>
                    <li>define an 'Dog' category, derived from 'Animal', which implements the 'speak' method</li>
                    <li>define an 'Cat' category, derived from 'Animal', which implements the 'speak' method</li>
                    <li>call the 'speak' method for an instance of each of them</li>
                </ul>
            <p/>

            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={22} sampleUrl="samples/categories/abstract.pec" runnable={true}/>

        </>;
    }

}

export default new ThisTopic();