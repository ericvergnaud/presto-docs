import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Parenthesis");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h3>Parenthesis expressions</h3>

            <p>A parenthesis expression is used to manage precedence.<br/>
                A parenthesis expression is a code fragment which produces a value, whose type is determined by the enclosed value, and which can then be used as an input for other operations: print, write, method call and so forth.<br/>
                A parenthesis expression has the form <code>( <i>exp</i> )</code>.
            </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/expressions/parenthesis.pec" runnable={true}/>
            <p>In the above example, both expressions, with or without parenthesis, trigger the same result. But using parenthesis makes it clear for readers what the intent is.</p>

            </React.Fragment>;
    }

}

export default new ThisTopic();