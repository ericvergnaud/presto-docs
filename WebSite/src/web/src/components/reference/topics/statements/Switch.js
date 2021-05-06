import React from 'react';
import PromptoPlayer from "../../../player/PromptoPlayer";
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Switch");
    }

    renderContent(topicSelected) {
        return <>
            <h2>Switch statements</h2>

            <p>A switch statement is a way to change the flow of execution based on a variable value.<br/>
                A switch statement has the form <code>switch on <i>a</i></code> followed by one or more
                <code>when <i>value statements</i></code> where <code><i>a</i></code> is an expression,
                <code><i>value</i></code> is an expression compatible with <code><i>a</i></code>,
                and <code><i>statements</i></code> is a list of statements which will be executed whenever
                <code><i>a</i></code> matches <code><i>value</i></code>.</p>
                 <p>Once the value is matched, and the corresponding statements are exectued, the flow of execution
                    resumes at the end of the switch statement.
                </p>
                <PromptoPlayer key={PromptoPlayer.nextKey()} lines={10} sampleUrl="samples/statements/switch.pec" runnable={true}/>
                <br/>

                <p>Optionally, a switch statement can end with an <code>otherwise</code> clause and list of statements,
                    which will be executed when no previous <code><i>value</i></code> matches. The <code>otherwise</code> clause
                    must be after all the <code>when</code> clauses.
                </p>
                <PromptoPlayer key={PromptoPlayer.nextKey()} lines={10} sampleUrl="samples/statements/switch-otherwise.pec" runnable={true}/>
                <br/>

               <h3>
                    Matching lists of values
                </h3>

                <p>Switch statements support matching list of values using <code>when in <i>values</i></code> where <code><i>values</i></code>
                    must be a collection.
                </p>
                <PromptoPlayer key={PromptoPlayer.nextKey()} lines={10} sampleUrl="samples/statements/switch-list.pec" runnable={true}/>

                <br/>
                Note: in Objy dialect, Prompto uses the <code>switch</code>, <code>case</code> and <code>default</code> keywords like in C++, Java and C#.
            </>;
    }

}

export default new ThisTopic();