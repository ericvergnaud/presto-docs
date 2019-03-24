import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Set");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>Set</h2>

            <p>The Set type is a technical type used to keep together 0 or more <b><i>distinct</i></b> items of the same
                type.<br/>
                The items themselves can be of any type.<br/>
                A Set type is declared by adding angle brackets '&lt;&gt;' after the item type.
            </p>
            <pre><code>{String.raw`Text<> -> the type Text set`}</code></pre>
            <p>A Set literal must be enclosed in angle brackets '&lt;' and '&gt;', the items being separated by a comma ','.</p>
            <pre><code>{String.raw`<12, 15, -3> -> a set of 3 Integers
<"Paris", "London", "Singapore"> -> a Set of 3 Texts`}</code></pre>
            <p>Items in a Set cannot be accessed individually, because the position in the Set may change internally
                when ensuring uniqueness.<br/>
                Set items are accessed using iterators or predicates.</p>
            <pre><code>{String.raw`s = <12, 15, -3> -> assign a Set of 3 Integers to variable 's'
for each i in s -> iterate over items in Set referenced by variable 's'
s contains 12 -> return true if Set referenced by variable 's' contains the Integer 12`}</code></pre>
            <br/>

            <h3>
                Set attributes
            </h3>
            <p>Set values have the following attributes:</p>
            <ul>
                <li><code>count</code>: returns an Integer equal to the number of items in the set</li>
                <PromptoPlayer sampleUrl="samples/types/set/count.pec" runnable={true}/>
            </ul>
            <br/>

        </React.Fragment>
    ;
    }

    }

    export default new ThisTopic();