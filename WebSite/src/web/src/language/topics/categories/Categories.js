import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";
import Creating from "./Creating";
import Copying from "./Copying";
import Embedding from "./Embedding";
import Modifying from "./Modifying";
import Storing from "./Storing";
import Extending from "./Extending";
import Methods from "./Methods";
import Abstract from "./Abstract";

class ThisTopic extends Topic {

    constructor() {
        super("Categories", [ Creating, Copying, Embedding, Modifying, Storing, Extending, Abstract, Methods ]);
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Categories</h2>

            <p>Prompto lets developers define domain types using <i>category</i> types.
                A <i>category</i> type is defined by composing 1 or more attributes, and/or existing category
                types.<br/>
                A simple <i>category</i> type is defined by simply listing its attributes, as follows:
            </p>
            <PromptoPlayer lines={8} sampleUrl="samples/categories/example.pec"/>
            <br/>
            <p>On top of composing attributes, categories also support dedicated methods.</p>
            <p><i>Prompto categories play a role similar to <code>classes</code> in OOP languages.</i></p>

            </React.Fragment>;
    }

}

export default new ThisTopic();