import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Custom");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>User defined a.k.a. Custom errors</h2>
            <p>There are situations not covered by built-in errors. For example, if your program reads text from a file,
                and expects certain content in that text but cannot find it, you might want to raise a specific
                error.</p>
            <p>Prompto lets you define custom errors, which extend the built-in <i>Error</i> enumeration of errors.</p>
            <p>Here is an example:</p>
            <pre>{String.raw`define BadContentError as enumerated Error with symbols:
    MISSING_PRODUCT with "Expecting 'product' in file!" as text
    MISSING_PRICE with "Could not find 'price' for product!" as text`}
</pre>
            <p>User defined errors simply accept a <i>text</i> attribute, which can be displayed or logged.</p>
            <p>Once user errors are defined, they can be <i>raised</i> using the <code>raise</code> keyword:</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={16} sampleUrl="samples/errors/custom.pec" runnable={true}/>
            </React.Fragment>;
    }

}

export default new ThisTopic();