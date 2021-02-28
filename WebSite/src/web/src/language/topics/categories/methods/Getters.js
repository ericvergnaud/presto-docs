import React from 'react';
import Topic from "../../../../components/Topic";
import PromptoPlayer from "../../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Getters");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Getters</h2>

            <p>Category attributes can be accessed using <code><i>instance</i>.<i>name</i></code>,
                where <code><i>instance</i></code> is a value and <code><i>name</i></code>
                is the name of a an attribute supported by this value.<br/>
                This covers most use cases, but there are situations where you want the returned value to be computed,
                rather than just read from the object.
                This is where <i>getters</i> are useful.<br/>
                <i>Getters</i> are special methods defined as part of a category definition, and attached to a
                particular attribute name.
                When a getter is defined and a piece of code tries to read the corresponding attribute, Prompto will
                call the <i>getter</i> instead.<br/>
                In the below example, we define a <i>getter</i> for a <i>fullName</i> attribute:
            </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={12} sampleUrl="samples/categories/methods/getter.pec" runnable={true}/>
            <br/>

            <h4>Cyclical dependencies</h4>
            <p><i>Prompto manages cyclical dependencies between getters. Cyclical dependencies occur when for example
                getter for 'a' reads 'b' and getter for 'b' reads 'a'.
                During the execution of a getter body, it is guaranteed that the getter being executed will not be
                called again for the current object
                until the execution of the initial getter is complete.</i></p>
            <p/>


            </React.Fragment>;
    }

}

export default new ThisTopic();