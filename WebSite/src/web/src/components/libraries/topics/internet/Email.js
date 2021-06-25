import React from 'react';
import Topic from "../../../content/Topic";
import PromptoPlayer from "../../../player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Email");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
                    <h2>Email</h2>
                    <p>An <code>Email</code> is a native category utilized to send emails.<b/>
                    It supports the following methods:</p>
                    <ul>
                        <li>
                            <p>
                                <b>setFrom <i>email</i> <i>name</i></b><br/>
                                This method has the following prototype:<br/>
                                <pre>define setFrom as method receiving email and name = nothing</pre>
                                The <i>setFrom</i> method sets the sender of an email. The email is mandatory, the name is optional.<br/>
                                An email cannot be sent without a sender.
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>addTo <i>email</i> <i>name</i></b><br/>
                                This method has the following prototype:<br/>
                                <pre>define addTo as method receiving email and name = nothing</pre>
                                The <i>addTo</i> method adds a public principal recipient to an email. The email is mandatory, the name is optional.<br/>
                                An email cannot be sent without at least one recipient (to, cc or bcc).
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>addCC <i>email</i> <i>name</i></b><br/>
                                This method has the following prototype:<br/>
                                <pre>define addCC as method receiving email and name = nothing</pre>
                                The <i>addCC</i> method adds a public secondary (carbon copy) recipient to an email. The email is mandatory, the name is optional.<br/>
                                An email cannot be sent without at least one recipient (to, cc or bcc).
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>addBCC <i>email</i> <i>name</i></b><br/>
                                This method has the following prototype:<br/>
                                <pre>define addBCC as method receiving email and name = nothing</pre>
                                The <i>addBCC</i> method adds a public secondary (blind carbon copy) recipient to an email. The email is mandatory, the name is optional.<br/>
                                An email cannot be sent without at least one recipient (to, cc or bcc).
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>setSubject <i>subject</i></b><br/>
                                This method has the following prototype:<br/>
                                <pre>define setSubject as method receiving Text subject</pre>
                                The <i>setSubject</i> method sets the subject of an email.<br/>
                                An email can be sent without a subject but this is discouraged.
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>addBody <i>subject</i></b><br/>
                                This method has the following prototype:<br/>
                                <pre>define addBody as method receiving Text body and Text mimeType</pre>
                                The <i>addBody</i> method sets the body of an email for a given mime type.<br/>
                                Typical mime types are "text/plain" and "text/html".<br/>
                                Modern email readers all support html.<br/>
                                An email can be sent without a body but this is discouraged.
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>send <i>hostName port useTLS useSSL login password</i></b><br/>
                                This method has the following prototype:<br/>
                                <pre>define send as method receiving Text hostName = Nothing, Integer port = -1, Boolean useTLS = false, login = Nothing, password = Nothing and Boolean useSSL = false</pre>
                                The <i>send</i> method sends the email to a SMTP server located at <i>hostName</i> and listening on <i>port</i>.<br/>
                                Depending on the SMTP server requirements, you may need to set <i>useSSL</i> and/or <i>useTLS</i>.<br/>
                                You may also need to send <i>login</i> and <i>password</i>.<br/>
                            </p>
                        </li>
                    </ul>
        </React.Fragment>;
    }

}

export default new ThisTopic();