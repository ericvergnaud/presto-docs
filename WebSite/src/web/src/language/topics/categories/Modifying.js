import React from 'react';
import Topic from "../Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Modifying");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Modifying instances</h2>

            <p>Attribute values are normally set when creating instances.</p>

            <p>This covers most use cases, but there are situations where you want to set or change attribute values
                after object creation.</p>

            <p>Setting attribute value after object creation is done using assignment statements of the
                form <code><i>instance</i>.<i>name</i> = <i>expression</i></code>,
                where <code><i>instance</i></code> is a value, <code><i>name</i></code> is the name of a an attribute
                supported by this value, and <code><i>expression</i></code>
                is an expression returning a value compatible with the type of <code><i>name</i></code>.</p>

            <p>However, it is worth reminding that unless specified, Prompto values are <i>immutable</i>.
                As a consequence, the below code is illegal and cannot be executed:</p>


            <PromptoPlayer sampleUrl="samples/categories/modify-illegal.pec"/>
            <p>This is because the <i>Person</i> object assigned to variable <i>p</i> is not marked
                as <code>mutable</code>.</p>
            <p>In order to set an attribute value after object creation, the category instance must me marked as
                mutable when created. The below code will run:</p>
            <PromptoPlayer lines={10} sampleUrl="samples/categories/modify.pec" runnable={true}/>
        </React.Fragment>;
    }

}

export default new ThisTopic();