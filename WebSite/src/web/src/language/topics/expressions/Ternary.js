import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Ternary");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Ternary expressions</h2>

            <p>Ternary expressions are expressions used to provide alternate values depending on a logical
                expression.<br/>
                A ternary expression is a code fragment which produces a value, which can then be used as an input for
                other operations: print, write, method call and so forth.<br/>
                A ternary expression has the form:</p>
            <ul>
                <li><code><i>condition</i> ? <i>value-if-true</i> : <i>value-if-false</i></code> in O dialect</li>
                <li><code><i>value-if-true</i> if <i>condition</i> else <i>value-if-false</i></code> in M and E
                    dialects
                </li>
            </ul>
             <p>where <code>condition</code> is a boolean expression
                and <code>value-if-true</code> and <code>value-if-false</code> are expressions with compatible
                types.
            </p>

            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={8} sampleUrl="samples/expressions/ternary.pec" runnable={true}/>

            </React.Fragment>;
    }

}

export default new ThisTopic();