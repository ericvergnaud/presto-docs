import React from 'react';
import Topic from "../../../../components/Topic";
import PromptoPlayer from "../../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Arguments");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Category method arguments</h2>

            <p>A Prompto category method can accept 0 or more arguments.</p>
            <p>Arguments must be declared (there is no implicit argument such as <i>arguments</i> in JavaScript).</p>
            <p>When mutiple arguments are declared, they must be separated by commas. In E dialect only, the last comma
                is replaced by the <code>and</code> keyword.</p>
            <p>Arguments are typed, in one of the following ways:</p>
            <ul>
                <li><p><b>Attribute argument</b>, with the form <code><i>name</i></code>,
                    where <code><i>name</i></code> is
                    an existing Attribute name.
                </p>
                    <PromptoPlayer key={PromptoPlayer.nextKey()} lines={12} sampleUrl="samples/categories/methods/arguments-attribute.pec"
                                   runnable={true}/>
                    <br/>
                </li>
                <li><p><b>Typed argument</b>, with the form <code><i>Type x</i></code>,
                    where <code><i>type</i></code> is an
                    existing Type name
                    and <code><i>x</i></code> can be any valid variable identifier.</p>
                    <PromptoPlayer key={PromptoPlayer.nextKey()} lines={12} sampleUrl="samples/categories/methods/arguments-typed.pec"
                                   runnable={true}/>
                    <br/>
                </li>
                <li><p><b>Anonymous type attribute argument</b>, with the form <code>any <i>x</i> with
                    attribute <i>name</i></code>,
                    where <code><i>x</i></code> can be any valid variable
                    identifier and <code><i>name</i></code> is an existing Attribute name. This form accepts more than
                    one
                    attribute.</p>
                    <PromptoPlayer key={PromptoPlayer.nextKey()} lines={16} sampleUrl="samples/categories/methods/arguments-anonymous.pec"
                                   runnable={true}/>
                    <br/>
                </li>
                <li><p><b>Extended type argument</b>, with the form <code><i>Type x</i> with
                    attribute <i>name</i></code>,
                    where <code><i>type</i></code> is an existing category name, <code><i>x</i></code> can be any valid
                    variable
                    identifier and <code><i>name</i></code> is an existing Attribute name. This form accepts more than
                    one
                    attribute.</p>
                    <PromptoPlayer key={PromptoPlayer.nextKey()} lines={16} sampleUrl="samples/categories/methods/arguments-extended.pec"
                                   runnable={true}/>
                    <br/>
                </li>
            </ul>

            <h4>Default argument values</h4>
            <p>Prompto supports <i>default</i> argument values, which remove the need to always pass all
                arguments to a method.</p>
            <p>Default argument values must be <i>constant</i> values, i.e. they cannot vary during program execution. Good candidates
                        are literals, null, and enumerated values.</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={10} sampleUrl="samples/categories/methods/arguments-default.pec" runnable={true}/>
            <br/>

       </React.Fragment>;
    }

}

export default new ThisTopic();