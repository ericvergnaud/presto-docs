import React from 'react';
import Topic from "../Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Storing");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Storing instances</h2>

            <p>Categories are the base unit of storage in a Prompto data store.<br/>
                Only <i>storable</i> categories can be stored and fetched.<br/>
                To mark a category as <i>storable</i>, the <code>category</code> keyword must be preceded with
                the <code>storable</code> keyword.<br/>
                Attributes are used to define the data store schema, so they must also be marked as <i>storable</i>.
            </p>
            <PromptoPlayer lines={14} sampleUrl="samples/categories/storing-example.pec" runnable={true}/>
            <br/>
            <p/>

            <p>A <i>storable category</i> can comprise both storable and non-storable attributes.<br/>
                Only <i>storable</i> attributes are stored (and therefore retrieved).</p>
            <p>In the below example,
                only <i>firstName</i> and <i>lastName</i> are <code>storable</code>, <i>dateOfBirth</i> is not:
            </p>
            <PromptoPlayer lines={16} sampleUrl="samples/categories/storing-partial.pec" runnable={true}/>

        </React.Fragment>;
    }

}

export default new ThisTopic();