import React from 'react';
import { Nav } from 'react-bootstrap';
import Dialects from "./topics/Dialects";
import Overview from "./topics/Overview";
import Keywords from "./topics/Keywords";
import Identifiers from "./topics/Identifiers";
import Types from "./topics/Types";
import Mutability from "./topics/Mutability";
import Methods from "./topics/methods/Methods";
import Statements from "./topics/statements/Statements";
import Comments from "./topics/Comments";
import Annotations from "./topics/Annotations";
import Expressions from "./topics/expressions/Expressions";
import Categories from "./topics/categories/Categories";
import Singletons from "./topics/Singletons";
import Enumerations from "./topics/Enumerations";
import Errors from "./topics/errors/Errors";
import Testing from "./topics/Testing";
import Resources from "./topics/Resources";
import Bindings from "./topics/bindings/Bindings";
import Workers from "./topics/Workers";

const TOPICS = [ Overview, Dialects, Keywords, Comments, Annotations, Identifiers, Types, Mutability, Testing,
                    Methods, Statements, Expressions, Errors, Categories, Singletons, Enumerations, Resources, Workers, Bindings ];

export default class Topics extends React.Component {

    render() {
        return <Nav className="topic level-1" >
                { TOPICS.map(t=>t.renderItem(this.props.topicSelected, 1), this) }
            </Nav>
    }
}