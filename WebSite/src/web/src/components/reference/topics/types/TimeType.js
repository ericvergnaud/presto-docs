import React from 'react';
import PromptoPlayer from "../../../player/PromptoPlayer";
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Time");
    }

    renderContent(topicSelected) {
        return <>
            <h2>Time</h2>

            <p>The <code>Time</code> type is a technical type used for to represent a time of day. It does not support time zones.<br/>
                A Time literal is a sequence of 2 to 4 integers, separated by a semi colon ':' or a dot for the last one,
                representing the hour of day, the minute, the optional second and the optional millisecond.<br/>
                A Time literal conforms to the <a target="_blank" rel="noopener noreferrer"
                                                  href="http://www.iso.org/iso/home/standards/iso8601.htm">ISO 8601 format</a>.<br/>
                A Time literal must be enclosed in single quotes.</p>
                <pre><code>{String.raw`'13:07' -> 13 hours and 7 minutes
'13:07:02.013' -> 13 hours, 7 minutes, 2 seconds and 13 milliseconds`}</code></pre>
            <br/>

            <h3>
                Time attributes
            </h3>
            <p>Time values have the following attributes:</p>
            <ul>
                <li><code>hour</code>: returns an Integer equal to the time's hour (0 to 23)</li>
                <li><code>minute</code>: returns an Integer equal to the time's minute (0 to 59).</li>
                <li><code>second</code>: returns an Integer equal to the time's second (0 to 59)</li>
                <li><code>millisecond</code>: returns an Integer equal to the time's millisecond (0 to 999)</li>
                <PromptoPlayer key={PromptoPlayer.nextKey()} lines={10} sampleUrl="samples/types/time/attributes.pec" runnable={true}/>
            </ul>
            <br/>
            </>;
    }

}

export default new ThisTopic();