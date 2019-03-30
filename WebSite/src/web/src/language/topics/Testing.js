import React from 'react';
import Topic from "../../components/Topic";
import PromptoPlayer from "../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Testing");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Testing</h2>

            <p>Prompto promotes Test Driven Development (TDD) and automated testing.
                TDD is <a target="_blank" rel="noopener noreferrer"
                          href="https://en.wikipedia.org/wiki/Test-driven_development"> a development
                    approach</a>
                where you write tests before writing code. There are numerous benefits to it:</p>
            <ul>
                <li>you gain a better understanding of the requirement before you start writing the code</li>
                <li>you build a large number of tests which cover most if not all use cases</li>
            </ul>

            <p>To encourage TDD, Prompto has a built-in testing framework, based on special methods called test
                methods.</p>
            <p>Here is an example:</p>
            <PromptoPlayer sampleUrl="samples/testing/example.pec" runnable={true}/>
            <p>Test methods make it very easy to write tests before code, and even run them using the interpreter. The
                test will obviously fail until
                the correct code is implemented, which ensures that writing code actually does something: fix the
                test!</p>
            <br/>


            <h3>Test method structure</h3>
            <p>The structure of a test method is the following:</p>
            <ul>
                <li><code>define &lt;"<i>test name</i>"&gt; as test method doing:</code></li>
                <li><i> Prompto code being tested</i></li>
                <li><code>and verifying:</code></li>
                <li><i> Prompto verification code</i></li>
            </ul>
            <p>where <i>"test name"</i> is a free text literal (the only restriction being that the name must be
                unique),
                and <i>Prompto verification code</i> is a list of one or more predicates i.e. boolean expressions.
            </p>
            <p>Thanks to this structure, Prompto tests can check multiple predicates even if not all of them succeed, as
                in the below example:</p>
            <PromptoPlayer lines={8} sampleUrl="samples/testing/multi.pec" runnable={true}/>
            <br/>

            <h3>Testing errors</h3>
            <p>Alternately, test methods can be used to check correct error handling. Here is an example:</p>
            <PromptoPlayer lines={8} sampleUrl="samples/testing/error.pec" runnable={true}/>
            <br/>

            <h3>Testing stored data</h3>
            <p>It is generally a bad idea to test against a permanent data store, because it means that the test success
                relies on the state
                of a data store which cannot be controlled by the test itself.<br/>
                To facilitate testing with stored data, Prompto creates a fresh memory store
                before the test runs (the store is disposed immediately after execution of the test).</p>
            <p>A reliable test involving stored data might look like the following:</p>
            <PromptoPlayer lines={8} sampleUrl="samples/testing/store.pec" runnable={true}/>
            </React.Fragment>;
    }

}

export default new ThisTopic();