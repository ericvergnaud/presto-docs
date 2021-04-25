import React from 'react';
import Topic from "../../../content/Topic";
import PromptoPlayer from "../../../player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Equality");
    }

    renderContent(topicSelected) {
        return <>
            <h2>Equality expressions</h2>

            <p>Equality expressions are used to check for equality (or inequality) of 2 values.<br/>
                An equality expression is a code fragment which produces a <code>Boolean</code> value, which can then be
                used as an input for other operations: print, write, method call and so forth.<br/>
                In the context of programming, equality can have 2 meanings, whether 2 values are the same computable
                object, or the values themselves are actually equal.<br/>
            </p>
            <h3>
                Checking equality of objects
            </h3>
            <p>Checking equality of objects is done using the <code>is</code> operator.<br/>
                Inequality of objects is checked using the <code>is not</code> operator.<br/>
                In the below example, <code>a</code> and <code>b</code> refer to the same value.<br/>
                On the other hand, <code>a</code> and <code>c</code> refer to different objects (although those objects
                have equal value).
            </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={9} sampleUrl="samples/expressions/equal-object.pec" runnable={true}/>
            <br/>

            <h3>
                Checking equality of values
            </h3>
            <p>Comparing equality of values is done using the <code>=</code> operator in E, or
                the <code>==</code> operator in O or M.<br/>
                Inequality of values is checked using the <code>{String.raw`<>`}</code> operator in E, or the <code>!=</code> operator in O or M.<br/>
                In the below example, <code>a</code> and <code>b</code> have the same value.<br/>
                On the other hand, <code>a</code> and <code>c</code> have different values.
            </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={9} sampleUrl="samples/expressions/equal-value.pec" runnable={true}/>
            <br/>

            <h3>
                Checking rough equality of values
            </h3>
            <p>Strict equality is not always desirable. For example <code>"hello"</code> and <code>"HELLO"</code> are
                not equal values.<br/>
                However, it is sometimes desirable to treat them as equal.<br/>
                Rough equality applies to <code>Text</code> values only (this may be extended in the future).<br/>
                Rough equality of values is checked using the <code>~</code> operator in E, or
                the <code>~=</code> operator in O or M.<br/>
            </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/expressions/equal-rough.pec" runnable={true}/>
            <br/>

            <h3>Checking equality of user defined values</h3>

            <p>Prompto supports user defined equality. See categories for details.</p>
            </>;
    }

}

export default new ThisTopic();