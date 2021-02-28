import React from 'react';
import Topic from "../../../../components/Topic";
import PromptoPlayer from "../../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Operators");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Category operators</h2>

            <p>For categories which represent common values, it can be handy to provide operators that help write simple
                code.</p>
            <p>A category operator method is a category method with a special name, which otherwise behaves like any
                regular category method.</p>
            <p>Once the category operator method is defined, it can be used in expressions involving operators.</p>
            <p>In the below example, we define an 'Amount' category with a '+' operator method:</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={16} sampleUrl="samples/categories/methods/operator.pec" runnable={true}/>

            <h3>Supported operators</h3>
            <p>Prompto supports <i>binary</i> operators i.e. operators which take 2
                operands: <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>\</code> and <code>%</code>.
            </p>
            <p>By definition, these operators can only accept one parameter, and MUST return a value.</p>
            <p>The parameter type and return type can be of any type.</p>
            <p>Like any category methods, operator methods can be overloaded and overridden.</p>
            <p>
                Operators are powerful constructs that let you write concise code. However, it is tempting to overuse them, thus making your code unreadable.
                It is strongly recommended to define operators only for operations which naturally translate to common thinking.
            </p>
        </React.Fragment>;
    }

}

export default new ThisTopic();