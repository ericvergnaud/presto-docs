import React from 'react';
import Topic from "../../../../components/Topic";
import PromptoPlayer from "../../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Definition");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

                <h2>Defining category methods</h2>
                <p>A category method is identified by its category and its prototype, defined by its name and its accepted arguments.</p>
                <p>A category method is defined by declaring, within a category definition, its prototype and optional return value, followed by the method statements.</p>
                <p>The minimal prototype has the following form:</p>
                <ul>
                    <li>In E dialect: <code>define <i>methodName</i> as method doing:</code></li>
                    <li>In O dialect: <code><i>methodName</i>() {}</code></li>
                    <li>In M dialect: <code>def <i>methodName</i>():</code></li>
                </ul>

                <p>A category method must be defined within a category definition, as follows:</p>
                <PromptoPlayer key={PromptoPlayer.nextKey()} lines={6} sampleUrl="samples/categories/methods/definitions.pec"/>
                <br/>


                <h3>Method names</h3>
                <p>A method name can be any valid identifier i.e. a word starting with a letter and followed by any number of letters or digits.</p>
                <p/>
                <h3>Method return types</h3>
                <p>A Prompto method can return any number of values.</p>
                <p>If no value is returned, the return type is known as <code>Void</code> type.</p>
                <p>If exactly 1 value is returned, the return type can be specified. When not specified, it is inferred by Prompto.</p>
                <p>Specifying the return type is done as follows:</p>
                <ul>
                    <li>In E dialect: <code>define <i>methodName</i> as method returning <i>Type</i> doing:</code> </li>
                    <li>In O dialect: <code><i>Type method methodName</i>() {}</code></li>
                    <li>In M dialect: <code>def <i>methodName</i>() -> <i>Type</i>:</code></li>
                </ul>
                <p>where <code><i>Type</i></code> is the name of an existing type. </p>
                <p>If more than one value is returned, the return type is <code>Tuple</code>. This can be convenient for quick development
                    but should not be used for large scale applications, because Prompto does not infer the type of Tuple elements.</p>
            </React.Fragment>;
    }

}

export default new ThisTopic();