import React from 'react';
import Topic from "./Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Mutability");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>Mutability</h2>

            <p>Programs are used to <i>alter</i> data. They do this either by introducing new data, transforming existing data or deleting it.<br/>
                Naturally, many programming languages let developers alter data: C, C++, Java, C#, Python, JavaScript...<br/><br/>
                As an example, a JavaScript object can be modified as follows:</p>
            <pre><code>{String.raw`var person = { name : "John", gender : "Male", profession: "Engineer" }
// now modify the person
person.profession = "Manager";`}</code></pre>
            <p>The above has the benefit of simplicity.</p>
            <p>However, as programs grow and become more complex,
            notably when multiple executions threads run in parallel, it can become very difficult to control
            what happens when data used by the program changes.</p>
            <p>This has led the industry to provide a different breed of programming languages, known as <i>functional</i> languages.<br/>
                Examples of such languages are Haskell, Erlang, F#, Clojure, and to a certain extent Scala.<br/>
                Their common characteristic is that instead of modifying existing data, they rather produce <i>new</i> data
                from the existing data and the required alterations.<br/><br/>
                As an example, the above fragment could be written <i>functionally</i> as follows:
            </p>
            <pre><code>{String.raw`var person = { name : "John", gender : "Male", profession: "Engineer" };
// create a function to produce a modified person
function modifiedPersonWithAttribute(person, atttribute, newValue) {
    person = Object.create(person);
    person[atttribute] = newValue;
    return person;
}
// call that function
person = modifiedPersonWithAttribute(person, "profession", "Manager");`}</code></pre>
            <p>Notice that the original object is not modified, instead a new object is created,
                and assigned to the <i>person</i> variable. By doing so, if any other variable refers to the original object,
                its behavior will remain predictable.<br/>
                See <a href="https://en.wikipedia.org/wiki/Functional_programming" target="_blank" rel="noopener noreferrer">Functional_programming</a> for more background on functional programming.
            </p>
            <p>At Prompto, we believe in functional programming, however we also notice a few things:</p>
            <ul>
                <li>It is a bit awkward for a language to not alter data when the purpose of <i>every</i> program is actually to alter data
                    (if you accept to consider that creating new data is altering the set of existing data).
                    This contradiction sometimes generates a lot of complexity.</li>
                <li>While it is generally wrong to share mutable data across parts of a program, there are places where it is 100% safe,
                    much simpler and much faster to mutate data, such as input/output and initialization.</li>
            </ul>
             <p>From there, we decided it would be better, rather than force developers into a stiff model, to instead let them decide when to use mutable data.</p>

            <h2>Mutable <i>variables</i> vs mutable <i>values</i></h2>

            <p>In Prompto, all <i>variables</i> are mutable. It is perfectly legal to write the following 2 assignments:</p>
            <pre><code>{String.raw`a = 1.347
a = 2.013`}</code></pre>
            <p>In this example, the value <i>1.347</i> remains unchanged, but <i>a</i> now refers to another value.</p>
                <p>Prompto <i>values</i> on the other hand are by default immutable.</p>
                <p>For example, you <i>cannot</i> change the value of a default non mutable list,
                instead you must produce a new list composed from the <i>old</i> list and additional data, as follows:
            </p>
            <pre><code>{String.raw`list = [1, 2, 3]
list = list + [4, 5]`}</code></pre>
            <p>Now let's imagine you need to change the second item of the above list from 2 to 5. Using an immutable list,
                you would have to write the following:</p>
            <pre><code>list = list[1:1] + [5] + list[3:3]</code></pre>
            <p>This is tedious to write, hard to read, and slow to execute. If <i>list</i> only exists within a small and well controlled scope,
                it is much simpler and faster to use a <i>mutable</i> list instead, as follows:</p>
            <pre><code>{String.raw`list = mutable [1, 2, 3]
list[2] = 5`}</code></pre>
            <p>Please note that the above code would be illegal if the <i>mutable</i> keyword was omitted.</p>
            <p>Also note that only collection and category values can be marked <i>mutable</i>.</p>

            <h2>Mutability guardians</h2>

            <p>Controlling mutability can rapidly become complex when values are passed as parameters to methods, or when returning them from method bodies.<br/>
                Prompto lets developers declare <i>mutable</i> parameters, using the following syntax:</p>
            <pre><code>define doStuff as method receiving mutable Text[] list and Integer[] someData</code></pre>
            <p>In this example, the <i>list</i> parameter is mutable, while the <i>someData</i> parameter is not.<br/>
                Prompto ensures that only mutable values are passed as mutable parameters, hence preventing methods from modifying data without notice.</p>
            </React.Fragment>;
    }

}

export default new ThisTopic();