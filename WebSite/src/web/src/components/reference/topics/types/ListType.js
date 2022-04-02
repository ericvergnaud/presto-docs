import React from 'react';
import PromptoPlayer from "../../../player/PromptoPlayer";
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("List");
    }

    renderContent(topicSelected) {
        return <>
            <h2>List</h2>

            <p>The List type is a technical type used to keep together 0 or more items of the same type.<br/>
                The items themselves can be of any type.<br/>
                A List type is declared by adding square brackets '[]' after the item type.
            </p>
            <pre><code>Text[] -> the type Text list</code></pre>
            <p>A List literal must be enclosed in square brackets '[' and ']', the items being separated by a comma ','.</p>
            <pre><code>{String.raw`[12, 15, -3] -> a List of 3 Integers
["Paris", "London", "Singapore"] -> a List of 3 Texts`}</code></pre>
                <br/>
                <p>Items in a List can be accessed individually using their position.<br/>
                Positions start at 1 and end at the list length.</p>
                <pre><code>{String.raw`a = [12, 15, -3] -> assign a List of 3 Integers to variable 'a'
a[1] -> get item at position 1 in List referenced by variable 'a' i.e. the Integer 12`}</code></pre>
            <br/>

            <h3>
                List attributes
            </h3>
            <p>List values have the following attributes:</p>
            <ul>
                <li><code>count</code>: returns an Integer equal to the number of items in the list</li>
                <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/types/list/count.pec" runnable={true}/>
            </ul>

            <h3>
                List methods
            </h3>
            <p>List values have the following methods:</p>
            <ul>
                <li><code>indexOf</code>: returns a 1-based Integer index of a value, or null if absent<p/>
                    <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="/samples/types/list/indexOf.pec" runnable={true}/>
                    <br/>
                </li>
                <li><code>removeItem</code>: removes the value located at a 1-based index in a mutable list<p/>
                    <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="/samples/types/list/removeItem.pec" runnable={true}/>
                    <br/>
                </li>
                <li><code>addValue</code>: appends a value at the end of a mutable list<p/>
                    <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="/samples/types/list/addValue.pec" runnable={true}/>
                    <br/>
                </li>
                <li><code>insertValue</code>: inserts a value at a specific index of a mutable list<p/>
                    <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="/samples/types/list/insertValue.pec" runnable={true}/>
                    <br/>
                </li>
                <li><code>removeValue</code>: removes a value from a mutable list<p/>
                    <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="/samples/types/list/removeValue.pec" runnable={true}/>
                    <br/>
                </li>
                <li><code>join</code>: returns a Text built by concatenating textual values of the list, optionally separated by a Text value<p/>
                    <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="/samples/types/list/join.pec" runnable={true}/>
                    <br/>
                </li>
                <li><code>toSet</code>: returns a Set containing all unique values<p/>
                    <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="/samples/types/list/toSet.pec" runnable={true}/>
                    <br/>
                </li>
            </ul>
            <br/>
            </>;
    }

}

export default new ThisTopic();
