import React from 'react';
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Period");
    }

    renderContent(topicSelected) {
        return <>
            <h2>Period</h2>

            <p>The <code>Period</code> type is a technical type used to represent a period of time, or a duration.<br/>
                A Period literal is formed by a 'P' followed by a sequence of integral quantities preceded by their unit, see examples.<br/>
                Day level units and time level units are separated by a 'T', as in DateTime literals.<br/>
                A Period literal conforms to the <a target="_blank" rel="noopener noreferrer"
                                                    href="http://www.iso.org/iso/home/standards/iso8601.htm">ISO 8601 format</a>.<br/>
                A Period literal must be enclosed in single quotes.</p>
                <pre><code>{String.raw`'PY3W2' -> 3 years + 2 weeks
'PM4D1' -> 4 months + 1 day
'PD1TH2' -> 1 day + 2 hours
'PTM4S173' -> 4 minutes + 173 seconds`}</code></pre>
            <br/>
            </>;
    }

}

export default new ThisTopic();