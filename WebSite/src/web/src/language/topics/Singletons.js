import React from 'react';
import Topic from "../../components/Topic";
import PromptoPlayer from "../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Singletons");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Singletons</h2>
            <p>There are situations which require having one and only one instance of a given category.</p>
            <p>If, for example, you were to define a <i>World</i> category, chances are you would only need one
                instance.</p>
            <p>Prompto directly supports this concept through <i>Singletons</i>, a specialized category which has one
                and only one instance.</p>
            <p>Being a special category, a singleton supports most category features i.e. attributes and methods
                except the following:</p>
            <ul>
                <li>a singleton cannot derive from another category or singleton</li>
                <li>a singleton cannot contain abstract methods</li>
                <li>a singleton cannot be instantiated</li>
                <li>a singleton cannot be made <i>mutable</i></li>
            </ul>

            <h3>Accessing singleton attributes and methods</h3>
            <p>Singleton attributes and methods are accessible using the singleton name, which serves as both a type and
                the only instance.</p>

            <h3>Populating singleton attributes</h3>
            <p>An immutable singleton would not be very useful, since it would only hold constant values known at coding
                time. On the other hand, it would be very
                difficult to ensure consistency of a mutable singleton in the context of multiple Workers. Prompto
                solves this problem using <code>with</code> blocks.</p>
            <p>In the below example, we:</p>
            <ul>
                <li>define a 'Configuration' singleton</li>
                <li>populate its attributes inside a <code>with</code> block</li>
                <li>read an attribute directly from the singleton</li>
            </ul>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={12} sampleUrl="samples/singletons/read.pec" runnable={true}/>
            <p>In the above example, it is safe to read <i>login</i> outside a <code>with</code> block, because it only
                involves reading one value.</p>
            <br/>

            <h3>Calling singleton methods</h3>
            <p>Singleton methods are likely to:</p>
            <ul>
                <li>access more than one attribute</li>
                <li>change the singleton's attribute values</li>
            </ul>
            <p>For those reasons, singleton methods can only be called within a <code>with</code> block: </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={16} sampleUrl="samples/singletons/call.pec" runnable={true}/>
            <br/>

            <h3>How the <code>with</code> block works</h3>
            <p>The <code>with</code> block ensures that only the main program or one Worker at a time can execute the
                statements contained in <code>with</code> block body.
                This protection spans across all <code>with</code> blocks for a given singleton. Internally, the main
                program or Worker takes ownership of the singleton until all
                statements in the block body are executed, thus blocking any other worker from simultaneously entering
                any <code>with</code> block for the singleton.</p>
            <p><i>JavaScript Workers do not share data, rather they communicate using messages. Although Prompto supports singletons on all platforms,
                developers are advised to avoid them in a browser if they use Workers,
                because using them can significantly slow down execution.</i></p>
            </React.Fragment>;
    }

}

export default new ThisTopic();