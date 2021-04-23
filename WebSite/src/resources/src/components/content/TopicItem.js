import React from "react";
import {NavItem, NavLink} from "react-bootstrap";
import TopicList from "./TopicList";

export default class TopicItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { collapsed: true };
    }

    onSelect(key) {
        const children = this.props.topic.children;
        if(children)
            this.setState({ collapsed: !this.state.collapsed });
    }

    render() {
        const active = this.props.topic===this.props.activeTopic;
        return <>
            <NavItem>
                <NavLink active={active} eventKey={this.props.topic.title} onSelect={this.onSelect.bind(this)}>{this.props.topic.title}</NavLink>
            </NavItem>
            { this.renderChildren()}
        </>;
    }

    renderChildren() {
        const children = this.props.topic.children;
        if(children && !this.state.collapsed)
            return <TopicList topics={children} activeTopic={this.props.activeTopic} level={this.props.level + 1} topicSelected={this.props.topicSelected}/>
    }

}

