import React from 'react';
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("AWS");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
                    <h2>AWS</h2>
                    <h3>AWS topics</h3>
                    <ul>
                        <li><b>EC2</b>:<br/>
                            See <a rel="noopener noreferrer" href="https://github.com/prompto/prompto-platform/blob/master/AwsClient/src/main/resources/libraries/AwsEC2.pec" target="_blank">source code </a>.
                        </li>
                        <li><b>KMS</b>:<br/>
                            See <a rel="noopener noreferrer" href="https://github.com/prompto/prompto-platform/blob/master/AwsClient/src/main/resources/libraries/AwsKMS.pec" target="_blank">source code </a>.
                        </li>
                        <li><b>Route53</b>:<br/>
                            See <a rel="noopener noreferrer" href="https://github.com/prompto/prompto-platform/blob/master/AwsClient/src/main/resources/libraries/AwsRoute53.pec" target="_blank">source code </a>.
                        </li>
                     </ul>
            </React.Fragment>;
    }

}

export default new ThisTopic();