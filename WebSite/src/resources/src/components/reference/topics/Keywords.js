import React from 'react';
import Topic from "../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Keywords");
    }

    renderContent() {
        return <>
            <h2>Keywords</h2>

            <p>The following keywords are reserved by Prompto. They cannot be used for attributes, categories, methods, variables and so forth:</p>

            <div className="keywords">
                <code>abstract</code><br/>
                <code>all</code><br/>
                <code>always</code><br/>
                <code>and</code><br/>
                <code>any</code><br/>
                <code>as</code><br/>
                <code>asc</code><br/>
                <code>ascending</code><br/>
                <code>attr</code><br/>
                <code>attribute</code><br/>
                <code>attributes</code><br/>
                <code>bindings</code><br/>
                <code>break</code><br/>
                <code>by</code><br/>
                <code>case</code><br/>
                <code>catch</code><br/>
                <code>category</code><br/>
                <code>class</code><br/>
                <code>close</code><br/>
                <code>contains</code><br/>
                <code>def</code><br/>
                <code>default</code><br/>
                <code>define</code><br/>
                <code>delete</code><br/>
                <code>desc</code><br/>
                <code>descending</code><br/>
                <code>do</code><br/>
                <code>doing</code><br/>
                <code>each</code><br/>
                <code>else</code><br/>
                <code>enum</code><br/>
                <code>enumerated</code><br/>
                <code>except</code><br/>
                <code>execute</code><br/>
                <code>expecting</code><br/>
                <code>extends</code><br/>
                <code>fetch</code><br/>
                <code>filtered</code><br/>
                <code>finally</code><br/>
                <code>flush</code><br/>
                <code>for</code><br/>
                <code>from</code><br/>
                <code>getter</code><br/>
                <code>has</code><br/>
                <code>if</code><br/>
                <code>in</code><br/>
                <code>index</code><br/>
                <code>invoke:</code><br/>
                <code>is</code><br/>
                <code>matching</code><br/>
                <code>method</code><br/>
                <code>methods</code><br/>
                <code>modulo</code><br/>
                <code>mutable</code><br/>
                <code>native</code><br/>
                <code>None</code><br/>
                <code>not</code><br/>
                <code>nothing</code><br/>
                <code>Nothing</code><br/>
                <code>null</code><br/>
                <code>on</code><br/>
                <code>one</code><br/>
                <code>operator</code><br/>
                <code>or</code><br/>
                <code>order</code><br/>
                <code>otherwise</code><br/>
                <code>pass</code><br/>
                <code>raise</code><br/>
                <code>read</code><br/>
                <code>receiving</code><br/>
                <code>resource</code><br/>
                <code>return</code><br/>
                <code>returning</code><br/>
                <code>rows</code><br/>
                <code>self</code><br/>
                <code>setter</code><br/>
                <code>singleton</code><br/>
                <code>sorted</code><br/>
                <code>storable</code><br/>
                <code>store</code><br/>
                <code>super</code><br/>
                <code>switch</code><br/>
                <code>test</code><br/>
                <code>then</code><br/>
                <code>this</code><br/>
                <code>throw</code><br/>
                <code>to</code><br/>
                <code>try</code><br/>
                <code>verifying</code><br/>
                <code>widget</code><br/>
                <code>with</code><br/>
                <code>when</code><br/>
                <code>where</code><br/>
                <code>while</code><br/>
                <code>write</code>
            </div>

            <br/>
            <p><i>The below lists of built-in names are indicative and not exhaustive. They may evolve as the Prompto framework expands.</i></p>

            <h2>Built-in type names</h2>

            <p>The following type names are reserved by Prompto. Their names cannot be used for attributes, categories, methods, variables and so forth:</p>
            <div className="keywords">
                <code>Any</code><br/>
                <code>Blob</code><br/>
                <code>Boolean</code><br/>
                <code>Character</code><br/>
                <code>Code</code><br/>
                <code>Css</code><br/>
                <code>Cursor</code><br/>
                <code>Date</code><br/>
                <code>DateTime</code><br/>
                <code>Decimal</code><br/>
                <code>Document</code><br/>
                <code>Html</code><br/>
                <code>Image</code><br/>
                <code>Integer</code><br/>
                <code>Iterator</code><br/>
                <code>Method</code><br/>
                <code>Period</code><br/>
                <code>Text</code><br/>
                <code>Time</code><br/>
                <code>Type</code><br/>
                <code>Uuid</code>
                <code>Version</code>
            </div>

            <h2>Built-in attribute names</h2>

            <p>The following attribute names are reserved by Prompto. Their names cannot be used for attributes, categories, methods, variables and so forth:</p>
            <div className="keywords">
                <code>dbId</code><br/>
                <code>description</code><br/>
                <code>encoding</code><br/>
                <code>id</code><br/>
                <code>image</code><br/>
                <code>name</code><br/>
                <code>path</code><br/>
                <code>text</code><br/>
                <code>timeStamp</code><br/>
                <code>login</code><br/>
                <code>password</code><br/>
                <code>email</code><br/>
            </div>


            <h2>Built-in category names</h2>

            <p>The following category names are reserved by Prompto. Their names cannot be used for attributes, categories, methods, variables and so forth:</p>
            <div className="keywords">
                <code>Attribute</code><br/>
                <code>Buffer</code><br/>
                <code>Category</code><br/>
                <code>File</code><br/>
                <code>Url</code><br/>
            </div>

            <h2>Built-in enumerated names</h2>

            <p>The following enumerated names are reserved by Prompto. Their names cannot be used for attributes, categories, methods, variables and so forth:</p>
            <div className="keywords">
                <code>DecimalConstant</code><br/>
                <code>IntegerConstant</code><br/>
                <code>Error</code><br/>
            </div>

            <h2>Built-in symbol names</h2>

            <p>The following symbol names are reserved by Prompto. Their names cannot be used for attributes, categories, methods, variables and so forth:</p>
            <div className="keywords">
                <code>PI</code><br/>
                <code>E</code><br/>
                <code>MIN_INTEGER</code><br/>
                <code>MAX_INTEGER</code>
            </div>

            <h2>Built-in error names</h2>

            <p>The following error names are reserved by Prompto. Their names cannot be used for attributes, categories, methods, variables and so forth:</p>
            <div className="keywords">
                <code>DIVIDE_BY_ZERO</code><br/>
                <code>INDEX_OUT_OF_RANGE</code><br/>
                <code>NULL_REFERENCE</code><br/>
                <code>NOT_MUTABLE</code><br/>
                <code>NOT_STORABLE</code><br/>
                <code>READ_WRITE</code>
            </div>
            <br/>
        </>;
    }

}

export default new ThisTopic();