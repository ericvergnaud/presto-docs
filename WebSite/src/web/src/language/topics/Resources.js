import React from 'react';
import Topic from "../../components/Topic";
import PromptoPlayer from "../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Resources");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Resources</h2>

            <p>Some system resources require careful handling. For example, when you open a file for writing, the file
                is locked and becomes unavailable for reading by other programs,
                or other parts of your application. Similar constraints apply to other objects: network objects such as
                Urls, database connections, and so on.</p>
            <p>A Prompto <code>resource</code> is a specialized native category designed to take care of these precious
                resources, and free them automatically as soon as possible.
                To achieve this, Prompto requires resources to be either <i>inlined</i> or <i>managed</i>.
                An <i>inlined</i> resource is one that is not assigned to a variable,
                but rather used as an expression, and cannot therefore be accessed more than once.
                A <i>managed</i> resource is one that is protected using a <code>with</code> block.</p>
            <p>It is illegal to <code>read</code> or <code>write</code> a resource which is
                neither <i>managed</i> nor <i>inlined</i>.</p>
            <p>Prompto resources are used to read and write text. There is no support for binary data. If required,
                binary data should be handled and converted to or from Prompto objects using the host language.</p>

            <h3>Reading text from a resource</h3>

            <p><i>In the below examples, we use a Url resource, because file resources are not accessible from a browser.</i>
            </p>

            <p>Prompto resources can be used to read text, either line per line, or all lines at once.</p>

            <h4>Read all the text from an <i>inlined</i> resource</h4>

            <p>When reading all the lines at once, you can simply specify the resource as a parameter to the <code>read
                all</code> statement.</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={10} sampleUrl="samples/resources/read-all-inline.pec" runnable={true}/>
            <br/>

            <h4>Read the text line by line from a <i>managed</i> resource</h4>

            <p>To read the text line by line, you must <i>manage</i> the resource using a <code>with</code> block:</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={10} sampleUrl="samples/resources/read-one-managed.pec" runnable={true}/>
            <br/>

            <h3>Writing text to a resource</h3>

            <p><i>In the below examples, we use a Buffer resource, because file resources are not accessible from a browser.</i>
            </p>

            <p>Prompto can write text to resources, either line per line, or all lines at once.</p>

            <h4>Writing all the text to an <i>inlined</i> resource</h4>

            <p>When writing all the text at once, you can simply specify the resource as a parameter to
                the <code>write</code> statement.</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/resources/write-all-inline.pec" runnable={true}/>
            <br/>

            <h4>Writing the text line by line to a <i>managed</i> resource</h4>

            <p>To write the text line by line, you must <i>manage</i> the resource using a <code>with</code> block:</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={10} sampleUrl="samples/resources/write-one-managed.pec" runnable={true}/>
            <br/>

           <h3>Prompto native resource specification</h3>
            <p>A Prompto native resource must implement:</p>
            <ul>
                <li>a <i>close</i> method, which is called automatically by Prompto when appropriate. This method
                    cannot be called directly by Prompto code.
                </li>
                <li>a <i>isReadable</i> method, which is called to check whether a resource
                    supports <code>read</code> methods
                </li>
                <li>a <i>isWritable</i> method, which is called to check whether a resource
                    supports <code>write</code> methods
                </li>
                <li>a <i>readLine</i> method, which must return the <i>next</i> line of text from the resource,
                    or <code>null</code> if no more data is available
                </li>
                <li>a <i>readFully</i> method, which must return the entire text from the resource,
                    or <code>null</code> if no data is available
                </li>
                <li>a <i>writeLine</i> method, which must <i>append</i> a line of text to the resource</li>
                <li>a <i>writeFully</i> method, which must <i>overwrite</i> the entire content of the resource with
                    the incoming text
                </li>
            </ul>
                <p>Examples:</p>
                <i><a target="_blank" rel="noopener noreferrer"
                      href="https://github.com/prompto/prompto-libraries/blob/master/console/buffer.pec">see an example
                    in Prompto</a></i><br/>
                <i><a target="_blank" rel="noopener noreferrer"
                      href="https://github.com/prompto/prompto-java/blob/master/Java-Runtime/src/main/java/prompto/io/Buffer.java">see
                    an example in Java</a></i><br/>
                <i><a target="_blank" rel="noopener noreferrer"
                      href="https://github.com/prompto/prompto-csharp/blob/master/CSharp-Runtime/src/prompto/io/Buffer.cs">see
                    an example in C#</a></i><br/>
                <i><a target="_blank" rel="noopener noreferrer"
                      href="https://github.com/prompto/prompto-python2/blob/master/Python2-Runtime/src/main/prompto/io/Buffer.py">see
                    an example in Python</a></i><br/>
                <i><a target="_blank" rel="noopener noreferrer"
                      href="https://github.com/prompto/prompto-javascript/blob/master/JavaScript-Runtime/src/main/prompto/io/Buffer.js">see
                    an example in JavaScript</a></i>


            </React.Fragment>;
    }

}

export default new ThisTopic();