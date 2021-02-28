import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Fiilter");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Filter expressions</h2>

            <p>Filter expressions are used to filter content of a collection.</p>

            <h3>
                Filtering a collection
            </h3>
            <p>Filtering a collection produces an <code>Iterator</code> value, which can then be used as an input for other constructs.<br/>
                Such an expression has the form <code><i>collection</i> filtered where <i>item</i> => <i>predicate</i></code> <br/>
                where <code><i>collection</i></code> is a collection expression, <code><i>item</i></code> is a variable identifier,
                and <code><i>predicate</i></code> is a boolean expression which can use <code><i>item</i></code> as a local variable holding the current collection item being evaluated.</p>

                <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/expressions/filter-arrow.pec" runnable={true}/>
            <p/>
            <p>
                Alternately, a more explicit form can be used as follows:
            </p>

            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/expressions/filter-item.pec" runnable={true}/>
            </React.Fragment>;
    }

}

export default new ThisTopic();