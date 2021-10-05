import React from 'react';
import AnyType from "./AnyType";
import MethodType from "./MethodType";
import TypeType from "./TypeType";
import IteratorType from "./IteratorType";
import CursorType from "./CursorType";
import CodeType from "./CodeType";
import WorkerType from "./WorkerType";
import VoidType from "./VoidType";
import Topic from "../../../content/Topic";
import CssType from "./CssType";
import HtmlType from "./HtmlType";

class ThisTopic extends Topic {

    constructor() {
        super("Special types", [ AnyType, VoidType, CssType, HtmlType, IteratorType, CursorType, TypeType, MethodType, CodeType, WorkerType ]);
    }

    renderContent(topicSelected) {
        return <>
            <h2>Special types</h2>
            <p>Special types are technical types which do not hold domain information and only live during program execution.</p>

            <p>Prompto defines the following special types:</p>
            <ul>
                <li>Any</li>
                <li>Void</li>
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