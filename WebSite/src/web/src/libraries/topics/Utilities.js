import React from 'react';
import Topic from "../../components/Topic";
import PromptoPlayer from "../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Utilities");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>Utility methods</h2>
            <ul>
                <li><p><b>randomUuid</b><br/>
                    This method returns a random UUID as defined by <a href="http://www.ietf.org/rfc/rfc4122.txt">http://www.ietf.org/rfc/rfc4122.txt</a>.</p>
                    <pre>define randomUuid as native method returning Uuid</pre>
                    <PromptoPlayer sampleUrl="samples/utils/randomUuid.pec" runnable={true}/>
                    <p/>
                </li>
                <li><p><b>now</b><br/>
                    This method returns the current DateTime, in the timezone where it is executed.</p>
                    <pre>define now as native method returning DateTime</pre>
                    <PromptoPlayer sampleUrl="samples/utils/now.pec" runnable={true}/>
                    <p/>
                </li>
                <li><p><b>today</b><br/>
                    This method returns the current Date.</p>
                    <pre>define today as method returning Date</pre>
                    <PromptoPlayer sampleUrl="samples/utils/today.pec" runnable={true}/>
                    <p/>
                </li>
                <li><p><b>sleep</b><br/>
                    This method waits for <i>millis</i> milliseconds</p>
                    <pre>define sleep as native method receiving Integer millis</pre>
                    <PromptoPlayer sampleUrl="samples/utils/sleep.pec"/>
                    <i>(in JavaScript, due to language limitations, this methods consumes all available CPU until millis are elapsed)</i>
                    <p/>
                </li>
                <li><p><b>isServer</b><br/>
                    This method returns true when ran on the server, false otherwise.</p>
                    <pre>define isServer as native method returning Boolean</pre>
                    <PromptoPlayer sampleUrl="samples/utils/isServer.pec" runnable={true}/>
                    <p/>
                </li>
                <li><p><b>fetchTextResource</b><br/>
                    This method fetches a Text resource from the code store.</p>
                    <pre>define fetchTextResource as native method receiving path returning Text</pre>
                    <p/>
                </li>
                <li><p><b>htmlDecode</b><br/>
                    This method replaces within a Text any html entity with its corresponding plain text.</p>
                    <pre>define htmlDecode as native method receiving Text value returning Text</pre>
                    <PromptoPlayer sampleUrl="samples/utils/htmlDecode.pec" runnable={true}/>
                    <p/>
                </li>
                <li><p><b>htmlEncode</b><br/>
                    This method replaces within a Text any illegal text with its corresponding entity.</p>
                    <pre>define htmlEncode as native method receiving Text value returning Text</pre>
                    <PromptoPlayer sampleUrl="samples/utils/htmlEncode.pec" runnable={true}/>
                    <p/>
                </li>
            </ul>
            </React.Fragment>;
    }

}

export default new ThisTopic();