import React from 'react';
import Topic from "../../../components/Topic";
import Precedence from "./Precedence";
import Parenthesis from "./Parenthesis";
import Nothing from "./Nothing";
import This from "./This";
import Equality from "./Equality";
import Comparison from "./Comparison";
import Minus from "./Minus";
import Add from "./Add";
import Subtract from "./Subtract";
import Multiply from "./Multiply";
import Divide from "./Divide";
import Logical from "./Logical";
import Ternary from "./Ternary";
import Item from "./Item";
import Slice from "./Slice";
import Filter from "./Filter";
import Sort from "./Sort";
import Contain from "./Contain";
import Type from "./Type";
import Member from "./Member";
import Method from "./Method";
import Code from "./Code";
import Read from "./Read";
import Fetch from "./Fetch";

class ThisTopic extends Topic {

    constructor() {
        super("Expressions", [ Precedence, Parenthesis, Nothing, This, Equality, Comparison, Minus, Add, Subtract,
                Multiply, Divide, Logical, Ternary, Item, Slice, Filter, Sort, Contain, Type, Member,
                Method, Code, Read, Fetch ]);
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>Expressions</h2>

            <p>Expressions are program fragments which produce values.<br/>
                Expressions are used to fetch values, transform them or combine them.<br/>
                The value produced by an expression can then be used as argument for other expressions and statements.</p>
            </React.Fragment>;
    }

}

export default new ThisTopic();