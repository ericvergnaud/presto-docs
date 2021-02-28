import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Return");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>Return statements</h2>

            <p>A return statement is used to exit a method explicitly, and optionally return a value.
                In the absence of a return statement, a method exits after executing the last statement, without
                returning a value.
                A return statement has the form <code>return</code> optionally followed by <code>expression</code>, where
                expression is any valid expression.<br/>
            </p>
            <h3>
                Exiting a method without returning a value
            </h3>
            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/statements/return.pec" runnable={true}/>
            <br/>

            <h3>
                Returning a value
            </h3>
            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/statements/return-value.pec" runnable={true}/>
            <br/>

            <h3>
                Multiple return statements
            </h3>
            <p>Prompto supports multiple return statements in a method body, provided that all return expressions have
                compatible types</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={10} sampleUrl="samples/statements/return-multi.pec" runnable={true}/>

            </React.Fragment>;
    }

}

export default new ThisTopic();