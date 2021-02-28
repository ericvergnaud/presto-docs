import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Type");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Type expressions</h2>

            <p>Type expressions are used to check for equality or equivalence of value type.<br/>
                A type expression is a code fragment which produces a <code>Boolean</code> value, which can then be used
                as an input for other operations: print, write, method call and so forth.<br/>
            </p>
            <h3>
                Checking type of built-in values
            </h3>
            <p>Checking type of built-in values is done using the <code>is a</code> or <code>is an</code> operator.<br/>
                Inequality of types is checked using the <code>is not a</code> or <code>is not an</code> operator.
                Prompto supports.
            </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={12} sampleUrl="samples/expressions/type-is-native.pec" runnable={true}/>
            <br/>

            <h3>
                Checking type of user defined values
            </h3>
            <p>When checking type of user defined values, Prompto checks for compatibility rather than equality.
            </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={10} sampleUrl="samples/expressions/type-is-user.pec" runnable={true}/>
            <br/>

            <h3>
                Auto downcast
            </h3>
            <p>When checking type of user defined values in an <code>if</code> statement, Prompto automatically
                downcasts the value type for the corresponding statements.
            </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={20} sampleUrl="samples/expressions/auto-cast.pec" runnable={true}/>
            <br/>


            </React.Fragment>;
    }

}

export default new ThisTopic();