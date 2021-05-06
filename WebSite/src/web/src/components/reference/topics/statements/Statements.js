import React from 'react';
import Assignment from "./Assignment";
import IfElse from "./IfElse";
import Switch from "./Switch";
import ForEach from "./ForEach";
import While from "./While";
import DoWhile from "./DoWhile";
import Return from "./Return";
import Write from "./Write";
import Store from "./Store";
import StoreThen from "./StoreThen";
import FetchThen from "./FetchThen";
import Flush from "./Flush";
import CallThen from "./CallThen";
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Statements", [ Assignment, IfElse, Switch, ForEach, While, DoWhile, Return, CallThen, Write, Store, StoreThen, FetchThen, Flush ] );
    }

    renderContent(topicSelected) {
        return <>
            <h2>Statements</h2>

            <p>So far, we've only covered <i>definitions</i> which can be used by a Prompto program.</p>
            <p>Definitions are necessary, but they to not themselves perform anything.</p>
            <p>Statements are the actual instructions executed by a Prompto program, and which form its logic and value.</p>

            </>;
    }

}

export default new ThisTopic();