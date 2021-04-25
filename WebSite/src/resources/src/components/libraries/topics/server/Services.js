import React from 'react';
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Services");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
                        <h2>Web services</h2>
                    <p>Communication between a Prompto web page and the Prompto server is built-in. Any method available on the server is also available in the browser.<br/>
                        You therefore you do not need to create web services to build a typical web site.</p>
                    <p>However, there are situations where you need to expose a web service for use by other clients than the web pages.<br/>
                        The protocol for these services is often defined by the clients rather than your server.<br/>
                        As an example, listening to Github web hooks requires complying with the Github protocol.</p>
                    <p>Prompto makes it easy to expose such Web services, by installing them through simple code.<br/>
                        A Web service is exposed at a given path <i>pattern</i>, for example: <code>{String.raw`api/v3/orders/*`}</code>.<br/>
                        For that specific path <i>pattern</i>, you need to install a method called <i>serviceHandler</i>.<br/>
                        This is done as follows:</p>
                    <pre>{String.raw`define gitHubEventHandler as method receiving Document doc doing:
    // do something

installServiceHandler with "/git/event/*" as path and gitHubEventHandler as serviceHandler`}</pre>
            <p>That's it!</p>
                    <p>The <code>installServiceHandler</code> must be called by your serverStartup method.<br/>
                        From there, any incoming request which matches the <i>pattern</i> will be routed to your handler.<br/>
                        Prompto takes care of converting parameters to a Document, whether the protocol is URL encoded, JSON post of FormData
                    </p>
                    <p>If (as recommended) your Web application or Web service is password protected but the client is anonymous, you will need to whitelist the path <i>pattern</i>.</p>


            </React.Fragment>;
    }

}

export default new ThisTopic();