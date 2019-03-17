import React from 'react';
import Topic from "../Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Sort");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Sort expressions</h2>

            <p>Sort expressions are used to produce a sorted list from an existing collection.<br/>
                A Sort expression is a code fragment which produces a list, whose item type is the same as the item
                type of the collection being sorted,
                which can then be used as an input for other operations: print, write, method call and so forth.<br/>
                A Sort expression has the form <code>sorted <i>collection</i></code>
                where <code>collection</code> is a collection value.<br/>
            </p>
            <p>The type of the resulting value is the same as the List value.</p>

            <h3>Using <i>native</i> sorting</h3>

            <p>Sorting a collection of simple values is done using <i>native</i> sorting, as follows:</p>
            <PromptoPlayer sampleUrl="samples/expressions/sort-native.pec" runnable={true}/>
            <br/>

            <h3>Sorting backwards</h3>

            <p>Sorting backwards is done by inserting the <code>descending</code> keyword after
                the <code>sorted</code> one.<br/>
                In O and M dialects, the <code>desc</code> abbreviated keyword is preferred.</p>
            <PromptoPlayer sampleUrl="samples/expressions/sort-backwards.pec" runnable={true}/>
            <br/>

            <h3>Sorting a collection of custom objects</h3>

            <p>When sorting custom objects there is no <i>natural</i> order. It is therefore necessary to specify
                how to compare custom objects.<br/>
                This is done by using a <i>key</i> on which exists a <i>natural</i> order.</p>

            <h3>Sorting lists of custom objects by existing <i>key</i> attribute</h3>

            <p>When a custom object comprises a <i>key</i>, this attribute can be used to sort a collection implicitly.
            </p>
            <PromptoPlayer lines={10} sampleUrl="samples/expressions/sort-implicit.pec" runnable={true}/>
            <br/>

            <h3>Sorting lists of custom objects by any attribute</h3>

            <p>Any <i>native</i> attribute can be used to sort a collection explicitly.</p>
            <PromptoPlayer lines={10} sampleUrl="samples/expressions/sort-attribute.pec" runnable={true}/>
            <br/>

            <h3>Sorting lists of custom objects by expression</h3>

            <p>Alternately, lists of custom objects can be sorted using expressions as key, as follows: </p>
            <PromptoPlayer lines={10} sampleUrl="samples/expressions/sort-expressions.pec" runnable={true}/>
            <br/>

            </React.Fragment>;
    }

}

export default new ThisTopic();