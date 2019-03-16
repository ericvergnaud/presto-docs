import React from 'react';
import Topic from "./Topic";
import AtomicTypes from "./types/AtomicTypes";
import CollectionTypes from "./types/CollectionTypes";

class ThisTopic extends Topic {

    constructor() {
        super("Types", [ AtomicTypes, CollectionTypes ]);
    }

    renderContent() {
        return <React.Fragment>
            <h2>Types</h2>

            <p>This section describes types in the Prompto language.</p>

            <h2>What is a type?</h2>

            <p>Programming languages are used to manipulate all sorts of values: text, number, time, image...<br/>
                Values can be provided using inline <i>literals</i>, like <code>123</code> or <code>"John"</code>.<br/>
                They can be calculated from existing values, <code>123 + 456</code>.<br/>
                They can also be read from a database, from files, from the internet and so forth.<br/>
                Values need to be brought into Prompto in order to be manipulated.<br/>
                However, not all manipulations make sense. As an example, it is valid to
                multiply <code>123</code> with <code>456</code>
                because both are numbers. It generally does not make sense however to
                multiply <code>Christmas</code> with <code>Easter</code>.<br/>
                The purpose of a <i>type</i> is to determine which operations can be performed on a value,
                and how these operations are performed.<br/>
            </p>

            <h2><i>Static</i> typing vs <i>dynamic</i> typing</h2>
                <p>Some languages like Python or JavaScript support the following code:</p>
                <pre><code>{String.raw`a = 123
a = "John"`}</code></pre>
            <p>
                In the above code, an integer value and a text value are successively assigned to a variabled
                called <i>a</i>.<br/>
                This means that the set of operations which are valid for <i>a</i> varies during execution. This is
                called <i>dynamic</i> typing.<br/>
                Languages like C++, Java or C# require that the set of operations be known at compile time. This is
                called <i>static</i> typing.
            </p>
            <p>Prompto supports both <i>static</i> typing and <i>dynamic</i> typing.
                At Prompto, we believe that static typing is key to performance and robustness of core code which is
                intensively executed of often reused.
                However, we also believe that as code gets closer to the edges of an application, notably for
                input qnd output, flexibility becomes more important.
            </p>
            <h2>Dynamic typing in Prompto</h2>
            <p>Prompto supports <i>dynamic</i> typing of <a href="language/attributes.html"
                                                            target="content"><code>Document</code></a> members.</p>
            <h2>Static typing in Prompto</h2>
            <p>All other Prompto objects are statically typed.</p>

            <h2>Type inference</h2>
            <p>While Prompto is mostly statically typed, it implements type <i>inference</i>, where the type of an
                object is <i>inferred</i> from the context, rather than defined through declarations.
                This lets developers focus on meaning rather than typing. It is however mandatory to declare the type of method arguments.</p>

            <h2><i>Technical</i> types vs <i>Semantic</i> types</h2>

            <p>Like all programming languages, Prompto comes with built-in types for commonly used types of values.<br/>
                Prompto calls these <i>technical types</i>, because they are defined by their technical structure and
                behaviour.</p>

            <h2>Atomic types</h2>
            <p>Atomic types are technical types which can only hold a single 'atomic' value: Text, Integer, decimal,
                Date and so forth.</p>

            <h2>Collection types</h2>
            <p>Collection types are technical types which can hold multiple 'atomic' value: List, Set, Tuple and
                Dictionary.</p>

            <h2>Semantic types i.e. <i>Attributes</i></h2>
            <p>Prompto introduces <a href="language/attributes.html" target="content"><i>Attributes</i></a>,
                which associate a name with a technical or composed type.<br/>
                This association lets the name carry both <i>meaning</i> and <i>technical structure</i>.
            </p>

            <h2>Composed types</h2>
            <p>Composed types are user defined types which combine multiple <i>Attributes</i>. In Prompto, these types
                are called <a href="language/categories.html" target="content"><i>Categories</i></a>.</p>


            <h2>Special types</h2>
            <p>Special types are technical types which do not hold meaningful values but rather serve program execution:
                Iterator, Cursor, Method and so forth.</p>
            <br/>

        </React.Fragment>;
    }

}

export default new ThisTopic();