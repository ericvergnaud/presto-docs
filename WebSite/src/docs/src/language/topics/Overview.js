import React from 'react';
import Topic from "./Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Overview");
    }

    renderContent() {
        return <div>
            <h2>Overview</h2>

            <p>The Prompto language is designed to create business applications in the cloud.</p>

            <p>Business applications are applications which focus on business logic and user interaction,
                as opposed to middleware applications which focus on technical tasks such as data storage,
                message broadcasting, or web pages distribution.<br/>
                Business applications typically make heavy use of a data store, and span across multiple components:
                data store, back end and front end.<br/>
                Prompto is designed to help organizations be more effective in building business applications.<br/>
                It achieves this by focusing on business logic, integration and presentation, while still relying for
                technical tasks
                on the exceptional ecosystems available from traditional platforms.
            </p>

            <h2>Run everywhere</h2>

            <p>Business applications often involve UI, server-side business logic and data storage. This currently
                requires developing
                in multiple languages. Prompto removes this requirement and greatly simplifies development by providing
                a single language
                for UI, server-side logic and data modelling.<br/>
                This is achieved by extending existing languages rather than replace them. There is a Prompto runtime
                for Java,
                C#, Python, JavaScript and Swift. Prompto does not compete with these languages, but rather complements
                them with a specific focus
                on business data modeling and storage.<br/>
            </p>

            <h2>Build and run in the cloud</h2>

            <p>The Prompto language is designed for cloud deployment. A strong requirement of cloud deployment
                is that any piece of code or configuration must be easily accessible, regardless of the physical or
                virtual box
                on which an application is running. Prompto achieves this by relying on a distributed code store, thus
                removing the
                risk inherent to file based deployment.
            </p>
            <p>Another strong requirement of cloud deployment is that applications must be able to run on somewhat
                heterogeneous
                operating systems, simply because you can't instantaneously upgrade or migrate the OS on thousands of
                boxes.
                This ranges from minor OS patches to different OS (Linux, Windows, MacOSX). Prompto achieves this by
                distributing source code
                rather than machine code, and compiling/transpiling it on demand based on the environment.
            </p>

            <h2>Easy integration</h2>

            <p>Existing business applications are often built using languages such as Java, C#, Python, JavaScript or
                Swift.<br/>
                There is a Prompto runtime for each of the above host languages, and they are 100% compatible with each
                other.<br/>
                Prompto natively integrates with any web browser, any back end infrastucture, and rich clients such as
                Java RCP, .Net RCP
                and native iOS applications <i>(Swift runtime not available yet)</i>.
            </p>

            <h2>Interpreted <i>and</i> compiled</h2>

            <p>Prompto runs in both interpreted and compiled mode.<br/>
                There are good reasons for supporting both interpreted and compiled mode:
            </p>
            <ul>
                <li>In scripting mode, and in the REPL, code is executed line by line, it cannot be compiled.</li>
                <li>Interpreted code can be modified without restarting the application, which makes development
                    very productive.
                </li>
                <li>The interpreter is able to run incorrect code, notably tests, which can be useful during
                    development, while incorrect code will fail to compile.
                </li>
                <li>Transpiled code (in Python and JavaScript) is sometimes hard to debug because it does not always
                    map exactly to Prompto code.
                </li>
            </ul>
            <p>
                The Java runtime comes with an interpreter and a compiler which is able to compile Prompto code to JVM
                byte code.<br/>
                The C# runtime comes with an interpreter and a compiler which is able to compile Prompto code to CLR
                byte code <i>(compiler not available yet)</i>.<br/>
                The Python 2 and Python 3 runtimes come with an interpreter and a transpiler which is able to transpile
                Prompto code to Python byte code <i>(transpiler not available yet)</i>.<br/>
                The JavaScript runtime come withs an interpreter and a transpiler which is able to transpile Prompto
                code to JavaScript code <i>(transpiler not available yet)</i>.<br/>
                <i>The Swift runtime is planned but not available yet</i>.
            </p>

            <h2>Statically inferred types</h2>

            <p>Prompto uses static typing, like Java or C# do. This ensures best performance on all platforms.<br/>
                Prompto implements type inference, thus freeing the developer from having to declare obvious types:<br/>
                When writing <code>a = 123</code> code, it is obvious that <code>a</code> is an integer, so there is no
                need to declare it.<br/>
                Method parameter types still need to be declared though, because they cannot be inferred.
            </p>

            <h2>Reified attributes</h2>

            <p>Prompto introduces reified attributes, a simple and effective way to model business data.<br/>
                Attributes are also known as fields, properties or columns.<br/>
                In most data models (relational, object, noSql), they have limited scope: table or object
                definition.<br/>
                Reified attributes are attributes defined <i>globally</i>. Being global, they become shared by all
                tables and object definitions.<br/>
                Amongst other benefits, reified attributes:
            </p>
            <ul>
                <li>enable new search capabilities</li>
                <li>enable a single data model across all application tiers</li>
                <li>enable enterprise level controlled vocabularies</li>
                <li>enable semantic types, as opposed to technical types</li>
                <li>eliminate the <a href="https://en.wikipedia.org/wiki/Multiple_inheritance">deadly diamond
                    problem</a></li>
                <li>eliminate the <a href="https://en.wikipedia.org/wiki/Object-relational_impedance_mismatch">impedance
                    mismatch problem</a></li>
            </ul>

            <h2>Global names</h2>

            <p>Prompto names are global i.e. there is no concept of namespace in Prompto.<br/>
                At Prompto, we believe namespaces make sense for technical components, but not for business
                domains.<br/>
                If a given name has a different meaning in 2 departments of the same business, then it is likely to
                create business issues, unrelated to IT.
                That problem should be solved by adopting common terminology across departments, not through IT islands.<br/>
                A side-effect of having global names is that names need to be chosen carefully.<br/>
                At Prompto, we believe this is a feature: it encourages high quality of naming.<br/>
            </p>

            <h2>Global and dynamic polymorphic methods</h2>

            <p>Prompto methods can either be attached to object definitions or be global, like in Python or
                JavaScript.<br/>
                Prompto methods are polymorphic i.e. 2 methods with the same name can coexist if they accept a different
                set of parameters, like in Java or C#.<br/>
                However Prompto goes a step further by selecting the most appropriate method at <i>execution
                    time</i> rather than <i>compile time</i>.<br/>
                This feature greatly simplifies development and data modeling, by eliminating the need for <a
                    href="https://en.wikipedia.org/wiki/Double_dispatch">double dispatch</a>.
            </p>

            <h2>Prompto dialects: syntax is a detail</h2>

            <p>To facilitate the conversation between all breeds of developers, Prompto comes with not one "language"
                but three.<br/>
                Prompto calls these <i>dialects</i>, as they are not independant languages, but rather 3 syntactic
                variations of the same language concepts.<br/>
                They make it very easy for any developer to adopt the Prompto platform, whatever his/her technical
                background.<br/>
                Prompto <i>dialects</i> seamlessly translate to one another.<br/>
                    By doing so, they eliminate the barrier of having to learn a formal grammar only to read code.<br/>
                    Prompto <i>dialects</i> are collaborative tools which help technologists work together.
            </p>


        </div>;
    }
}

export default new ThisTopic();