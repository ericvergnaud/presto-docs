import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Document");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>Document</h2>

            <p>The <code>Document</code> type is a technical type used to manipulate arbitrary data structures with loose typing.<br/>
                A Document has items which can be of any type, atomic, collection or Document.<br/>
                A Document is useful to read data from messages, files or the Internet, and convert it to typed data.<br/>
            </p>
            <h3>Creating a Document</h3>
            <p>Creating a Document is done simply by using a Document literal, enclosed in curly braces '{' and '}', the items being separated by a comma ',', the key and value being separated by a semi colon ':'.</p>
            <pre><code>{String.raw`{} -> an empty Document
{"Paris": "France", "John": 20000} -> a Document of 2 keys and  values`}</code></pre>
            <p>Document <i>keys</i> starting with a lowercase letter and not comprising special characters do not need to be enclosed in double-quotes.</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/types/document/member.pec" runnable={true}/>
            <br/>
            <p>Alternately, a Document can be created using the <code>Document</code> keyword and assigning it to a variable. Once the document is created, it can be populated simply by assigning values to members. Both member definition and
                member population occur at the same time i.e. a document has no predefined members.
            </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/types/document/assign.pec" runnable={true}/>

            <h3>Accessing Document members</h3>
            <p>Items in a Document can be accessed individually using their key.</p>
            <pre><code>{String.raw`d = {"Paris": "France", "London": "England"} -> assign a Document of 2 Texts to variable 'd'
d["Paris"] -> get item with key "Paris" in Document referenced by variable 'd' i.e. "France"`}</code></pre>

            <h3>Populating <i>deep</i> members</h3>
            <p>A <i>deep</i> member is a member that is not directly accessible from the root of a Document.<br/>
                Prompto gracefully creates missing members on the fly, making it very easy to populate them:
            </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/types/document/assign-deep.pec" runnable={true}/>

            <h3>Populating list members</h3>
            <p>Document members can also be lists: </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/types/document/assign-list.pec" runnable={true}/>

        </React.Fragment>;
    }

}

export default new ThisTopic();