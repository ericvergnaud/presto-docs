import React from 'react';
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Decimal");
    }

    renderContent(topicSelected) {
        return <>
            <h2>Decimal</h2>

            <p>The <code>Decimal</code> type is a technical type used for non integral numbers,
                using 8 bytes as specified by <a target = "_blank" rel="noopener noreferrer"
                                                 href="https://www.wikipedia.org/wiki/IEEE_754">IEE 754</a>.<br/>
                A Decimal literal is simply a sequence of digits, followed by a dot and another sequence of digits, such as <code>13465.02</code>.<br/>
                Prompto also supports Decimal literals using scientific notation, such as <code>0.074e32</code>.<br/>
            </p>
            <p>
                Please note that due to their internal binary representation, not all Decimal values can be accurately represented.<br/>
                For example, the internal representation for <code>1.3</code> is actually <code>1.2999999999999998</code>.<br/>
                See this <a target="_blank" rel="noopener noreferrer"
                            href="https://docs.python.org/2/tutorial/floatingpoint.html">detailed explanation</a> with more examples.
            </p>

        </>;
    }

}

export default new ThisTopic();