import React from 'react';
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Syntax");
    }

    renderContent(topicSelected) {
        const listStyle = { listStyle: "none" };
        return <>
            <h2>Error handling syntax</h2>

                <p>A try/fail block has the following structure:</p>
                <ul>
                    <li><code>switch on <i>error</i> doing:</code><br/>
                        &emsp;list of <i>protected</i> statements</li>
                    <li><code>when <i>type</i>:</code><br/>
                        &emsp;list of statements</li>
                    <li><code>when in [ <i>type1</i>, <i>type2</i>, ... ]:</code><br/>
                        &emsp;list of statements</li>
                    <li><code>otherwise</code> or <code>when any</code><br/>
                        &emsp;list of statements</li>
                    <li><code>always:</code><br/>
                        &emsp;list of statements</li>
                </ul>
                <p>where <code><i>error</i></code> is a variable name which will be populated with the error object,
                and can be used in the corresponding handler section.<br/>
                The block must comprise <u><i>at least one</i></u> <i>handler</i>, either a <code>when</code>,
                a <code>when in</code>, a <code>when any</code> or an <code>always</code> clause.<br/>
                There can be any number of <code>when</code> or <code>when in</code> clauses.<br/>
                If present, the <code>when any</code> or <code>otherwise</code> clause must come after all <code>when</code> and <code>when any</code> clauses,
                and before the <code>always</code> clause.<br/>
                If present, the <code>always</code> clause must be the last one.</p>
                <br/>

            <ul style={listStyle}>Examples of correct sequences:

                <li><pre>{String.raw`switch on error doing:
    <i>list of statements</i>
when in [NOT_MUTABLE, NOT_STORABLE]:
    <i>list of statements</i>`}</pre></li>

                <li><pre>{String.raw`switch on error doing:
    <i>list of statements</i>
always:
    <i>list of statements</i>`}</pre></li>

                <li><pre>{String.raw`switch on error doing:
    <i>list of statements</i>
when NULL_REFERENCE:
    <i>list of statements</i>
otherwise:
    <i>list of statements</i>`}</pre></li>

                <li><pre>{String.raw`switch on error doing:
    <i>list of statements</i>
when any:
    <i>list of statements</i>
always:
    <i>list of statements</i>`}</pre></li>
            </ul>
            <br/>
            <p>The execution is as follows:</p>
            <ul>
                <li>Prompto tries to execute the list of <i>protected</i> statements</li>
                <li>if an error occurs:
                    <ul>
                        <li>Prompto looks for the first <code>when</code> clause that accepts the error type
                            <ul>
                                <li>if such a clause exists, Prompto executes the correponding list of statements</li>
                                <li>otherwise if a <code>when any</code> clause exists, Prompto executes the correponding list of statements</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>whether or not an error occurs:
                    <ul><li>if there is an <code>always</code> clause, Prompto executes the correponding list of statements</li></ul>
                </li>
            </ul>

            </>;
    }

}

export default new ThisTopic();