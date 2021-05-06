import React from 'react';
import Topic from "../../../content/Topic";
import PromptoPlayer from "../../../player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Read");
    }

    renderContent(topicSelected) {
        return <>

            <h2>Read expressions</h2>

            <p>Read expressions are used to read content from a resource such as a file or a web site.<br/>
                A read expression is a code fragment which produces a <code>Text</code> value, which can then be used as
                an input for other operations: print, write, method call and so forth.
            </p>
            <h3>
                Reading the entire content of an <i>inlined</i> resource
            </h3>
            <p>Reading the entire content of a resource can be achieved using an <i>inlined</i> resource.<br/>
                An <i>inlined</i> resource is initialized directly within a <code>read</code> expression.<br/>
                This is very useful for small files or small messages received from incoming network connections.
            </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/expressions/read-inline.pec" runnable={true}/>
            <br/>

            <h3>
                Reading content line by line from a <i>managed</i> resource
            </h3>
            <p>Reading content line by line from a resource can be achieved using a <i>managed</i> resource.<br/>
                A <i>managed</i> resource is initialized through a <code>with</code> clause followed by a list of
                statements.<br/>
                The resource is said to be <i>managed</i> because Prompto will take care of resource cleanup when it
                exits
                the statements controlled by <code>with</code> clause.
            </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={10} sampleUrl="samples/expressions/read-managed.pec" runnable={true}/>
            <br/>

            <p>It is illegal to call <code>write</code> or <code>read</code> on a resource which is
                neither <i>managed</i> nor <i>inlined</i>.</p>

            </>;
    }

}

export default new ThisTopic();