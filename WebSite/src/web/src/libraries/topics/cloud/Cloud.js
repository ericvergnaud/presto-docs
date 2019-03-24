import React from 'react';
import Topic from "../../../components/Topic";
import AWS from "./AWS";

class ThisTopic extends Topic {

    constructor() {
        super("Cloud", [ AWS ]);
    }

    renderContent(topicSelected) {
        return <React.Fragment>
                    <h2>Cloud</h2>
                    <p>Cloud deployment operations are normally performend by Prompto tools.<br/>
                    You should normally not have to use the cloud related APIs.<br/>
                    They exist because the Prompto tools use them, and provided here for your reference.</p>
                    <p>Prompto is designed from the ground up to run in the cloud.<br/>
                        Great, but <i>which</i> cloud?<br/>
                        This question is worth asking because cloud vendors keep introducing new services and features.<br/>
                        Also, similar services may be implemented very differently, and expose a different API.<br/>
                        From there, deploying applications in different clouds may require very different code.</p>
                    <p>At Prompto, we do not believe it is yet possible to produce a unified cloud client API.<br/>
                        Rather, we provide:</p>
                         <ul>
                             <li>The <code>getCurrentCloud</code> method</li>
                             <li>A per cloud set of methods for popular cloud providers:<br/>
                                 <ul>
                                     <li>AWS</li>
                                     <li>GCP (not available yet)</li>
                                     <li>Azure (not available yet)</li>
                                     <li>Alibaba (not available yet)</li>
                                     <li>OpenStack (not available yet)</li>
                                     <li>(others possible based on demand)</li>
                                 </ul>
                             </li>
                         </ul>
                    <h3>Cloud methods</h3>
                        <ul>
                            <li><p><b>getCurrentCloud</b>:</p>
                                <pre>define getCurrentCloud as native method returning Text</pre>
                                <p>The method returns the name of the current cloud.</p>
                                <p>The name follows the above naming.</p>
                            </li>
                        </ul>
             </React.Fragment>;
    }

}

export default new ThisTopic();