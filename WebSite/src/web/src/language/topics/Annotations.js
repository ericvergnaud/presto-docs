import React from 'react';
import Topic from "../../components/Topic";
import PromptoPlayer from "../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Annotations");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>Annotations</h2>

            <p>Prompto supports Annotations.<br/>
                An annotation is an identifier prefixed by <code>@</code> optionally followed by parameters enclosed in parenthesis.<br/>
                Annotations are always attached to the next non-comment declaration.<br/>
                In the below example, the ifrst annotation is attached to the widget declaration, the second one to a method.
            </p>
            <PromptoPlayer lines={8} sampleUrl="samples/definitions/annotation.pec"/>

            <br/>
            <p>As of writing, Prompto only supports built-in annotations, which are used by the Prompto components.<br/>
                Support for user defined annotations is a desired feature, just not yet implemented.
             </p>

            <h3>Built-in annotations</h3>

             <ul>
                 <li>
                     <code>@Inline</code>
                     This annotation only applies to native methods and categories. It tells the transpiler to <i>inline</i> native code (rather than generate a method which would then invoke it).
                 </li>
                 <li>
                     <code>@Callback</code>
                     This annotation only applies to native methods. It tells the transpiler to preserve method naming. This is necessary when using Html engines such as React, which call methods by name.
                 </li>
                 <li>
                     <code>@Static</code>
                     This annotation only applies to native methods. It tells the transpiler to make the transpiled method static. This is necessary when using Html engines such as React, which require certain callbacks to be static.
                 </li>
                 <li>
                     <code>@PageWidgetOf("<i>SomePage</i>")</code>
                     This annotation only applies to widgets. It lets prompto tell the browser to load <code><i>SomePage</i>.page</code> when running the widget from the developer factory.
                 </li>
             </ul>
            </React.Fragment>;
    }

}

export default new ThisTopic();