import React from 'react';
import PromptoPlayer from "../../../player/PromptoPlayer";
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Write");
    }

    renderContent(topicSelected) {
        return <>

            <h2>Write statements</h2>

            <p>Write expressions are used to write content to a resource such as a file or a web site. </p>
            <h3>
                Writing the entire content to an <i>inlined</i> resource
            </h3>
            <p>Writing the entire content to a resource can be achieved using an <i>inlined</i> resource.<br/>
                An <i>inlined</i> resource is initialized directly within a <code>write</code> statement.<br/>
                This is very useful for small files or small messages sent to outgoing network connections.<br/>
                It is however impossible to demonstrate within a browser, where programmatic access to local files is
                prohibited for security reasons.<br/>
                In the below example, we write to an <i>inlined</i> Buffer instead.<br/>
                <i>( the Buffer only exists during the execution of the statement, and therefore it cannot be read back
                    to display its content )</i>
            </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/statements/write-inline.pec" runnable={true}/>

            <h3>
                Writing content line by line to a <i>managed</i> resource
            </h3>
            <p>Writing content line by line to a resource can be achieved using a <i>managed</i> resource.<br/>
                A <i>managed</i> resource is initialized through a <code>with</code> clause followed
                by <code>do</code> and a list of statements.<br/>
                The resource is said to be <i>managed</i> because Prompto will take care of resource cleanup when it
                exits
                the statements controlled by the <code>with</code> clause.
            </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={10} sampleUrl="samples/statements/write-managed.pec" runnable={true}/>
            <br/>
            <p>It is illegal to call <code>write</code> or <code>read</code> on a resource which is
                neither <i>managed</i> nor <i>inlined</i>.</p>

            </>;
    }

}

export default new ThisTopic();