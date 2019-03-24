import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Comparison");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>Comparison expressions</h2>

            <p>Comparison expressions are used to compare values with order in mind (which is greater?).<br/>
                A comparison expression is a code fragment which produces a <code>Boolean</code> value, which can then
                be used as an input for other operations: print, write, method call and so forth.<br/>
                A comparison expression has the form <code>a <i>op</i> b</code> where <code><i>op</i></code> is one the
                following comparison
                operators: <code>&lt;</code>, <code>&lt;=</code>, <code>&gt;</code> and <code>&gt;=</code>.<br/>
                Please note that <code>&lt;</code> and <code>&gt;=</code> are mutually exlusive, same
                for <code>&lt;=</code> and <code>&gt;</code>.<br/>
                Also note that Prompto can only compare compatible values (it does not make sense to compare text and
                number).
            </p>
            <h3>Comparing Text values</h3>

            <p>Prompto compares Text values lexicographically i.e. using their underlying Unicode representation.</p>
            <PromptoPlayer lines={9} sampleUrl="samples/expressions/compare-text.pec" runnable={true}/>
            <br/>

            <h3>Comparing Character values</h3>

            <p>Prompto compares Character values lexicographically i.e. using their underlying Unicode
                representation.</p>
            <PromptoPlayer lines={9} sampleUrl="samples/expressions/compare-char.pec" runnable={true}/>
            <br/>

            <h3>Comparing Integer and Decimal values</h3>
            <PromptoPlayer lines={9} sampleUrl="samples/expressions/compare-number.pec" runnable={true}/>
            <br/>

            <h3>Comparing Date values</h3>
            <PromptoPlayer lines={9} sampleUrl="samples/expressions/compare-date.pec" runnable={true}/>
            <br/>

            <h3>Comparing Time values</h3>
            <PromptoPlayer lines={9} sampleUrl="samples/expressions/compare-time.pec" runnable={true}/>
            <br/>

            <h3>Comparing DateTime values</h3>
            <PromptoPlayer lines={9} sampleUrl="samples/expressions/compare-date-time.pec" runnable={true}/>
            <br/>

            <h3>Comparing user defined values</h3>

            <p>Prompto supports user defined comparisons. See categories for details.</p>
            </React.Fragment>;
    }

}

export default new ThisTopic();