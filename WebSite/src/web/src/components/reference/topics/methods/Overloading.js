import React from 'react';
import PromptoPlayer from "../../../player/PromptoPlayer";
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Overloading");
    }

    renderContent(topicSelected) {
        return <>
            <h2>Overloading methods</h2>

            <p>Prompto supports method <i>overloading</i>, where 2 methods have the same name but different parameters. </p>
            <p>When a method is <i>overloaded</i>, Prompto selects the most appropriate one based on the best match of
                the <i>proposed</i> parameters with respect to the required arguments. This matching is performed using the sequence of the parameters
                in the method call.</p>
            <p>In the below example, the 2 methods have the same name, but a different number of arguments:</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={10} sampleUrl="samples/methods/overloaded-count.pec" runnable={true}/>
            <p/>

            <p>Method <i>overloading</i> also works with different argument types.</p>
            <p>Each <i>overloaded</i> method provides a behavior specific to its argument types.</p>
            <p>When a method is <i>overloaded</i>, Prompto selects the most appropriate one at runtime i.e. the one for
                which the <i>actual</i> parameters best match the required method arguments,
                based on the sequence of the method call. This is different from many languages such as Java, C# or C++,
                where the resolution is decided at compile time. </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={10} sampleUrl="samples/methods/overloaded-type.pec" runnable={true}/>
            </>;
    }

}

export default new ThisTopic();