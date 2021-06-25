import React from 'react';
import Topic from "../../../content/Topic";
import PromptoPlayer from "../../../player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("YAML");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
                    <h2>YAML</h2>
                    <p>Configuration files are often provided in YAML format.<br/>
                        Prompto is able to analyze YAML data provided as Text.<br/>
                        The Text itself should be read from resources using <code>read</code> statements.<br/>
                        <i>(support for parsing YAML resources directly is not available yet)</i></p>
                    <h3>YAML methods</h3>
                    <ul>
                        <li><p><b>readYaml</b> <i>text</i>:</p>
                            <pre>define readYaml as native method receiving text returning Document[]</pre>
                            <p>
                                The <i>text</i> argument must contain valid YAML text.<br/>
                                The method returns a <code>Document[]</code> value.</p>
                            <p>The reason for returning <code>Document[]</code> is that although YAML typically contains only 1 config, the spec supports multiple ones, separated by <code>---</code>.</p>
                            <p>As a consequence, developers need to check the count of the value returned before making any decision.</p>

                             <p> Here is an example:</p>
                            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={12} sampleUrl="samples/data/yamlReadExample.pec" runnable={true}/>
                            <p/>
                         </li>
                        <li><p><b>writeYaml</b> <i>docs</i>:</p>
                            <pre>define writeYaml as native method receiving Document[] docs returning Text</pre>
                            <p>
                                The <i>docs</i> argument must contain 1 or more non-empty documents.<br/>
                                The method returns a <code>Text</code> value.</p>

                            <p> Here is an example:</p>
                            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={12} sampleUrl="samples/data/yamlWriteExample.pec" runnable={true}/>
                            <p/>
                            <p><code>writeYaml</code> does not yet support aliases. This may be supported in the future.</p>
                        </li>
                    </ul>
            </React.Fragment>;
    }

}

export default new ThisTopic();