import React from 'react';
import Topic from "../../../content/Topic";
import PromptoPlayer from "../../../player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Url");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
                    <h2>Url</h2>
                    <p>A <code>Url</code> is a native resource which can be utilized to read and write content from external web sites.<b/>
                    It supports the following protocols:</p>
                    <ul>
                        <li>http</li>
                        <li>https</li>
                        <li>file</li>
                    </ul>
                    <p>For reading, a <code>Url</code> is initialized with a <i>path</i> and the <i>encoding</i> used to read the Text.<br/>
                        Encoding refers to the text encoding such as 'utf-8' or 'cp-1252', NOT a cryptographic encoding.<br/>
                        Nowadays, most web sites use utf-8 encoding. If no encoding is provided, utf-8 is used.<br/>
                        Here is an example:</p>
                    <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/internet/url.pec" runnable={true}/>
                    <p>Writing is currently partially supported, only in the browser to an http or https Url.</p>
                    <p>For writing to an http or https <code>Url</code>, it must be initialized by a <i>httpMethod</i>, and optionally <i>httpHeaders</i>.<br/>
                        Here is an example:</p>
                    <pre>write "some content" to Url with "http://localhost/some/path.txt" as path and HTTP_POST as httpMethod</pre>
                    <p>The available httpMethods are as follows:</p>
                    <ul>
                        <li>HTTP_CONNECT</li>
                        <li>HTTP_DELETE</li>
                        <li>HTTP_GET</li>
                        <li>HTTP_HEAD</li>
                        <li>HTTP_OPTIONS</li>
                        <li>HTTP_PATCH</li>
                        <li>HTTP_POST</li>
                        <li>HTTP_PUT</li>
                        <li>HTTP_TRACE</li>
                    </ul>
        </React.Fragment>;
    }

}

export default new ThisTopic();