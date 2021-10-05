import React from 'react';
import Topic from "../../../content/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Version");
    }

    renderContent(topicSelected) {
        return <>
            <h2>Version</h2>

            <p>The <code>Version</code> type is a technical type often used in IT systems to provide software version.<br/>
                A regular Version literal optionally starts with a 'v', and comprises a major number comprised between 0 and 250, a minor number comprised between 0 and 250,
                an optional fix number comprised between 0 and 250, and an optional qualifier: 'alpha', 'beta' or 'candidate' ('release' is implicit).<br/>
                Prompto also supports 2 special version literals: 'development' and 'latest';
                A Version literal must be enclosed in single quotes.</p>
                Here are a few examples:
                <pre><code>'v1.12.37'
                'v1.12-alpha'
                'development'</code></pre>
            <br/>

            <h3>
                Version attributes
            </h3>
            <p>Version values have the following attributes:</p>
            <ul>
                <li><code>major</code>: returns an Integer equal to the major number
                    <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/types/version/major.pec" runnable={true}/>
                </li>
                <li><code>minor</code>: returns an Integer equal to the minor number
                    <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/types/version/minor.pec" runnable={true}/>
                </li>
                <li><code>fix</code>: returns an Integer equal to the fix number
                    <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/types/version/fix.pec" runnable={true}/>
                </li>
                <li><code>qualifier</code>: returns a Text equal to the qualifier
                    <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/types/version/qualifier.pec" runnable={true}/>
                </li>
            </ul>

        </>;
    }

}

export default new ThisTopic();