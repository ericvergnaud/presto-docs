import React from 'react';
import Topic from "../../components/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Mathematics");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
                    <h2>Mathematical constants</h2>
            <p>Prompto has the following predefined mathematical constants:</p>
            <pre>{String.raw`define DecimalConstant as enumerated Decimal with symbols:
	PI with 3.14159265358979323846 as value
	E with 2.7182818284590452354 as value`}</pre>
            <p>The following mathematical constants are defined by the language:</p>
            <pre>MIN_INTEGER (-2<sup>63</sup>)</pre>
            <pre>MAX_INTEGER (2<sup>63</sup>-1)</pre>
            <br/>
         </React.Fragment>;
    }

}

export default new ThisTopic();