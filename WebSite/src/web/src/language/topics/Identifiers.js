import React from 'react';
import Topic from "../../components/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Identifiers");
    }

    renderContent() {
        return <React.Fragment>
            <h2>Identifiers</h2>

            <p>Many Prompto objects are uniquely identified by a built-in or user defined name: attributes, categories,
                methods, variables and so forth.</p>

            <h3>Type names</h3>

            <p>Prompto supports both built-in types and user defined types.<br/>
                The name of a type must start with an uppercase letter, followed by 0 or more letter, digit or
                underscore.<br/>
                The formal definition is <code>'A'..'Z' ('a'..'z' | 'A'..'Z' | '0'..'9' | '_')*</code>.
            </p>
            <ul>
                <li><code>Text</code> is a valid type name</li>
                <li><code>TEXT</code> is <i>not</i> a valid type name (it's a symbol)</li>
                <li><code>text</code> is <i>not</i> a valid type name</li>
            </ul>
            <p/>

            <h3>Attribute names</h3>

            <p>Prompto supports attributes.<br/>
                The name of an attribute must start with a lowercase letter, followed by 0 or more letter, digit or
                underscore.<br/>
                The formal definition is <code>'a'..'z' ('a'..'z' | 'A'..'Z' | '0'..'9' | '_')*</code>.
            </p>
            <ul>
                <li><code>dateOfBirth</code> is a valid attribute name</li>
                <li><code>DateOfBirth</code> is <i>not</i> a valid attribute name</li>
            </ul>
            <p/>

            <h3>Variable names</h3>

            <p>Prompto supports variables.<br/>
                The name of a variable must start with a lowercase letter, followed by 0 or more letter, digit or
                underscore.<br/>
                The formal definition is <code>'a'..'z' ('a'..'z' | 'A'..'Z' | '0'..'9' | '_')*</code>.
            </p>
            <ul>
                <li><code>someItem</code> is a valid variable name</li>
                <li><code>SomeItem</code> is <i>not</i> a valid variable name</li>
            </ul>
            <p/>

            <h3>Method names</h3>

            <p>Prompto supports methods.<br/>
                The name of a variable must start with a letter, followed by 0 or more letter, digit or underscore.<br/>
                The formal definition is <code>('a'..'z' | 'A'..'Z')('a'..'z' | 'A'..'Z' | '0'..'9' | '_')*</code>.
            </p>
            <ul>
                <li><code>someMethod</code> is a valid method name</li>
                <li><code>SomeMethod</code> is a valid method name</li>
                <li><code>SOME_METHOD</code> is <i>not</i> a valid method name</li>
            </ul>
            <p/>

            <h3>Symbol names</h3>

            <p>Prompto supports enumerations of both built-in types and user defined types.<br/>
                The name of an enumerated value is called a symbol. It must start with an uppercase letter, followed by
                0 or more uppercase letter, digit or underscore.<br/>
                The formal definition is <code>'A'..'Z' ('A'..'Z' | '0'..'9' | '_')*</code>.
            </p>
            <ul>
                <li><code>NORTH</code> is a valid symbol</li>
                <li><code>North</code> is <i>not</i> a valid symbol</li>
            </ul>
            <br/>


        </React.Fragment>;
    }

}

export default new ThisTopic();