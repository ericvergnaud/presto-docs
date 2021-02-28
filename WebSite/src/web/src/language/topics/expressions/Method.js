import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Method");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Method expressions</h2>

            <p>Method expressions are expressions used to convey method definitions.<br/>
                A method expression is a code fragment which produces a Method value, whose exact type is determined by
                the method prototype, and which can then be used as an input for method invocations.<br/>
                A method expression has the following form:</p>
            <ul>
                <li>In O or M: <code><i>name</i></code> (without parenthesis), where <code><i>name</i></code> is the
                    name of a concrete method.
                </li>
                <li>In E: <code>Method: <i>name</i></code> where <code><i>name</i></code> is the name of a concrete
                    method.
                </li>
            </ul>
             <p>   Method values are not storable.
            </p>
            <p>In the below example, we declare a prototype <code>myProto</code>.<br/>
                We then define a method <code>printResultOfMyProto</code> which accepts <code>myProto</code> as a
                parameter type.<br/>
                Later on, we define a method <code>myMethod</code>, which happens to have the same prototype
                as <code>myProto</code>.<br/>
                Finally, in the <code>main</code> method, we instantiate a Method expression, which can be used as a
                parameter when calling <code>printResultOfMyProto</code>.<br/>
            </p>


            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={14} sampleUrl="samples/expressions/method.pec" runnable={true}/>
            </React.Fragment>;
    }

}

export default new ThisTopic();