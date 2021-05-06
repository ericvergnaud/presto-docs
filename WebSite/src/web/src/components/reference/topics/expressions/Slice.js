import React from 'react';
import PromptoPlayer from "../../../player/PromptoPlayer";
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Slice");
    }

    renderContent(topicSelected) {
        return <>

            <h2>Slice expressions</h2>

            <p>Slice expressions are used to extract a sub-collection of a collection value.<br/>
                A Slice expression is a code fragment which produces a value, whose type is determined by the value
                being retrieved,
                which can then be used as an input for other operations: print, write, method call and so forth.<br/>
                A Slice expression has the form <code><i>collection</i>[<i>start</i>:<i>end</i>]</code>
                where <code>collection</code> is a collection value and <code>start</code> and <code>end</code> are
                Integer values.<br/>
                Either <code><i>start</i></code> or <code><i>end</i></code> can be omitted, but not both. If omitted,
                they are replaced by their default value
                i.e. 1 and <i>n</i> where <i>n</i> is the number of collection items.<br/>
                The <code><i>end</i></code> value can be negative, in which case Prompto will count backwards.<br/>
                Both <code><i>start</i></code> and <code><i>end</i></code> items are included in the result.<br/>
                If either <code><i>start</i></code> or <code><i>end</i></code> value is out of range,
                an <code>INDEX_OUT_OF_RANGE</code> error will be raised.
            </p>

            <h3>List slice</h3>

            <p>The type of the resulting value is the same as the List value.</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={10} sampleUrl="samples/expressions/slice-list.pec" runnable={true}/>
            <br/>

            <h3>Range slice</h3>

            <p>The type of the resulting value is the same as the Range value.</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={10} sampleUrl="samples/expressions/slice-range.pec" runnable={true}/>
            <br/>

            <h3>Text slice</h3>

            <p>Although Text values are considered 'atomic' by Prompto, it can be convenient to sometimes treat
                them as a List of Character.<br/>
                The type of the resulting value is a Text.
            </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={9} sampleUrl="samples/expressions/slice-text.pec" runnable={true}/>
            <br/>


            </>;
    }

}

export default new ThisTopic();