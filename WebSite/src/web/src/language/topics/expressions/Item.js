import React from 'react';
import Topic from "../Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Item");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Item expressions</h2>

            <p>Item expressions are used to retrieve a value from a collection value.<br/>
                An item expression is a code fragment which produces a value, whose type is determined by the value
                being retrieved,
                which can then be used as an input for other operations: print, write, method call and so forth.<br/>
                An item expression has the
                form <code><i>collection</i>[<i>item</i>]</code> where <code>collection</code>
                is a collection value and <code>item</code> has the type expected
                by <code><i>collection</i></code>.<br/>
            </p>

            <h3>List item</h3>

            <p>An item from a List value must be retrieved using an Integer, ranging from 1
                to <i>n</i> where <i>n</i> is the number of items in the List value.<br/>
                If the <i>item</i> value is out of range, an <code>INDEX_OUT_OF_RANGE</code> error will be raised.<br/>
                The type of the resulting value is the List item type.
            </p>
            <PromptoPlayer sampleUrl="samples/expressions/item-list.pec" runnable={true}/>
            <br/>

            <h3>Tuple item</h3>

            <p>An item from a Tuple value must be retrieved using an Integer, ranging from 1
                to <i>n</i> where <i>n</i> is the number of items in the Tuple value.<br/>
                If the <i>item</i> value is out of range, an <code>INDEX_OUT_OF_RANGE</code> error will be raised.<br/>
                Prompto cannot infer the type of Tuple items, so the type of the resulting value is <code>Any</code>.
            </p>
            <PromptoPlayer sampleUrl="samples/expressions/item-tuple.pec" runnable={true}/>
            <br/>

            <h3>Range item</h3>

            <p>An item from a Range value must be retrieved using an Integer, ranging from 1
                to <i>n</i> where <i>n</i> is the number of items in the Range value.<br/>
                If the <i>item</i> value is out of range, an <code>INDEX_OUT_OF_RANGE</code> error will be raised.<br/>
                The type of the resulting value is the Range item type.
            </p>
            <PromptoPlayer sampleUrl="samples/expressions/item-range.pec" runnable={true}/>
            <br/>

            <h3>Dictionary item</h3>

            <p>An item from a Dictionary value must be retrieved using a Text key.<br/>
                If the Dictionary has no value for the key, it will return the <code>null</code> value.<br/>
                The type of the resulting value is the Dictionary item type.
            </p>
            <PromptoPlayer sampleUrl="samples/expressions/item-dictionary.pec" runnable={true}/>
            <br/>

            <h3>Document item</h3>

            <p>An item from a Document value must be retrieved using a Text key.<br/>
                If the Document has no value for the key, it will return the <code>null</code> value.<br/>
                Prompto cannot infer the type of Document items, so the type of the resulting value is <code>Any</code>.
            </p>
            <PromptoPlayer sampleUrl="samples/expressions/item-document.pec" runnable={true}/>
            <br/>

            <h3>Text item</h3>

            <p>Although Text values are considered 'atomic' by Prompto, it can be convenient to sometimes treat them as
                a List of Character.<br/>
                An item from a Text value must be retrieved using an Integer, ranging from 1
                to <i>n</i> where <i>n</i> is the number of characters in the Text value.<br/>
                If the <i>item</i> value is out of range, an <code>INDEX_OUT_OF_RANGE</code> error will be raised.<br/>
                The type of the resulting value is a Character.
            </p>
            <PromptoPlayer sampleUrl="samples/expressions/item-text.pec" runnable={true}/>
            <br/>

            <h3>Set item</h3>

            <p>Set items have no given order, so it does not make much sense to retrieve a given Set item.<br/>
                It is also a slow operation, because Prompto needs to iterate over the items until it reaches the
                selected one.<br/>
                It can however be convenient during development to retrieve Set items. This is the <i>only</i> reason
                why Prompto supports this feature.</p>
            <p>An item from a Set value must be retrieved using an Integer, ranging from 1 to <i>n</i> where <i>n</i> is
                the number of items in the Set value.<br/>
                If the <i>item</i> value is out range, an <code>INDEX_OUT_OF_RANGE</code> error will be raised.<br/>
                The type of the resulting value is the Set item type.
            </p>
            <p><b>You must NOT use Set items in production code. This feature is for development only.</b></p>
            <PromptoPlayer sampleUrl="samples/expressions/item-set.pec" runnable={true}/>
            <br/>

            <p><i>(in JavaScript, Set items are retrieved in the order used to create them, which is why in the above
                example, the retrieved values are the same as the input values.
                You must NOT rely on this behavior, which is a side effect of the JavaScript engine
                implementation)</i></p>

            </React.Fragment>;
    }

}

export default new ThisTopic();