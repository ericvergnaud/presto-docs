import React from 'react';
import Topic from "../Topic";
import TextType from "./TextType";

class ThisTopic extends Topic {

    constructor() {
        super("Atomic types", [ TextType ]);
    }

    renderContent(topicSelected) {
        return <div>
                <h2>Atomic types</h2>

                <p>Atomic types are technical types which can hold a single 'atomic' value: text, number, date and so forth.<br/>
                    All atomic types are defined by Prompto, there is no way to define custom atomic types in Prompto.<br/>
                </p>
                <p>Prompto defines the following atomic types:</p>
                <ul>
                    <li>Text</li>
                    <li>Integer</li>
                    <li>Decimal</li>
                    <li>Boolean</li>
                    <li>Date</li>
                    <li>Time</li>
                    <li>DateTime</li>
                    <li>Period</li>
                    <li>UUID</li>
                    <li>Blob</li>
                    <li>Image</li>
                </ul>
            </div>;
    }

}

export default new ThisTopic();