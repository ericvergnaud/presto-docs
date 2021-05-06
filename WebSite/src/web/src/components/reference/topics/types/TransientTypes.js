import React from 'react';
import AnyType from "./AnyType";
import MethodType from "./MethodType";
import IteratorType from "./IteratorType";
import CursorType from "./CursorType";
import CodeType from "./CodeType";
import WorkerType from "./WorkerType";
import VoidType from "./VoidType";
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Transient types", [ AnyType, VoidType, IteratorType, CursorType, CodeType, MethodType, WorkerType ]);
    }

    renderContent(topicSelected) {
        return <>
            <h2>Transient types</h2>
            <p>Transient types are technical types which do not hold domain information and only live during program execution.</p>

            <p>Prompto defines the following transient types:</p>
            <ul>
                <li>Any</li>
                <li>Void</li>
                <li>Method</li>
                <li>Code</li>
                <li>Iterator</li>
                <li>Cursor</li>
                <li>Worker</li>
            </ul>

            </>;
    }

}

export default new ThisTopic();