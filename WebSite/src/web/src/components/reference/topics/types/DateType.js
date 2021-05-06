import React from 'react';
import PromptoPlayer from "../../../player/PromptoPlayer";
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Date");
    }

    renderContent(topicSelected) {
        return <>

            <h2>Date</h2>

            <p>The <code>Date</code> type is a technical type used to represent a day. It does not support time zones.<br/>
                A Date literal is a sequence of 3 integers, separated by a hyphen '-',
                representing the year, the month and the day of the month.<br/>
                A Date literal conforms to the <a target="_blank" rel="noopener noreferrer"
                                                  href="http://www.iso.org/iso/home/standards/iso8601.htm">ISO 8601 format</a>.<br/>
                A Date literal must be enclosed in single quotes.
            </p>
            <pre><code>'1981-05-12' -> 12th of May of year 1981</code></pre>

            <br/>
            <h3>
                Date attributes
            </h3>
            <p>Date values have the following attributes:</p>
            <ul>
                <li><code>year</code>: returns an Integer equal to the date's year</li>
                <li><code>month</code>: returns an Integer equal to the date's month (January is 1, December is 12).</li>
                <li><code>dayOfMonth</code>: returns an Integer equal to the date's month day (1 to 31)</li>
                <li><code>dayOfYear</code>: returns an Integer equal to the date's year</li>
                <PromptoPlayer key={PromptoPlayer.nextKey()} lines={10} sampleUrl="samples/types/date/attributes.pec" runnable={true}/>
            </ul>
            <br/>

        </>;
    }

}

export default new ThisTopic();