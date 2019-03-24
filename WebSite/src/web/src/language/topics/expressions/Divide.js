import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Divide");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Divide expressions</h2>

            <p>Divide expressions are used to divide 2 values.<br/>
                A divide expression is a code fragment which produces a value, whose type is determined by the values
                being subtracted, and which can then be used as an input for other operations: print, write, method call
                and so forth.<br/>
                A divide expression has the form <code>a / b</code>.<br/>
                Additionally, Prompto supports integer division, using the form <code>a \ b</code>, and remainder using
                the form <code>a % b</code> (also known as modulo).<br/>
            </p>
            <h3>
                Dividing Integer and Decimal values
            </h3>
            <p>Dividing Integer and Decimal values returns a Decimal value.
            </p>
            <PromptoPlayer lines={10} sampleUrl="samples/expressions/divide-number.pec" runnable={true}/>
            <br/>

            <h3>
                Integer division of Integer and Decimal values
            </h3>
            <p>Integer division of Integer and Decimal values returns an Integer value. The right-hand side must be an
                Integer.
            </p>
            <PromptoPlayer lines={10}  sampleUrl="samples/expressions/int-divide.pec" runnable={true}/>
            <br/>

            <h3>
                Remainder of Integer values
            </h3>
            <p>Remainder of Integer values returns an Integer value.</p>
            <PromptoPlayer sampleUrl="samples/expressions/modulo-integer.pec" runnable={true}/>
            <br/>

            <h3>
                Remainder of Decimal values
            </h3>
            <p>Remainder of Decimal values returns a Decimal value.
            </p>
            <PromptoPlayer sampleUrl="samples/expressions/modulo-decimal.pec" runnable={true}/>
            <br/>

            <h3>Dividing user defined values</h3>

            <p>Prompto supports dividing user defined values. See categories for details.</p>


        </React.Fragment>;
    }

}

export default new ThisTopic();