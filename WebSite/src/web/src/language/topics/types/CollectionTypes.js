import React from 'react';
import Topic from "../../../components/Topic";
import ListType from "./ListType";
import TupleType from "./TupleType";
import SetType from "./SetType";
import RangeType from "./RangeType";
import DictionaryType from "./DictionaryType";

class ThisTopic extends Topic {

    constructor() {
        super("Collection types", [ ListType, TupleType, SetType, RangeType, DictionaryType ]);
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>Collection types</h2>

            <p>Collection types are technical types which can hold multiple values, typically of the same value type.<br/></p>

            <p>Prompto defines the following collection types:</p>
            <ul>
                <li>List</li>
                <li>Tuple</li>
                <li>Set</li>
                <li>Range</li>
                <li>Dictionary</li>
            </ul>
            <br/>
            </React.Fragment>;
    }

}

export default new ThisTopic();