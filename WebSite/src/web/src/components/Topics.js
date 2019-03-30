import React from "react";
import {Nav} from "react-bootstrap";

export default class Topics extends React.Component {

    topicSelected(key) {
        const topic = this.props.topics.find(t => key===t.title);
        this.props.topicSelected(topic);
    }

    render() {
        return <Nav className={"topic level-" + this.props.level} activeKey={this.props.activeTopic.title} onSelect={this.topicSelected.bind(this)}>
            { this.props.topics.map(t=>t.renderItem(this.props.topicSelected, this.props.activeTopic, this.props.level), this) }
        </Nav>
    }
}