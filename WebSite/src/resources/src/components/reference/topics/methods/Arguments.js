import React from 'react';
import Topic from "../../../content/Topic";
import PromptoPlayer from "../../../player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Arguments");
    }

    renderContent(topicSelected) {
        return <>
                <h2>Method arguments</h2>

                <p>A Prompto method can accept 0 or more arguments.</p>
                <p>Arguments must be declared (there is no implicit argument such as <i>arguments</i> in JavaScript).</p>
                <p>When mutiple arguments are declared, they must be separated by commas. In E dialect only, the last comma is replaced by the <code>and</code> keyword.</p>
                <p>Arguments are typed, in one of the following ways:</p>
                <ul>
                    <li>
                        <b>Attribute argument</b>, with the form <code><i>name</i></code>, where <code><i>name</i></code> is an existing Attribute name.
                        <PromptoPlayer key={PromptoPlayer.nextKey()} lines={10} sampleUrl="samples/methods/attributeArgument.pec" runnable={true}/>
                    </li>
                    <br/>

                    <li>
                        <b>Typed argument</b>, with the form <code><i>Type x</i></code>, where <code><i>type</i></code> is an existing Type name
                            and <code><i>x</i></code> can be any valid variable identifier.
                        <PromptoPlayer key={PromptoPlayer.nextKey()} lines={8} sampleUrl="samples/methods/typedArgument.pec" runnable={true}/>
                    </li>
                    <br/>

                    <li>
                        <b>Attribute member argument</b>, with the form <code>any <i>x</i> with attribute <i>name</i></code>, where <code><i>x</i></code> can be any valid variable
                            identifier and <code><i>name</i></code> is an existing Attribute name. This form accepts more than one attribute.
                        <PromptoPlayer key={PromptoPlayer.nextKey()} lines={10} sampleUrl="samples/methods/memberArgument.pec" runnable={true}/>
                    </li>
                    <br/>

                    <li>
                        <b>Extended member argument</b>, with the form <code><i>Type x</i> with attribute <i>name</i></code>,
                            where <code><i>type</i></code> is an existing category name, <code><i>x</i></code> can be any valid variable
                            identifier and <code><i>name</i></code> is an existing Attribute name. This form accepts more than one attribute.
                        <PromptoPlayer key={PromptoPlayer.nextKey()} lines={12} sampleUrl="samples/methods/extendedArgument.pec" runnable={true}/>
                   </li>
                </ul>
                <br/>

                <h4>Mixing argument types</h4>
                <p>When a method expects mutiple arguments, argument types can be mixed as required. </p>
                <ul>
                    <PromptoPlayer key={PromptoPlayer.nextKey()} lines={10} sampleUrl="samples/methods/mixedArguments.pec" runnable={true}/>
                </ul>
                <br/>

               <h4>Default argument values</h4>
                <p>Prompto supports <i>default</i> argument values, which remove the need to always pass all arguments to a method.</p>
                <p>Default argument values must be <i>constant</i> values, i.e. they cannot vary during program execution. Good candidates are literals, null, and enumerated values.</p>
                <ul>
                    <PromptoPlayer key={PromptoPlayer.nextKey()} lines={10} sampleUrl="samples/methods/defaultArgument.pec" runnable={true}/>
                </ul>

            </>;
    }

}

export default new ThisTopic();