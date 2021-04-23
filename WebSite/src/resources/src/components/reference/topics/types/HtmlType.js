import React from 'react';
import PromptoPlayer from "../../../player/PromptoPlayer";
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Html");
    }

    renderContent(topicSelected) {
        return <>
            <h2>Html</h2>
            <p>The <code>Html</code> type is a technical type used for Html expressions.</p>
            <p>Prompto supports <a target="_blank" rel="noopener noreferrer"
                                   href="https://reactjs.org/docs/introducing-jsx.html">JSX-like syntax</a>, where html tags, Prompto code and widget tags can be combined to render html dynamically.</p>
            <p>Here is a simple example:</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={4} sampleUrl="samples/types/html/simple.pec"/>
            <br/>
            <p>Prompto does not let you <i>generate</i> Html <i>per se</i>.<br/>
                You cannot programmatically produce a <code>{String.raw`<div/>`}</code> tag.<br/>
                Rather you call a method such as the above one, which returns the required Html.</p>
            <p>You also cannot <i>store</i> Html. Html is for display only, through widgets.</p>

            <h3>Structure</h3>
            <p>Html code must comprise one and one only <i>root</i> tag, which may comprise children.<br/>
                Prompto does not yet support <i>fragments</i>, this is a desired feature, just not implemented yet.
            </p>
            <p>Each tag can have attributes. An attribute can only appear once per tag.<br/>
                Each attribute must have a value, which can be either a Text, or a Prompto expression.
            </p>


            <h3>Rendering plain HTML</h3>
            <p>Although the HTML standard supports both lowercase and uppercase tags, Prompto requires that plain HTML tags be lowercase.<br/>
                For these, Prompto performs no processing of the tag itself. The Html value will be transpiled <i>as is</i>.</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={4} sampleUrl="samples/types/html/plain-html.pec"/>
            <br/>

            <h3>Rendering content dynamically</h3>
            <p>Prompto supports setting content at runtime using a Prompto expression enclosed in curly braces.</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={4} sampleUrl="samples/types/html/dynamic-content.pec"/>
            <br/>


            <h3>Rendering attributes dynamically</h3>
            <p>Prompto supports setting attribute values at runtime using a Prompto expression enclosed in curly braces (which must provide a valid value for the attribute).</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={4} sampleUrl="samples/types/html/dynamic-attribute.pec"/>
            <br/>

            <h3>Rendering tags dynamically</h3>
            <p>Prompto supports rendering tags at runtime using a Prompto expression enclosed in curly braces (which must provide valid Html content).</p>
            <p>In the below example, we build a list of <code>&lt;div&gt;</code> tags dynamically from a list:</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/types/html/dynamic-tag.pec"/>
            <p><i>(note that the list itself is enclosed in a tag, following the requirement of one and one only root tag)</i></p>
            <br/>

            <h3>Rendering custom tags a.k.a. widgets</h3>
            <p>Prompto supports rendering custom tags a.k.a. widgets. Prompto requires that widget tags start with an uppercase letter.</p>
            <p>Widgets are defined in Prompto code, see widgets section.</p>
            <p>In the below example, we render a widget named MyWidget.</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={4} sampleUrl="samples/types/html/widget.pec"/>
            <br/>


        </>;
    }

}

export default new ThisTopic();