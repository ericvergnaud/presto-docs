import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Subtract");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Subtract expressions</h2>

            <p>Subtract expressions are used to subtract 2 values.<br/>
                A subtract expression is a code fragment which produces a value, whose type is determined by the values
                being subtracted, and which can then be used as an input for other operations: print, write, method call
                and so forth.<br/>
                A subtract expression has the form <code>a - b</code>.<br/>
            </p>
            <h3>
                Subtracting Integer and Decimal values
            </h3>
            <p>Subtracting Integer and Decimal values returns an Integer value if both values are Integer, and a Decimal
                otherwise.
            </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={10} sampleUrl="samples/expressions/subtract-number.pec" runnable={true}/>
            <br/>

            <h3>
                Subtracting Date and Period values
            </h3>
            <p>Subtracting Date and Period values returns a Date value, the Time section of the Period value is ignored.
            </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/expressions/subtract-date-period.pec" runnable={true}/>
            <br/>

            <h3>
                Subtracting Date and Date values
            </h3>
            <p>Subtracting Date and Date values returns a Period value.
            </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/expressions/subtract-date-date.pec" runnable={true}/>
            <br/>

            <h3>
                Subtracting Time and Period values
            </h3>
            <p>Subtracting Time and Period values returns a Time value, the Date section of the Period value is
                ignored.
            </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/expressions/subtract-time-period.pec" runnable={true}/>
            <br/>

            <h3>
                Subtracting Time and Time values
            </h3>
            <p>Subtracting Time and Time values returns a Period value.
            </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/expressions/subtract-time-time.pec" runnable={true}/>
            <br/>

            <h3>
                Subtracting DateTime and Period values
            </h3>
            <p>Subtracting DateTime and Period values returns a DateTime value.
            </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/expressions/subtract-datetime-period.pec" runnable={true}/>
            <br/>

            <h3>
                Subtracting DateTime and DateTime values
            </h3>
            <p>Subtracting DateTime and DateTime values returns a Period value.
            </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/expressions/subtract-datetime-datetime.pec" runnable={true}/>
            <br/>

            <h3>
                Subtracting Period and Period values
            </h3>
            <p>Subtracting Period and Period values returns a Period value.<br/>
            </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/expressions/subtract-period-period.pec" runnable={true}/>
            <br/>

            <h3>Subtracting user defined values</h3>

            <p>Prompto supports subtracting user defined values. See categories for details.</p>

        </React.Fragment>;
    }

}

export default new ThisTopic();