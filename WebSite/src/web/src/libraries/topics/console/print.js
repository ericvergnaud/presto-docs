import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("print");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
                    <h2>print <i>Any value</i></h2>
                    <p>This method has the following prototype:</p>
                    <pre>define print as method receiving any value</pre>
                    <p>The <i>print</i> method accepts any type of value, and will convert it to Text by calling its built-in <code>text</code> attribute.<br/>
                        It sends the output to the ConsoleWriter.
                    </p>
                    <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/console/printAny.pec" runnable={true}/>

                    <h2>print <i>Any value</i> to a <i>Writer writer</i></h2>
                    <p>This method has the following prototype:</p>
                    <pre>define print as method receiving any value and Writer writer</pre>
                    <p>The <i>print</i> method accepts any type of value, and will convert it to Text by calling its built-in <code>text</code> attribute.<br/>
                        It sends the output to the writer. This can be convenient to send the output to the error output.
                    </p>
                    <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/console/printAnyWriter.pec" runnable={true}/>

                </React.Fragment>;
    }

}

export default new ThisTopic();