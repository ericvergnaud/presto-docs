import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Methods");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Binding global methods</h2>
            <p>Binding global methods is done as follows:</p>

            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/bindings/global-method.pec"/>

            <p>Notice the <code>native</code> keyword in the method definition. This denotes a native binding method.
            </p>
            <p>The method body must then comprise exactly 1 binding statement per
                supported host language. The statement must be a single one (list of statements separated by ';' is not
                supported).</p>
            <p>When a <i>native</i> method is executed, Prompto converts the parameter values from Prompto types to
                their equivalent native type.
                It then looks for the native statement matching the host language, and executes it. If the statement is
                an expression or function call
                returning a value, it converts that value from its native type to the corresponding Prompto type.</p>
            <p>If a <i>native</i> method returns a value, the return type <i>must</i> be specified. This is because
                Python and JavaScript have no support
                for static typing, thus preventing Prompto from inferring the return type.</p>

            <h4>Binding methods with Java methods</h4>
            <p>Binding methods with Java methods is done by using the <code>Java:</code> keyword, followed by a Java
                statement, ending with a semicolon.</p>
            <p>If the Java statement is a method call, that method must be static.</p>
            <p>The method must be preceded by the fully qualified class name i.e. including full package, except
                for <i>java.lang</i> package.</p>
            <pre>Java: return prompto.internet.Html.encode(value);</pre>
            <p>If the Prompto method must return a value, the Java statement must start with
                the <code>return</code> keyword.</p>

            <h4>Binding methods with C# methods</h4>
            <p>Binding methods with C# methods is done by using the <code>C#:</code> keyword, followed by a C#
                statement, ending with a semicolon.</p>
            <p>If the C# statement is a method call, that method must be static.</p>
            <p>The method must be preceded by the fully qualified class name i.e. including namespace.</p>
            <pre>C#: return System.Net.WebUtility.HtmlEncode(value);</pre>
            <p>If the Prompto method must return a value, the C# statement must start with
                the <code>return</code> keyword.</p>

            <h4>Binding methods with Python 2 functions</h4>
            <p>Binding methods with Python 2 functions is done by using the <code>Python2:</code> keyword, followed by a
                Python 2 statement.</p>
            <p>If the Python 2 statement refers to a method or variable which does not belong to the global namespace,
                the import module must be provided, as follows:</p>
                <pre>Python2: return escape(value) from module: cgi</pre>
            <p>If the Prompto method must return a value, the Python statement must start with
                the <code>return</code> keyword.</p>

            <h4>Binding methods with Python 3 functions</h4>
            <p>Binding methods with Python 3 functions is done by using the <code>Python2:</code> keyword, followed by a
                Python 3 statement.</p>
            <p>If the Python 3 statement refers to a method or variable which does not belong to the global namespace,
                the import module must be provided, as follows:</p>
                <pre>Python2: return escape(value) from module: html</pre>
            <p>If the Prompto method must return a value, the Python statement must start with
                the <code>return</code> keyword.</p>


            <h4>Binding methods with JavaScript functions</h4>
            <p>Binding methods with JavaScript functions is done by using the <code>{String.raw`JavaScript:`}</code> keyword, followed
                by a JavaScript statement, ending with a semicolon.</p>
            <p>If the JavaScript is a method or variable which does not belong to the global namespace, the import
                module must be provided, as follows:</p>
                <pre>{String.raw`JavaScript: return Encoder.htmlEncode(value); from module: prompto/internet/Html.js`}</pre>
            <p>If the Prompto method must return a value, the JavaScript statement must start with
                the <code>return</code> keyword.</p>

            </React.Fragment>;
    }

}

export default new ThisTopic();