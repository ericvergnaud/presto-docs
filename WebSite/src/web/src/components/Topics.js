import React from "react";
import {Nav} from "react-bootstrap";

export default class Topics extends React.Component {

    render() {
        return <Nav className="topic level-1" >
            { this.props.topics.map(t=>t.renderItem(this.props.topicSelected, 1), this) }
        </Nav>
    }
}