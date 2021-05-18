import React from 'react';
import Topic from "../../../content/Topic";
import PromptoPlayer from "../../../player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("printLine");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
                    <h2>printLine <i>Any value</i></h2>
                    <p>This method has the following prototype:</p>
                    <pre>define printLine as method receiving any value</pre>
                    <p>The <i>printLine</i> method accepts any type of value, and will convert it to Text by calling its built-in <code>text</code> attribute.<br/>
                        It sends the output to the ConsoleWriter, followed by a carriage return.
                    </p>
                    <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/console/printLineAny.pec" runnable={true}/>

                    <h2>printLine <i>Any value</i> to a <i>Writer writer</i></h2>
                    <p>This method has the following prototype:</p>
                    <pre>define printLine as method receiving any value and Writer writer</pre>
                    <p>The <i>print</i> method accepts any type of value, and will convert it to Text by calling its built-in <code>text</code> attribute.<br/>
                        It sends the output to the writer, followed by a carriage return. This can be convenient to send the output to the error output.
                    </p>
                    <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/console/printLineAnyWriter.pec" runnable={true}/>

                </React.Fragment>;
    }

}

export default new ThisTopic();