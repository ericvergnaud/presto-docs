import React from 'react';
import PromptoPlayer from "../../../player/PromptoPlayer";
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Enumeration");
    }

    renderContent(topicSelected) {
        return <>
            <h2>Enumerations</h2>

            <p>An enumeration is a list of names for constant values of a particular type.<br/>
                Enumerations are practical to refer to values using symbols, rather than provide the same value again
                and again in your code.<br/>
                Prompto supports enumerations of both built-in and user defined types.<br/>
                This section describes enumerations of built-in types.<br/>
                The below is an example:
            </p>
            <ul>
                <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/types/enums/direction.pec"/>
            </ul>
            <br/>
            <p>Enumerated symbols are global definitions. You cannot redefine the above
                name <code>NORTH</code> elsewhere.<br/>
                Enumeration symbols must be composed of uppercase letters, digits and '_' only. The first character
                cannot be a digit.<br/>
                This makes it easy to recognize enumerated symbols at first glance.<br/>
            </p>
            <p>Once an enumerated symbol is defined, it can be used anywhere in place of the value itself.</p>
            <ul>
                <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/types/enums/usage.pec" runnable={true}/>
            </ul>

            <h3>
                Enumeration attributes
            </h3>
            <p>Each enumerated symbol has the following attributes:</p>
            <ul>
                <li><code>name</code>: returns the name of the enumerated symbol as a Text value</li>
                <li><code>value</code>: returns the value represented by the enumerated symbol.
                    The exact type of the value is determined by the exact type of the enumeration
                </li>
            </ul>

            <p>The enumeration itself has the following attributes:</p>
            <ul>
                <li><code>symbols</code>: returns a List of the symbols in the enumeration</li>
                <PromptoPlayer key={PromptoPlayer.nextKey()} lines={12} sampleUrl="samples/types/enums/attributes.pec" runnable={true}/>
            </ul>
            <br/>

            <h3>Enumerations of user defined types</h3>
            <p>Prompto supports Enumerations of user defined types. See Categories for details.</p>
        </>;
    }

}

export default new ThisTopic();