import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Tuple");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>Tuple</h2>

            <p>The Tuple type is a technical type used to keep together 0 or more items of different types.<br/>
                The items themselves can be of any type.<br/>
                A Tuple type is declared as follows.</p>
                <pre><code>(,) -> the type Tuple</code></pre>
                <p>A Tuple literal must be enclosed in parenthesis '(' and ')', the items being separated by a comma ','.<br/>
                For Tuple comprising 0 or 1 item, because the above could be interpreted as a parenthesized expression, a comma ',' must precede the right parenthesis.</p>
                <pre><code>{String.raw`(,) -> the empty Tuple
(3.14,) -> a Tuple of 1 item
("Paris", '2015-06-12', -113.87) -> a Tuple of 3 items`}</code></pre>
                <p> Items in a Tuple can be accessed individually using their position.<br/>
                    Positions start at 1 and end at the list length.</p>
                <pre><code>{String.raw`a = ("Paris", '2015-06-12', -113.87) -> assign a Tuple of 3 items to variable 'a'
a[1] -> get item at position 1 in Tuple referenced by variable 'a' i.e. the Text "Paris"`}</code></pre>
            <br/>

            <h3>
                Tuple attributes
            </h3>
            <p>Tuple values have the following attributes:</p>
            <ul>
                <li><code>count</code>: returns an Integer equal to the number of items in the tuple</li>
                <PromptoPlayer sampleUrl="samples/types/tuple/count.pec" runnable={true}/>
            </ul>
            <br/>
            </React.Fragment>;
    }

}

export default new ThisTopic();