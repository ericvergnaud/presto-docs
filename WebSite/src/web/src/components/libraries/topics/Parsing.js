import React from 'react';
import Topic from "../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Parsing");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
                    <h2>Parsing</h2>
                    <p>When received from external systems, non Text values are sometimes provided as Text.<br/>
                    The purpose of <code>parseXXX</code> methods is to convert these values into their real type.</p>
            <ul>
                <li><p><b>parseInteger</b><br/>
                    This method returns an Integer.</p>
                    <pre>define parseInteger as native method receiving Text text returning Integer</pre>
                    <p/>
                </li>
                <li><p><b>parseDecimal</b><br/>
                    This method returns a Decimal.</p>
                    <pre>define parseDecimal as native method receiving Text text returning Decimal</pre>
                    <p/>
                </li>
                <li><p><b>parseDate</b><br/>
                    This method returns a Date.</p>
                    <pre>define parseDate as native method receiving Text text returning Decimal</pre>
                    <p/>
                </li>
                <li><p><b>parseTime</b><br/>
                    This method returns a Time.</p>
                    <pre>define parseTime as native method receiving Text text returning Time</pre>
                    <p/>
                </li>
                <li><p><b>parseDateTime</b><br/>
                    This method returns a DateTime.</p>
                    <pre>define parseDateTime as native method receiving Text text returning DateTime</pre>
                    <p/>
                </li>
                <li><p><b>parsePeriod</b><br/>
                    This method returns a Period.</p>
                    <pre>define parsePeriod as native method receiving Text text returning Period</pre>
                    <p/>
                </li>
                <li><p><b>parseVersion</b><br/>
                    This method returns a Version.</p>
                    <pre>define parseVersion as native method receiving Text text returning Version</pre>
                    <p/>
                </li>
                <li><p><b>parseUuid</b><br/>
                    This method returns a Uuid.</p>
                    <pre>define parseUuid as native method receiving Text text returning Uuid</pre>
                    <p/>
                </li>

            </ul>
            </React.Fragment>;
    }

}

export default new ThisTopic();