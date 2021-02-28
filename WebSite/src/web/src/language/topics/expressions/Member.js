import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Member");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Member expression</h2>

            <p>Member expressions are used to retrieve the value of an attribute of an object.<br/>
                A member expression is a code fragment which produces a value whose type is determined by the attribute
                type,
                which can then be used as an input for other operations: print, write, method call and so forth.<br/>
                Member expressions have the following form:<br/>
                <code><i>instance</i>.<i>name</i></code>, where <code><i>instance</i></code> is any value
                and <code><i>name</i></code>
                is the name of a an attribute supported by this value.
            </p>
            <p>Prompto uses the same syntax for built-in attributes and user defined ones.</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={8} sampleUrl="samples/expressions/member.pec" runnable={true}/>
        </React.Fragment>;
    }

}

export default new ThisTopic();