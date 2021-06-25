import React from 'react';
import Topic from "../../../content/Topic";
import Url from './Url';
import Email from './Email';

class ThisTopic extends Topic {

    constructor() {
        super("Internet", [ Url, Email ]);
    }

    renderContent(topicSelected) {
        return <React.Fragment>
                    <h2>Internet</h2>
                    <p>Prompto has the following Internet related resources:</p>
                    <ul>
                        <li>Url</li>
                        <li>Email</li>
                    </ul>
            <p>It also provides the following methods:</p>
            <ul>
                <li>
                    <p>
                        <b>htmlEncode <i>value</i></b><br/>
                        This method has the following prototype:<br/>
                        <pre>define htmlEncode as native method receiving Text value returning Text</pre>
                        The <i>htmlEncode</i> method encodes plain text to be html compatible.<br/>
                        As an example, the "&lt;" character will be encoded to "&amp;lt;".
                    </p>
                </li>
                <li>
                    <p>
                        <b>htmlDecode <i>value</i></b><br/>
                        This method has the following prototype:<br/>
                        <pre>define htmlDecode as native method receiving Text value returning Text</pre>
                        The <i>htmlDecode</i> method decodes text containing html entities into plain text.<br/>
                        As an example, the "&amp;lt;" text will be decoded to "&lt;".
                    </p>
                </li>
            </ul>
        </React.Fragment>;
    }

}

export default new ThisTopic();