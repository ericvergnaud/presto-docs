import React from 'react';
import Topic from "../Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Add");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

                <h2>Add expressions</h2>

                <p>Add expressions are used to add 2 values.<br/>
                    An add expression is a code fragment which produces a value, whose type is determined by the values being added, and which can then be used as an input for other operations:
                    print, write, method call and so forth.<br/>
                    An add expression has the form <code>a + b</code>.
                </p>
                <p>Add expressions are sometimes commutative, but not always. Adding numbers is commutative, but adding Texts is not.<br/>
                    However, to help in programming, Prompto supports implicit commutation, where if <code>a + b</code> does not make sense, it will treat it as <code>b + a</code>.
                </p>

                <h3>Adding Text or Character values and other values</h3>
                <p>Adding a Text or Character value <code>a</code> and any other value <code>b</code> is legal if <code>b</code> has a textual representation.<br/>
                    It returns a Text value, concatenating <code>a</code> and <code>b</code>.
                </p>
                <PromptoPlayer lines={10} sampleUrl="samples/expressions/add-text.pec" runnable={true}/>
                <br/>

                <h3>Adding Integer and Decimal values</h3>
                <p>Adding Integer and Decimal values returns an Integer value if both values are Integer, and a Decimal otherwise.</p>
                <PromptoPlayer lines={10} sampleUrl="samples/expressions/add-number.pec" runnable={true}/>
                <br/>

               <h3>Adding Date and Period values</h3>
                <p>Adding Date and Period values returns a Date value, the Time section of the Period value is ignored.</p>
                <PromptoPlayer sampleUrl="samples/expressions/add-date-period.pec" runnable={true}/>
                <br/>


            <h3>Adding Time and Period values</h3>
                <p>Adding Time and Period values returns a Time value, the Date section of the Period value is ignored.</p>
            <PromptoPlayer sampleUrl="samples/expressions/add-time-period.pec" runnable={true}/>
            <br/>

            <h3>Adding DateTime and Period values</h3>
                <p>Adding DateTime and Period values returns a DateTime value.</p>
            <PromptoPlayer sampleUrl="samples/expressions/add-datetime-period.pec" runnable={true}/>
            <br/>

            <h3>Adding Period and Period values</h3>
                <p>Adding Period and Period values returns a Period value.</p>
            <PromptoPlayer sampleUrl="samples/expressions/add-period-period.pec" runnable={true}/>
            <br/>

            <h3>Adding List and List or Set values</h3>
                <p>Adding List and List or Set values is legal if both collections have the same item type. It returns a List value.</p>
            <PromptoPlayer sampleUrl="samples/expressions/add-list.pec" runnable={true}/>
            <br/>

            <h3>Adding Set and List or Set values</h3>
            <p>Adding Set and List or Set values is legal if both collections have the same item type. It returns a Set value.</p>
            <PromptoPlayer sampleUrl="samples/expressions/add-set.pec" runnable={true}/>
            <br/>

            <h3>Adding Tuple and Tuple, List or Set values</h3>
            <p>Adding Tuple and Tuple, List or Set values returns a Tuple value.</p>
            <PromptoPlayer lines={10} sampleUrl="samples/expressions/add-tuple.pec" runnable={true}/>
            <br/>

           <h3>Adding Dictionary and Dictionary values</h3>
            <p>Adding Dictionary and Dictionary values is legal if both collections have the same item type. It returns a Dictionary value.<br/>
                The items in the right-hand value supersede the items in the left-hand value if they have the same key.
            </p>
            <PromptoPlayer sampleUrl="samples/expressions/add-dictionary.pec" runnable={true}/>
            <br/>

            <h3>Adding user defined values</h3>

           <p>Prompto supports adding user defined values. See categories for details.</p>

            </React.Fragment>;
    }

}

export default new ThisTopic();