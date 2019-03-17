import React from 'react';
import Topic from "./Topic";
import PromptoPlayer from "../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Enumerations");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Category enumerations</h2>

            <p>An enumeration is a list of names for constant values of a particular type.<br/>
                Enumerations are practical to refer to values using symbols, rather than provide the same value again
                and again in your code.<br/>
                Prompto supports enumerations of both built-in and category types.<br/>
                This section describes enumerations of category types.<br/>
            </p>
            <PromptoPlayer lines={10} sampleUrl="samples/enumerations/definition.pec"/>
            <br/>

            <p>Enumerated symbols are global definitions. You cannot redefine the above
                name <code>MOTORBIKE</code> elsewhere.<br/>
                Enumeration symbols must be composed of uppercase letters, digits and '_' only. The first character
                cannot be a digit.<br/>
                This makes it easy to recognize enumerated symbols at first glance.<br/>
            </p>
            <p>Once an enumerated symbol is defined, it can be used anywhere in place of the value itself.<br/>
            </p>
            <PromptoPlayer lines={10} sampleUrl="samples/enumerations/usage.pec" runnable={true}/>
            <br/>

            <h3>
                Enumeration attributes
            </h3>
                <p>On top of their category attributes, category enumeration values have the following attributes:</p>
            <ul>
                <li><code>name</code>: returns the name of the enumerated symbol as a Text value</li>
            </ul>
            <p>The enumeration itself has the following attributes:</p>
            <ul>
                <li><code>symbols</code>: returns a List of the symbols in the enumeration</li>
            </ul>
            <PromptoPlayer lines={12} sampleUrl="samples/enumerations/attributes.pec" runnable={true}/>
            <br/>

           <h3>
                Enumeration methods
            </h3>
            <p>Category enumerations do not directly support methods. However, they can be derived from existing
                categories, making it easy to provide custom methods.</p>
                <p>In the below example, we:</p>
            <ul>
                <li>define a 'MobileDevice' category with a 'printSpeed' method</li>
                <li>define a 'Vehicle' enumeration which derives from 'MobileDevice'</li>
                <li>call the 'printSpeed' method on an enumerated instance</li>
            </ul>
                <PromptoPlayer lines={20} sampleUrl="samples/enumerations/methods.pec" runnable={true}/>
                <br/>

            <h3>Enumerations of built-in types</h3>
            <p>Prompto supports Enumerations of built-in types. See Types -> Enumeration for details.</p>
            </React.Fragment>;
    }

}

export default new ThisTopic();