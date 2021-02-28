import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Categories");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Binding categories</h2>

            <p>Prompto can expose <i>native</i> objects, and interact with them, as if they were Prompto objects.
                This is acheved using Prompto <i>native</i> categories. Native categories have a lot in common with
                regular Prompto categories,
                with the following exceptions:
                <ul>
                    <li>They cannot inherit from other categories</li>
                    <li>They cannot be enumerated</li>
                    <li>They only support native methods</li>
                    <li>They may have no attribute</li>
                </ul>
            </p>
            <h3>Binding categories</h3>
            <p>The first step in binding categories is to bind the Prompto category itself to an host language
                equivalent.
                Binding categories is done as follows:</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={10} sampleUrl="samples/bindings/category.pec"/>

            <p>Notice the <code>native</code> keyword in the category definition. This denotes a binding category.</p>
            <p>The category body must comprise exactly 1 category binding statement, which must itself comprise exactly
                1 binding statement per
                supported host language.</p>

            <h4>Binding a category with a Java class</h4>
            <p>Binding a category with a Java class is done by using the <code>Java:</code> keyword, followed by a Java
                full class name.</p>
            <p>The class must have a public parameter-less constructor.</p>
            <pre>Java: java.io.PrintStream</pre>

            <h4>Binding a category with a C# class</h4>
            <p>Binding a category with a C# class is done by using the <code>C#:</code> keyword, followed by a C# full
                class name.</p>
            <p>The class must have a public parameter-less constructor.</p>
            <pre>C#: System.IO.TextWriter</pre>

            <h4>Binding a category with a Python 2 class</h4>
            <p>Binding a category with a Python 2 class is done by using the <code>Python2:</code> keyword, followed by
                a Python 2 class name.</p>
            <p>If the Python 2 statement refers to a class which does not belong to the global namespace,
                the import module must be provided.</p>
            <pre>Python2: StringIO from module: StringIO</pre>

            <h4>Binding a category with a Python 3 class</h4>
            <p>Binding a category with a Python 3 class is done by using the <code>Python2:</code> keyword, followed by
                a Python 3 class name.</p>
            <p>If the Python 3 statement refers to a class which does not belong to the global namespace,
                the import module must be provided.</p>
            <pre>Python3: StringIO from module: io</pre>


            <h4>Binding a category with a JavaScript function</h4>
            <p>Binding a category with a JavaScript function is done by using the <code>{String.raw`JavaScript:`}</code> keyword,
                followed by a JavaScript function name.</p>
            <p>The JavaScript function must have a prototype, and the constructor must return <code>this</code>.</p>
            <p>If the JavaScript is a method or variable which does not belong to the global namespace, the import
                module must be provided.</p>
            <pre>{String.raw`JavaScript: writer from module: prompto/io/io.js`}</pre>

            <h3>Binding attributes</h3>
            <p>Prompto automatically binds category attributes, if any, to their corresponding host language equivalent.
                This may require providing a "proxy" class in the host language which maps Prompto attribute names to
                actual names.
                Alternately, attribute name bridging can be achieved using native getters and setters.</p>
            <p>The below is an example of using a getter to bind a virtual attribute:</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={20} sampleUrl="samples/bindings/attribute.pec"/>

            <h3>Binding methods</h3>

            <p>Prompto native categories can have methods, like regular Prompto categories, these methods simply need to
                be native.</p>
            <p>Prompto native category methods share a lot with Prompto native global methods. The only difference is
                they can make use of <code>this</code> or <code>self</code>,
                which both represent the native instance in all host languages.</p>

            <p>Here is an example:</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={20} sampleUrl="samples/bindings/category-method.pec"/>

             </React.Fragment>;
    }

}

export default new ThisTopic();