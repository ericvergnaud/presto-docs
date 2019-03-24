import React from 'react';
import Topic from "../../../../components/Topic";
import PromptoPlayer from "../../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Overloading");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Overloading category methods</h2>

            <p>Prompto supports category method <i>overloading</i>, where 2 methods of the same category have the same
                name but different parameters.</p>
            <p>When a category method is <i>overloaded</i>, Prompto selects the most appropriate one based on the best
                match of the <i>proposed</i> parameters
                with respect to the required arguments. This matching is performed using the sequence of the parameters
                in the method call.</p>
            <p>In the below example, the 2 methods have the same name, but a different number of arguments:</p>
            <PromptoPlayer lines={16} sampleUrl="samples/categories/methods/overloading-count.pec" runnable={true}/>
            <br/>

            <p>Category method <i>overloading</i> also works with different argument types.</p>
            <p>Each <i>overridden</i> method provides a behavior specific to its argument types.</p>
            <PromptoPlayer lines={16} sampleUrl="samples/categories/methods/overloading-type.pec" runnable={true}/>
            <br/>

            <p>When a category method is <i>overloaded</i>, Prompto selects the most appropriate one at runtime i.e. the
                one for which the <i>actual</i> parameters best match the required method arguments,
                based on the sequence of the method call. This is different from many OOP languages such as Java, C# or
                C++,
                where the resolution is decided at compile time. </p>
            </React.Fragment>;
    }

}

export default new ThisTopic();