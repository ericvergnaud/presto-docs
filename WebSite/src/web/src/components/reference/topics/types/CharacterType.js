import React from 'react';
import PromptoPlayer from "../../../player/PromptoPlayer";
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Character");
    }

    renderContent(topicSelected) {
        return <>
            <h2>Character</h2>

            <p>The <code>Character</code> type is a technical type used for easy manipulation of single characters.<br/>
                Like Text values, all Character values use <a target="_blank" rel="noopener noreferrer"
                                                              href="http://unicode.org">Unicode</a> internally.<br/>
                Character literals support the same escape characters as Text literals.<br/>
                A Character literal must be enclosed in single quotes.</p>
            <pre><code>'c' -> the 'c' character</code></pre>
            <br/>

            <h3>
                Character attributes
            </h3>
            <p>Character values have the following attributes:</p>
            <ul>
                <li><code>codePoint</code>: returns an Integer equal to the character 16-bit unicode code point</li>
                <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/types/character/codePoint.pec" runnable={true}/>
            </ul>


            <br/>

        </>;
    }

}

export default new ThisTopic();