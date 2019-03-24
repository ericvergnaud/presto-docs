import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Creating");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Creating objects i.e. category instances</h2>

            <p>In Prompto, all values (number, text, user defined...) are <i>objects</i>. However it is common to use
                the word <i>object</i> as a nickname for <i>category instance</i>.</p>
            <p>Creating an object i.e. instantiating a category is done by using its name, optionally followed by
                attribute assignments.</p>
            <p>The syntax varies depending on the dialect, as follows:</p>
            <PromptoPlayer lines={10} sampleUrl="samples/categories/creation.pec" runnable={true}/>
            <br/>
            <p>Attribute assignments are optional, it is legal to assign only some attributes, or none.</p>
            <PromptoPlayer lines={10} sampleUrl="samples/categories/creation-optional.pec" runnable={true}/>
        </React.Fragment>;
    }

}

export default new ThisTopic();