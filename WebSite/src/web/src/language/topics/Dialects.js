import React from 'react';
import Topic from "../../components/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Dialects");
    }

    renderContent() {
        return <React.Fragment>
            <h2>Prompto dialects</h2>

            <p>Information technologists can have very different backgrounds.<br/>
                Some are very technical, with strong skills in OOP languages such as Java or C#.<br/>
                Some have grown their programming skills from scripting languages such as Python.<br/>
                Others have little or no coding experience, and work more on functional specifications, project
                management or testing.<br/>
                All these information technologists participate actively in the development.<br/>
                At Prompto, we believe they are all developers, and should have equal access to code.
            </p>

            <h2>Syntax is a detail</h2>

            <p>To facilitate the conversation between all breeds of developers, Prompto comes with not one "language"
                but
                three.<br/>
                Prompto calls these dialects, as they are not independant languages, but rather 3 syntactic variations
                of the same language concepts.<br/>
                Prompto dialects are a collaborative tool which helps technologists work together.<br/>
                They eliminate the barrier of having to learn a formal grammar only to read code.<br/>
                They make it very easy for any developer to adopt the Prompto platform, whatever his/her coding
                background.
            </p>

            <h2>The Objy dialect aka "O"</h2>

            <p>Objy uses a syntax that tries to follow as much as possible the syntax of OOP languages such as C++, Java
                or C#.<br/>
                Since Prompto introduces new concepts, the Objy syntax sometimes differs from these languages.<br/>
                But structuring elements are very similar: semi-colons to end statements, curly braces to group multiple
                statements, etc...<br/>
                Here is an example:<br/>
            </p>
            <pre><code>{String.raw`method main() {
    print("15 + 3.5");
    print("= 28.5");
}`}
            </code></pre>
            <p/>

            <h2>The Monty dialect aka "M"</h2>

            <p>Monty uses a syntax that tries to follow as much as possible the syntax of the Python 3 language.<br/>
                Since Prompto introduces new concepts, the Monty syntax sometimes differs from the Python 3 syntax.<br/>
                But structuring elements are very similar: one statement per line, colon and indentation to group
                multiple
                statements, etc...<br/>
                Here is an example:<br/>
            </p>
            <pre><code>{String.raw`def main(options:Text<:>):
    print("15 + 3.5")
    print("= 28.5")`}</code></pre>
            <p/>
            <h2>The Engly dialect aka "E"</h2>

            <p>Engly is a syntax that mimics English as much as possible.<br/>
                The intent is that developers with little or no coding background should be able to read code without
                having to learn the formalism of other dialects.<br/>
                The structure is very similar to Monty. Additionaly, it removes parenthesis, and many keywords are
                replaced by plain English words.<br/>
                Here is an example:<br/>
            </p>
            <pre><code>{String.raw`define main as method doing:
    print "15 + 3.5"
    print "= 28.5"`}</code></pre>
            <p/>

            <h2>Seamless translation between dialects</h2>

            <p>Prompto tools provide seamless translation from one dialect to another.<br/>
                Practically, you simply need to select the dialect of your choice.<br/>
                This makes it very easy for any developer to view any code in his/her preferred dialect.<br/>
                It also makes it very easy for a developer to switch dialect in the future, since no rewriting is
                needed.<br/>
                You can experience this translation by exploring the examples in this documentation.
            </p>
        </React.Fragment>;
    }

}

export default new ThisTopic();