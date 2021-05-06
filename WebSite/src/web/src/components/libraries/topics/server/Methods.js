import React from 'react';
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Methods");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
                    <h2>Server methods</h2>
                    <p>The Prompto Web server provides server-specific methods and categories:</p>
                    <ul>
                        <li><p><b>getHttpUser</b>:</p>
                            <pre>define getHttpUser as native method returning Text</pre>
                            <p>This method returns the login of the authenticated user.</p>
                        </li>
                        <li><p><b>getHttpPort</b>:</p>
                            <pre>define getHttpPort as native method returning Integer</pre>
                            <p>This method returns the port number of the running server.</p>
                        </li>
                        <li><p><b>getHttpSession</b>:</p>
                            <pre>define getHttpSession as native method returning Document</pre>
                            <p>Once users are authenticated, the Web server keeps track of the user, otherwise the user would have to keep reauthenticating.<br/>
                                This is done using a server session, which times out after a certain time.<br/>
                                On top of keeping track of the user, a server session can also hold additional arbitrary information.<br/>
                                The <code>Document</code> returned by this method lets you attach this information.</p>
                            <p>Important note 1: sessions are not persistent and there is no mechanism to store session information when sessions expire.</p>
                            <p>Important note 2: do not store sensitive information in sessions.</p>
                        </li>
                        <li><p><b>getLoginFactory</b>:</p>
                            <pre>define getLoginFactory as native method receiving Text config = nothing returning LoginFactory</pre>
                            <p>This method returns the LoginFactory currently used by the server.<br/>
                                As of writing, this is for use by Prompto tools only.</p>
                        </li>
                        <li><p><b>LoginFactory</b>:</p>
                            <pre>define LoginFactory as native category</pre>
                            <p>The LoginFactory is a special category used to manage user authentication.<br/>
                                As of writing, this is for use by Prompto tools only.</p>
                        </li>
                    </ul>
                    <p/>

            </React.Fragment>;
    }

}

export default new ThisTopic();