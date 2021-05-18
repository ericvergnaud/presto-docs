import React from 'react';
import PromptoPlayer from "../../../player/PromptoPlayer";
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Calling");
    }

    renderContent(topicSelected) {
        return <>
            <h2>Calling methods</h2>
            <p>Calling methods is done simply by using the method name optionally followed by its arguments name and
                value pairs.</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={8} sampleUrl="samples/methods/add3Integers.pec" runnable={true}/>
            <br/>
            <p>Thanks to naming, arguments can be provided in any sequence, which makes it clear how the arguments are used.</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={8}  sampleUrl="samples/methods/namedArguments.pec" runnable={true}/>
            <br/>
            <p>Naming the arguments is mandatory in Prompto. However, when a method accepts only 1 argument, the
                argument name can be omitted:</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={8}  sampleUrl="samples/methods/anonymousArgument.pec" runnable={true}/>
            </>;
    }

}

export default new ThisTopic();