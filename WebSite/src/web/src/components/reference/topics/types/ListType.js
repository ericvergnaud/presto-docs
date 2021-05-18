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
           <br/>
            </>;
    }

}

export default new ThisTopic();