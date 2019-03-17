import React from 'react';
import Topic from "../Topic";
import Methods from "./Methods";
import Categories from "./Categories";

class ThisTopic extends Topic {

    constructor() {
        super("Bindings", [ Methods, Categories ]);
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>Native bindings</h2>

            <p>Prompto does not compile to <i>machine</i> code that can be executed by a processor.<br/>
                Instead, it leverages existing programming languages to focus on business logic, and ensure maximum interoperability across platforms.
            </p>

            <p>Native <i>binding</i> is the mechanism used by Prompto to communicate with the host language, and with the underlying operating system.</p>

            <p>To achieve this, Prompto <i>binds</i> methods and categories to
                their equivalent in the host language. This chapter describes this mechanism.</p>
            </React.Fragment>;
    }

}

export default new ThisTopic();