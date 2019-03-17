import React from 'react';
import Topic from "../Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Logical");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Logical expressions</h2>

            <h3>Logical AND</h3>

            <p>Logical AND expressions are used to check both of 2 Boolean values.<br/>
                A logical AND expression is a code fragment which produces a <code>Boolean</code> value, which can then
                be used as an input for other operations: print, write, method call and so forth.<br/>
                A logical AND expression has the
                form <code>a <i>op</i> b</code> where <code>a</code> and <code>b</code> are Boolean values
                and <code><i>op</i></code> is one the following comparison operators:</p>
            <ul>
                <li><code>and</code> in the E and M dialects</li>
                <li><code>&amp;&amp;</code> in the O dialect</li>
            </ul>

            <p>Prompto is guaranteed to check <code>a</code> first, and only check <code>b</code> if <code>a</code> is
                true.</p>
            <PromptoPlayer sampleUrl="samples/expressions/and.pec" runnable={true}/>
            <br/>

            <h3>Logical OR</h3>

            <p>Logical OR expressions are used to check either of 2 Boolean values.<br/>
                A logical OR expression is a code fragment which produces a <code>Boolean</code> value, which can
                then be used as an input for other operations: print, write, method call and so forth.<br/>
                A logical OR expression has the
                form <code>a <i>op</i> b</code> where <code>a</code> and <code>b</code> are Boolean values
                and <code><i>op</i></code> is one the following comparison operators:</p>
            <ul>
                <li><code>or</code> in the E and M dialects</li>
                <li><code>||</code> in the O dialect</li>
            </ul>

            <p>Prompto is guaranteed to check <code>a</code> first, and only
                    check <code>b</code> if <code>a</code> is false.</p>
            <PromptoPlayer sampleUrl="samples/expressions/or.pec" runnable={true}/>
            <br/>

            <h3>Logical NOT</h3>

            <p>Logical NOT expressions are used to reverse Boolean values.<br/>
                A logical NOT expression is a code fragment which produces a <code>Boolean</code> value, which
                can then be used as an input for other operations: print, write, method call and so forth.<br/>
                A logical NOT expression has the form <code><i>op</i> a</code> where <code>a</code> is a Boolean
                value and <code><i>op</i></code> is one the following comparison operators:</p>

            <ul>
                <li><code>not</code> in the E and M dialects</li>
                <li><code>!</code> in the O dialect</li>
            </ul>
            <PromptoPlayer sampleUrl="samples/expressions/not.pec" runnable={true}/>
            <br/>
            </React.Fragment>;
    }

}

export default new ThisTopic();