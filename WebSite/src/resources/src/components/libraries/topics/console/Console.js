import React from 'react';
import Topic from "../../../content/Topic";
import print from "./print";
import printLine from "./printLine";
import Buffer from "./Buffer";

class ThisTopic extends Topic {

    constructor() {
        super("Console", [ print, printLine, Buffer ]);
    }

    renderContent(topicSelected) {
        return <React.Fragment>
                <h2>Console output</h2>
                <p>Prompto lets you <i>print</i> information to the console output.<b/>
                    This is useful during development, and is achived using a <code>print</code> or <code>printLine</code> method call.
                </p>
                <p>Alternately, output can be sent to a <code>Writer</code>.
                    As of writing, Prompto supports a <code>ConsoleWriter</code> (the default) and a <code>TextWriter</code>.</p>

                <h2>Buffer</h2>
                <p>Buffer is a native <i>resource</i> which follows Prompto resource requirements.<br/>
                    You can <code>read</code> and <code>write</code> Text to a <i>Buffer</i>.
                </p>
            </React.Fragment>;
    }

}

export default new ThisTopic();