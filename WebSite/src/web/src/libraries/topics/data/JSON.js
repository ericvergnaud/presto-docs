import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("JSON");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
                    <h2>JSON</h2>
                    <p>Data received from Web services if often provided in JSON format.<br/>
                        Prompto is able to analyze JSON data provided as Text.<br/>
                        The Text itself should be read from resources using <code>read</code> statements.<br/>
                        <i>(support for parsing JSON resources directly is not available yet)</i></p>
                    <h3>JSON methods</h3>
                    <ul>
                        <li><p><b>readJson</b> <i>text</i>:</p>
                            <pre>define readJson as native method receiving text returning Any</pre>
                            <p>
                                The <i>text</i> argument must contain valid JSON text.<br/>
                                The method returns an <code>Any</code> value, which is a generic type for pretty much anything.</p>
                            <p>The reason for returning <code>Any</code> is that although JSON is often used to return JavaScript objects, JSON actually supports the following types:</p>
                            <ul>
                                <li>null</li>
                                <li>noolean</li>
                                <li>number</li>
                                <li>string</li>
                                <li>array</li>
                                <li>object</li>
                            </ul>
                            <p/>
                            <p>As a consequence, developers need to check the type of the value returned before making any decision.</p>

                             <p> Here is an example:</p>
                            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={12} sampleUrl="samples/data/jsonExample.pec" runnable={true}/>
                            <p/>
                         </li>
                    </ul>
            </React.Fragment>;
    }

}

export default new ThisTopic();