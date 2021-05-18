import React from 'react';
import Declaring from "./Declaring";
import Calling from "./Calling";
import Arguments from "./Arguments";
import Overloading from "./Overloading";
import Abstract from "./Abstract";
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Methods", [ Declaring, Calling, Arguments, Overloading, Abstract ]);
    }

    renderContent(topicSelected) {
        return <>
            <h2>Methods</h2>

            <p>Prompto supports both <i>global</i> methods and <i>category</i> methods.</p>
            <p>In this section, we describe <i>global</i> methods only, <i>category</i> methods are described in the <i>Categories</i> section.</p>
            </>;
    }

}

export default new ThisTopic();