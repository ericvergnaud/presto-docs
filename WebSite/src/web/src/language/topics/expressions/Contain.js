import React from 'react';
import Topic from "../Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Contain");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Contain expressions</h2>

            <p>Contain expressions are used to check if a value is a member of a collection value.<br/>
                An membership expression is a code fragment which produces a <code>Boolean</code> value, which can then
                be used as an input for other operations: print, write, method call and so forth.<br/>
                Contain expressions can have one of the following forms:</p>
            <ul>
                <li><code><i>a</i> in <i>b</i></code>, where <code><i>a</i></code> is any value
                    and <code><i>b</i></code> is a collection
                </li>
                <li><code><i>b</i> has <i>a</i></code>, where <code><i>a</i></code> is any value
                    and <code><i>b</i></code> is a collection
                </li>
                <li><code><i>a</i> has any <i>b</i></code>,
                    where <code><i>a</i></code> and <code><i>b</i></code> are collections
                </li>
                <li><code><i>a</i> has all <i>b</i></code>,
                    where <code><i>a</i></code> and <code><i>b</i></code> are collections
                </li>
            </ul>
             <p>Or the negative forms:</p>
            <ul>
                <li><code><i>a</i> not in <i>b</i></code>, where <code><i>a</i></code> is any value
                    and <code><i>b</i></code> is a collection
                </li>
                <li><code><i>b</i> not has <i>a</i></code>, where <code><i>a</i></code> is any value and <code><i>b</i></code> is
                    a collection
                </li>
                <li><code><i>a</i> not has any <i>b</i></code>, where <code><i>a</i></code> and <code><i>b</i></code> are
                    collections
                </li>
                <li><code><i>a</i> not has all <i>b</i></code>, where <code><i>a</i></code> and <code><i>b</i></code> are
                    collections
                </li>
            </ul>
            <br/>
            <h3>
                Text Contain
            </h3>
            <p>Text Contain expressions check whether a Character or Text value belongs to a given Text value.<br/>
                When checking for <code>any</code> or <code>all</code>, the collection of characters can be specified
                using a Text,
                which is then treated as collection of characters.
            </p>
            <PromptoPlayer lines={14} sampleUrl="samples/expressions/contain-text.pec" runnable={true}/>
            <br/>

            <h3>
                Range Contain
            </h3>
            <p>Range Contain expressions check whether a value belongs to a given Range value.
            </p>
            <PromptoPlayer lines={8} sampleUrl="samples/expressions/contain-range.pec" runnable={true}/>
            <br/>

            <h3>
                List Contain
            </h3>
            <p>List Contain expressions check whether a value belongs to a given List value.
            </p>
            <PromptoPlayer lines={8} sampleUrl="samples/expressions/contain-list.pec" runnable={true}/>
            <br/>

            <h3>
                Set Contain
            </h3>
            <p>Set Contain expressions check whether a value belongs to a given Set value.
            </p>
            <PromptoPlayer lines={8} sampleUrl="samples/expressions/contain-set.pec" runnable={true}/>
            <br/>

            <h3>
                Tuple Contain
            </h3>
            <p>Tuple Contain expressions check whether a value belongs to a given Tuple value.
            </p>
            <PromptoPlayer lines={8} sampleUrl="samples/expressions/contain-tuple.pec" runnable={true}/>
            <br/>

            <h3>
                Dictionary Contain
            </h3>
            <p>Dictionary Contain expressions check whether a Dictionary value contains a given Text key.<br/>
                They are equivalent to using Set Contain expressions on <code><i>dict</i>.keys</code>.<br/>
                To check for value contain, you should use Contain expressions on <code><i>dict</i>.values</code>.
            </p>

            </React.Fragment>;
    }

}

export default new ThisTopic();