import React from 'react';
import Topic from "../Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Integer");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>Integer</h2>

            <p>The <code>Integer</code> type is a technical type used for integral numbers, using 8 bytes, thus ranging from -2<sup>63</sup> to 2<sup>63</sup>-1.<br/>
                An Integer literal is simply a sequence of digits, such as <code>13465</code>.<br/>
                Prompto also supports Integer literals using hexadecimal notation, such as <code>0xA3B2FE</code>.<br/>
                Finally, Prompto supports 2 special Integers, <code>MIN_INTEGER</code> and <code>MAX_INTEGER</code>.
            </p>

        </React.Fragment>;
    }

}

export default new ThisTopic();