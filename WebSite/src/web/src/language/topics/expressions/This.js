import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("This");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h3><i>This/self</i> value</h3>

            <p>Prompto supports user defined types called <i>categories</i>, for which specialized methods can also be
                defined.<br/>
                When executing those methods, it can be necessary to refer to the current object.<br/>
                This is achieved using the <i>this</i> value.<br/>
                A <i>this</i> value has the following form:</p>
            <ul>
                <li><code>this</code> in the E dialect</li>
                <li><code>self</code> in the M dialect</li>
                <li><code>this</code> in the O dialect</li>
            </ul>
            <PromptoPlayer lines={10} sampleUrl="samples/expressions/this.pec" runnable={true}/>
            <p>Please note that in the above example, <i>this</i> is used to disambiguate the <i>name</i> parameter from the <i>name</i> attribute.<br/>
                In Prompto category methods, <i>this</i> is implicit.<br/>
                This is similar to Java and C#, but opposite to Python or JavaScript.<br/>
                Please also note that <code>name</code> is a predefined <code>Text</code> attribute.
            </p>


            </React.Fragment>;
    }

}

export default new ThisTopic();