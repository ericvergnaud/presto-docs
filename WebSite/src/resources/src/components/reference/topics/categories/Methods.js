import React from 'react';
import Definition from "./methods/Definition";
import Calling from "./methods/Calling";
import Arguments from "./methods/Arguments";
import Overloading from "./methods/Overloading";
import Overriding from "./methods/Overriding";
import Getters from "./methods/Getters";
import Setters from "./methods/Setters";
import Operators from "./methods/Operators";
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Methods", [ Definition, Calling, Arguments, Overloading, Overriding, Getters, Setters, Operators ]);
    }

    renderContent(topicSelected) {
        return <>

            <h2>Methods</h2>

            <p>Prompto supports both <i>global</i> methods and <i>category</i> methods.</p>
            <p>In this section, we describe <i>category</i> methods only, <i>global</i> methods are described in the principal <i>Methods</i> section.</p>
            <p/>
            <p><i>Category</i> and <i>global</i> methods have a lot in common, so most of the information is the same for both type of methods, and may seem redundant.</p>
            <p>There are however some differences:</p>
            <ul>
                <li><p>The current object i.e. <code>this</code> or <code>self</code>:</p>
                    <p>Category methods are executed in the context of a category instance. This instance can be addressed using the <code>this</code>  or <code>self</code> keyword.</p>
                    <p>The current object is <i>implicit</i>, there is no need to pass it as a parameter.</p>
                </li>
                <li><p>Method <i>overriding</i>:</p>
                    <p>Derived categories inherit the methods defined in their parents. Prompto supports re-defining these methods in derived categories. This is called method <i>overriding</i>.</p>
                </li>
                <li><p>Abstract methods:</p>
                    <p>Abstract methods are only supported by abstract categories. Concrete derived categories must provide an implementation of inherited abstract methods.</p>
                </li>
            </ul>

            </>;
    }

}

export default new ThisTopic();