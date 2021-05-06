import React from 'react';
import PromptoPlayer from "../../../player/PromptoPlayer";
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Text");
    }

    renderContent(topicSelected) {
        return <div>
            <h2>Text</h2>

            <p>The <code>Text</code> type is a technical type used for values such as a name or a description, where the
                textual representation
                and the meaning are equivalent.<br/>
                All Text values use <a target="_blank" rel="noopener noreferrer" href="http://unicode.org">Unicode</a> internally.<br/>
                A Text literal must be enclosed in double quotes:<br/>
            </p>
            <pre><code>"This is a text literal."</code></pre>


            <p>If a Text literal must contain a double-quote, that double-quote must be escaped using the anti-slash '\' character:</p>
            <pre><code>"This text literal contains two \"double quotes\"."</code></pre>

            <p> Consequently, if a Text literal must contain the anti-slash'\' character, the '\' character must be
                escaped using the '\' character.</p>
            <pre><code>"This text literal contains one anti-slash: \\."</code></pre>

            <p> Additionally, Text literals support the following special characters:</p>
            <pre><code>{String.raw`"\t" -> Tab
"\b" -> Back space
"\n" -> New line
"\r" -> Carriage return
"\f" -> Form feed
"\'" -> Single quote`}</code></pre>

            <p>
                Finally, Text literals support <a target="_blank" rel="noopener noreferrer" href="http://unicode.org">Unicode</a> characters in
                the form of UTF-16 hexadecimal characters:</p>
            <pre><code>"delta: \u0394" -> delta: &delta;</code></pre>

            <h3>
                Text attributes
            </h3>
            <p>Text values have the following attributes:</p>
            <ul>
                <li><code>count</code>: returns an Integer equal to the number of characters
                    <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/types/text/count.pec" runnable={true}/>
                </li>
            </ul>


            <h3>
                Text methods
            </h3>
            <p>Text values have the following methods:</p>
                <ul>
                    <li><code>toLowerCase</code>: returns a Text with all characters in lower case<p/>
                        <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="/samples/types/text/toLowerCase.pec" runnable={true}/>
                        <br/>
                    </li>
                    <li><code>toUpperCase</code>: returns a Text with all characters in upper case<p/>
                        <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="/samples/types/text/toUpperCase.pec" runnable={true}/>
                        <br/>
                    </li>
                    <li><code>toCapitalized</code>: returns a Text with the first letter of each word capitalized<p/>
                        <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="/samples/types/text/toCapitalized.pec" runnable={true}/>
                        <br/>
                    </li>
                    <li><code>split</code>: splits a Text into segments defined by a separator and return them as a Text list<p/>
                        <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="/samples/types/text/split.pec" runnable={true}/>
                        <br/>
                    </li>
                    <li><code>trim</code>: returns a Text with leading and trailing white space trimmed<p/>
                        <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="/samples/types/text/trim.pec" runnable={true}/>
                        <br/>
                    </li>
                    <li><code>replace</code>: returns a Text with one occurence replaced<p/>
                        <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="/samples/types/text/replace.pec" runnable={true}/>
                        <br/>
                    </li>
                    <li><code>replaceAll</code>: returns a Text with all occurences replaced<p/>
                        <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="/samples/types/text/replaceAll.pec" runnable={true}/>
                        <br/>
                    </li>
                </ul>


        </div>;
    }

}

export default new ThisTopic();