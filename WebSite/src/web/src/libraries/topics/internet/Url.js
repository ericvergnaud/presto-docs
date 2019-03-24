import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Url");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
                    <h2>Url</h2>
                    <p>A <code>Url</code> is a native resource which can be utilized to read content from external web sites.<b/>
                    It supports the following protocols:</p>
                    <ul>
                        <li>http</li>
                        <li>https</li>
                        <li>file</li>
                    </ul>
                    <p>A <code>Url</code> is initialized with a <i>path</i> and the <i>encoding</i> used to read the Text.<b/>
                        Encoding refers to the text encoding such as utf-8 or cp-1252, NOT a cryptographic encoding.<br/>
                        Nowadays, most web sites use utf-8 encoding.<br/>
                        Here is an example:</p>
                    <PromptoPlayer sampleUrl="samples/internet/url.pec" runnable={true}/>
            </React.Fragment>;
    }

}

export default new ThisTopic();