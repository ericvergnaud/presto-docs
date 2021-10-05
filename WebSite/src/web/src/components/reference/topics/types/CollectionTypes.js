import React from 'react';
import ListType from "./ListType";
import SetType from "./SetType";
import RangeType from "./RangeType";
import DictionaryType from "./DictionaryType";
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Collection types", [ ListType, SetType, RangeType, DictionaryType ]);
    }

    renderContent(topicSelected) {
        return <>
            <h2>Collection types</h2>

            <p>Collection types are technical data types which can hold multiple values, typically of the same value type.<br/>
                Amongst these, only List and Set can be stored.
            </p>

            <p>Prompto defines the following collection types:</p>
            <ul>
                <li>List</li>
                <li>Set</li>
                <li>Range</li>
                <li>Dictionary</li>
            </ul>
            <br/>
            </>;
    }

}

export default new ThisTopic();