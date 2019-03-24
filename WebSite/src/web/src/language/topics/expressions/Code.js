import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Code");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>Code expressions</h2>

            <p>Code expressions are expressions used to convey Prompto code fragments.<br/>
                A code expression is a code fragment which produces a Code value, which can then be used as an input for
                code invocations.<br/>
                A code expression has the form <code>Code: <i>code</i></code>, where <code><i>code</i></code> is a
                fragment of Prompto code.
                Code values are not storable.
            </p>
            <p>In the below example, we declare a method <code>myMethod</code> which accepts <code>Code code</code> as a
                parameter type.<br/>
                In the <code>main</code> method, we instantiate a Code expression, which is then used as a parameter
                when calling <code>myMethod</code>.
            </p>
            <PromptoPlayer lines={12} sampleUrl="samples/expressions/code.pec" runnable={true}/>
            <br/>

            <p>For security reasons, Code expressions can only be created from Prompto code, not from text.<br/>
                This ensures that methods receiving Code parameters are fully checked before execution time.<br/>
                A method receiving Code parameters can be seen as a Method template, instantiated when called with the
                actual Code expression.
            </p>


        </React.Fragment>;
    }

    }

    export default new ThisTopic();