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
                Such an expression has the form <code><i>collection</i> filtered with <i>item</i> where <i>predicate</i> ( and/or <i>predicate</i> )</code>,
                where <code><i>item</i></code> is a valid variable identifier, <code><i>collection</i></code> is a collection expression
                and <code><i>predicate</i></code> is a boolean expression in which <code><i>item</i></code> can be used to represent the current
                collection item being evaluated.
            </p>

            <PromptoPlayer sampleUrl="samples/expressions/filter.pec" runnable={true}/>
            </React.Fragment>;
    }

}

export default new ThisTopic();