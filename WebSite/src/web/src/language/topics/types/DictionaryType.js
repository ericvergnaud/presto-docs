import React from 'react';
import Topic from "../Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Dictionary");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>Dictionary</h2>

            <p>The Dictionary type is a technical type used to keep together 0 or more items of the same type and access them using a Text key.<br/>
                The items themselves can be of any type.<br/>
                A Dictionary type is declared by adding colon surrounded by angle brackets '&lt;:&gt;' after the item type.</p>
                <pre><code>{String.raw`Text<:> -> the type Text dictionary`}</code></pre>
                <p>A Dictionary literal must be enclosed in angle brackets '&lt;' and '&gt;', the items being separated by a comma ',', the key and value being separated by a semi colon ':'.</p>
                <pre><code>{String.raw`<:> -> an empty Dictionary
<"Paris": "France", "London": "England", "Berlin": "Germany"> -> a Dictionary of 3 keys and Text values`}</code></pre>
                <p> Items in a Dictionary can be accessed individually using their key.</p>
                <pre><code>{String.raw`d = <"Paris": "France", "London": "England"> -> assign a Dictionary of 2 Texts to variable 'd'
d["Paris"] -> get item with key "Paris" in Dictionary referenced by variable 'd' i.e. "France"`}</code></pre>


            <h3>
                Dictionary attributes
            </h3>
            <p>Dictionary values have the following attributes:</p>
            <ul>
                <li><code>count</code>: returns an Integer equal to the number of key/value pairs in the dictionary</li>
                <li><code>keys</code>: returns a Set of Text values containing all the keys in the dictionary</li>
                <li><code>values</code>: returns a List of values containing all the values in the dictionary.
                    The exact type of the List is determined by the exact type of the dictionary</li>
                <PromptoPlayer lines={8} sampleUrl="samples/types/dictionary/attributes.pec" runnable={true}/>
            </ul>
            <br/>

            </React.Fragment>;
    }

}

export default new ThisTopic();