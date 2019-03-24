import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("DateTime");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>DateTime</h2>

            <p>The <code>DateTime</code> type is a technical type used to represent an instant, with time zone support.<br/>
                A DateTime literal is formed by a Date literal, followed by a 'T', followed by a Time literal,
                optionally followed by a time zone offset.<br/>
                A DateTime literal conforms to the <a target="_blank" rel="noopener noreferrer"
                                                      href="http://www.iso.org/iso/home/standards/iso8601.htm">ISO 8601 format</a>.<br/>
                A DateTime literal must be enclosed in single quotes.<br/>
                If a time zone offset is not specified, the literal is interpreted in the time zone of the operating system.<br/>
            </p>
            <pre><code>{String.raw`'1981-05-12T13:02:11.002' -> 13 hours, 2 minutes, 11 seconds and 2 milliseconds on the 12th of May of year 1981
'1981-05-12T13:02:11.002+0200' -> same date time as above, in the GMT + 02:00 time zone`}</code></pre>

            <h3>
                DateTime attributes
            </h3>
            <p>DateTime values have the following attributes:</p>
            <ul>
                <li><code>year</code>: returns an Integer equal to the date time's year</li>
                <li><code>month</code>: returns an Integer equal to the date time's month (January is 1, December is 12).</li>
                <li><code>dayOfMonth</code>: returns an Integer equal to the date time's month day (1 to 31)</li>
                <li><code>dayOfYear</code>: returns an Integer equal to the date time's year</li>
                <li><code>hour</code>: returns an Integer equal to the date time's hour (0 to 23)</li>
                <li><code>minute</code>: returns an Integer equal to the date time's minute (0 to 59).</li>
                <li><code>second</code>: returns an Integer equal to the date time's second (0 to 59)</li>
                <li><code>millisecond</code>: returns an Integer equal to the date time's millisecond (0 to 999)</li>
                <li><code>tzOffset</code>: returns an Integer equal to the date time's time zone offset in minutes</li>
                <li><code>tzName</code>: returns an Integer equal to the date time's time zone offset in minutes</li>
                <p><i>Please note that due to limitations of Python and JavaScript, <code>tzOffset</code> and <code>tzName</code> are not currently supported on these platforms.</i></p>
                <PromptoPlayer lines={14} sampleUrl="samples/types/datetime/attributes.pec" runnable={true}/>
            </ul>
            <br/>
        </React.Fragment>;
    }

}

export default new ThisTopic();