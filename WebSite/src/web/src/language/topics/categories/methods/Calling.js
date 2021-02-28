import React from 'react';
import Topic from "../../../../components/Topic";
import PromptoPlayer from "../../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Calling");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>Calling category methods</h2>
            <p>Calling category methods is done simply by appending to the category instance variable a '.' followed by
                the method name,
                optionally followed by its arguments name and value pairs.</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={12} sampleUrl="samples/categories/methods/calling-simple.pec" runnable={true}/>
            <br/>

            <p>Thanks to naming, arguments can be provided in any sequence, which makes it clear how the arguments are
                used.</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={12} sampleUrl="samples/categories/methods/calling-named.pec" runnable={true}/>
            <br/>

            <p>Naming the arguments is mandatory in Prompto.</p>
            <p>However, when a method accepts only 1 argument, the argument name can be omitted:</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={12} sampleUrl="samples/categories/methods/calling-anonymous.pec" runnable={true}/>

        </React.Fragment>;
    }

}

export default new ThisTopic();