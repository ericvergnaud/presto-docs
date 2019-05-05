import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Custom");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Sorting collections of custom objects</h2>

            <p>Custom objects do not have a <i>natural</i> sorting order. It is therefore necessary to specify
                how to compare custom objects.<br/>
                This is done by providing a <i>key</i> on which exists a <i>natural</i> order.</p>

            <h3>Sorting by existing <i>key</i> attribute</h3>

            <p>When a custom object comprises a <i>key</i>, this attribute can be used to sort a collection implicitly.
            </p>
            <PromptoPlayer lines={10} sampleUrl="samples/expressions/sort-implicit.pec" runnable={true}/>
            <br/>

            <h3>Sorting by specified attribute</h3>

            <p>Any attribute which has a natural sording order can be used to sort a collection explicitly.</p>
            <PromptoPlayer lines={10} sampleUrl="samples/expressions/sort-attribute.pec" runnable={true}/>
            <br/>

            <h3>Sorting by expression</h3>

            <p>Alternately, lists of custom objects can be sorted using expressions as key, as follows: </p>
            <PromptoPlayer lines={10} sampleUrl="samples/expressions/sort-expressions.pec" runnable={true}/>
            <br/>

            </React.Fragment>;
    }

}

export default new ThisTopic();