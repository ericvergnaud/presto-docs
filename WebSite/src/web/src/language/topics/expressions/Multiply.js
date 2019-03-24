import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Multiply");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Multiply expressions</h2>

            <p>Multiply expressions are used to multiply 2 values.<br/>
                A multiply expression is a code fragment which produces a value, whose type is determined by the values
                being subtracted, and which can then be used as an input for other operations: print, write, method call
                and so forth.<br/>
                A multiply expression has the form <code>a * b</code>.<br/>
                The <code>*</code> operator is used because <code>x</code> being a letter, it can be used as a name,
                which would be confusing.
            </p>
            <h3>
                Multiplying Integer and Decimal values
            </h3>
            <p>Multiplying Integer and Decimal values returns an Integer value if both values are Integer, and a Decimal
                otherwise.
            </p>
            <PromptoPlayer lines={10} sampleUrl="samples/expressions/multiply-number.pec" runnable={true}/>
            <br/>

            <h3>
                Multiplying Text or Character and Integer values
            </h3>
            <p>Multiplying Text or Character and Integer values returns a Text value, where the left-hand side is
                concatenated <i>n</i> times.
            </p>
            <PromptoPlayer sampleUrl="samples/expressions/multiply-text.pec" runnable={true}/>
            <br/>

            <h3>
                Multiplying Period and Integer values
            </h3>
            <p>Multiplying Period and Integer values returns a Period value.
            </p>
            <PromptoPlayer sampleUrl="samples/expressions/multiply-period.pec" runnable={true}/>
            <br/>

            <h3>
                Multiplying List and Integer values
            </h3>
            <p>Multiplying List and Integer values returns a List value, where the left-hand side is added to
                itself <i>n</i> times. This is convenient to initialize large lists.
            </p>
            <PromptoPlayer sampleUrl="samples/expressions/multiply-list.pec" runnable={true}/>
            <br/>

            <h3>Multiplying user defined values</h3>

            <p>Prompto supports multiplying user defined values. See categories for details.</p>


            </React.Fragment>;
    }

}

export default new ThisTopic();