import React from 'react';
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Css");
    }

    renderContent(topicSelected) {
        return <>
            <h2>Css</h2>

            <p>CSS stands for <b>C</b>ascading <b>S</b>tyle <b>S</b>heet.
                CSS is a Web standard defined <a target="_blank" rel="noopener noreferrer" href="https://www.w3.org/Style/CSS/Overview.en.html">here</a>.
                The <code>Css</code> type is a technical type used for CSS expressions.<br/>
                A CSS literal is a sequence of 1 or more CSS entries, separated by semi-colons.<br/>
                A CSS entry comprises exactly:</p>
                    <ul>
                        <li>a <i>property</i> (which must be a valid CSS property)</li>
                        <li>the <code>:</code> separator</li>
                        <li>a <i>value</i>, which can be either of:
                            <ul>
                                <li>a <i>literal</i> (which must be a valid CSS value for the property)</li>
                                <li>a Prompto expression enclosed in curly braces (which must provide a valid CSS value for the property)</li>
                            </ul>
                        </li>
                        <li>the <code>;</code> terminator</li>
                    </ul>
               <p> A Css literal must be enclosed in curly brackets.</p>
            <pre>{String.raw`{ width: 80px; display: none; } -> a simple CSS literal
{ display: { `}<i>some_value</i> }; } -> a CSS literal, where the <i>value</i> for the <i>display</i> property is determined at runtime</pre>

            </>;
    }

}

export default new ThisTopic();