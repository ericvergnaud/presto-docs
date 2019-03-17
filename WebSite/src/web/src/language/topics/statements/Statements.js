import React from 'react';
import Topic from "../Topic";
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

class ThisTopic extends Topic {

    constructor() {
        super("Statements", [ Assignment, IfElse, Switch, ForEach, While, DoWhile, Return, CallThen, Write, Store, StoreThen, FetchThen, Flush ] );
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>Statements</h2>

            <p>So far, we've only covered <i>definitions</i> which can be used by a Prompto program.</p>
            <p>Definitions are necessary, but they to not themselves perform anything.</p>
            <p>Statements are the actual instructions executed by a Prompto program, and which form its logic and value.</p>

            </React.Fragment>;
    }

}

export default new ThisTopic();