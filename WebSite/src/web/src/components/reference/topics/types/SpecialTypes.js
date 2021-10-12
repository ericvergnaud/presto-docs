import React from 'react';
import AnyType from "./AnyType";
import MethodType from "./MethodType";
import TypeType from "./TypeType";
import IteratorType from "./IteratorType";
import CursorType from "./CursorType";
import CodeType from "./CodeType";
import VoidType from "./VoidType";
import Topic from "../../../content/Topic";
import CssType from "./CssType";
import HtmlType from "./HtmlType";
import DbIdType from "./DbIdType";
import WorkerType from "./WorkerType";

class ThisTopic extends Topic {

    constructor() {
        super("Special types", [ VoidType, DbIdType, AnyType, CssType, HtmlType, IteratorType, CursorType, TypeType, MethodType, CodeType, WorkerType ]);
    }

    renderContent(topicSelected) {
        return <>
            <h2>Special types</h2>
            <p>Special types are technical types which do not hold domain information and only live during program execution.</p>

            <p>Prompto defines the following special types:</p>
            <ul>
                <li>Void</li>
                <li>DbId</li>
                <li>Any</li>
                <li>Css</li>
                <li>Html</li>
                <li>Iterator</li>
                <li>Cursor</li>
                <li>Type</li>
                <li>Method</li>
                <li>Code</li>
                <li>Worker</li>
            </ul>

            </>;
    }

}

export default new ThisTopic();