import React from 'react';
import Topic from "../../../../components/Topic";
import PromptoPlayer from "../../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Setters");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Setters</h2>

            <p>Attribute values are normally set simply by copying the value provided when creating objects or assigning
                a value to an attribute.</p>

                <p>This covers most use cases, but there are situations where you want to:</p>

                <ul>
                    <li>validate the value in a way which is not supported by attribute constraints</li>
                    <li>transform the value "on the fly" rather than just store it</li>
                    <li>take the opportunity to populate other values</li>
                </ul>

            <p>This is where <i>setters</i> are useful.</p>
            <p><i>Setters</i> are special methods defined as part of a category definition, and attached to a particular
                attribute name.
                When a setter is defined and a piece of code tries to set the corresponding attribute, including when
                the object is created,
                Prompto will call the <i>setter</i> to transform the value prior to setting it.<br/>
                Within the setter method body, the name of the attribute being set holds the value received, which can
                be used for whatever purpose.
                The setter is a function which MUST return the value to be written.</p><p>
            In the below example, we define a <i>setter</i> for a <i>fullName</i> attribute which returns a capitalized
            value, and sets the <i>initials</i> attribute:
        </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={16} sampleUrl="samples/categories/methods/setter.pec" runnable={true}/>
            <br/>


            <h4>Cyclical dependencies</h4>
            <p><i>Prompto manages cyclical dependencies between setters. Cyclical dependencies occur when for example
                setter for 'a' sets 'b' and setter for 'b' sets 'a'.
                During the execution of a setter body, it is guaranteed that the setter being executed will not be
                called again for the current object
                until the execution of the initial setter is complete.</i></p>
            <p/>


            </React.Fragment>;
    }

}

export default new ThisTopic();