import React from 'react';
import Topic from "../../../components/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Precedence");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>Operators precedence</h2>

            <p>Composed mathematical expressions, such as <code>1 + 3 / 4 - 9</code> can be evaluated in many ways, depending on which operator: +, / or - is applied first.<br/>
                While humans can make decisions based on common sense, Prompto has a pre-defined set of rules to ensure the sequence is always the same.<br/>
                This is called <i>operator precedence</i>. In Prompto, the mathematical operator precedence is as follows:
                <ul>
                    <li><code>- <i>exp</i></code> -> minus</li>
                    <li><code>not <i>exp</i></code> -> logical not</li>
                    <li><code><i>exp</i> * <i>exp</i></code> -> multiply</li>
                    <li><code><i>exp</i> / <i>exp</i></code> -> divide</li>
                    <li><code><i>exp</i> % <i>exp</i></code> -> remainder</li>
                    <li><code><i>exp</i> \ <i>exp</i></code> -> integer divide</li>
                    <li><code><i>exp</i> + <i>exp</i></code> -> add</li>
                    <li><code><i>exp</i> - <i>exp</i></code> -> subtract</li>
                    <li><code><i>exp</i> &lt; <i>exp</i></code> -> less than</li>
                    <li><code><i>exp</i> &lt;= <i>exp</i></code> -> less than or equal</li>
                    <li><code><i>exp</i> &gt; <i>exp</i></code> -> greater than</li>
                    <li><code><i>exp</i> &gt;= <i>exp</i></code> -> greater than or equal</li>
                    <li><code><i>exp</i> = <i>exp</i></code> -> equal</li>
                    <li><code><i>exp</i> ~ <i>exp</i></code> -> roughly equal</li>
                    <li><code><i>exp</i> or <i>exp</i></code> -> logical or</li>
                    <li><code><i>exp</i> and <i>exp</i></code> -> logical and</li>
                </ul>
                This means that in the above expression <code>1 + 3 / 4 - 9</code>, the evaluation is performed in the following sequence:
                <code>3 / 4</code>, then <code>1 + 0.75</code> and finally <code>1.75 - 9</code>.
            </p>
            <p>Although Prompto precedence is similar to most programming languages, the above list can be hard to remember.<br/>
                Precedence can become even more complex with Prompto, because it uses a number of keywords as operators,
                such as <code>in</code>, <code>contains</code>, <code>as</code> and others.<br/>
                The recommended way to keep code unambiguous and avoid mistakes is to use a parenthesis expression.
            </p>
            </React.Fragment>;
    }

}

export default new ThisTopic();