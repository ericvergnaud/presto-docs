import React from 'react';
import Topic from "../Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Built-in");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Built-in errors</h2>
            <p>Prompto is focused on business logic, so it does not provide a wide variety of error types. Instead it lets
                the underlying runtime provide details on those errors.</p>
            <p>All built-in errors are defined in the built-in <code>Error</code> enumerated category.</p>
            <p>The list of built-in errors is:</p>
            <ul>
                <li>READ_WRITE: a read/write error can occur when reading or writing from a resource: file, url, database
                    and so forth
                </li>
                <li>NULL_REFERENCE: a null reference occurs when trying to access a member attribute or method from a null
                    object
                </li>
                <li>INDEX_OUT_OF_RANGE: this error occurs when trying to access a list element &lt; 1 or &gt; to the number of
                    elements in the list
                </li>
                <li>DIVIDE_BY_ZERO: this error occurs when trying to divide a number by 0</li>
                <li>NOT_MUTABLE: this error occurs when trying to set a member attribute on a non mutable object</li>
                <li>NOT_STORABLE: this error occurs when trying to stor an object of a category not marked as storable</li>
            </ul>
        </React.Fragment>;
    }

}

export default new ThisTopic();