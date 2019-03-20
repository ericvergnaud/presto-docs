import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

class TopicWidget extends React.Component {

    constructor(props) {
        super(props);
        this.state = { collapsed: true };
        this.clicked = this.clicked.bind(this);
    }

    clicked() {
        this.setState({ collapsed: !this.state.collapsed });
        this.props.topicSelected(this.props.topic);
    }

    render() {
        return <>
            <NavItem onClick={this.clicked}>{this.props.topic.title}</NavItem>
            { this.renderChildren()}
        </>;
    }

    renderChildren() {
        const children = this.props.topic.children;
        if(children) {
            const level = this.props.level + 1;
            return <Nav className={"topic level-" + level} >
                { !this.state.collapsed && children.map(t=>t.renderItem(this.props.topicSelected, level), this) }
            </Nav>;
        }
    }

}

export default class Topic {

    constructor(title, children) {
        this.title = title;
        this.children = children || null;
    }

    renderItem(topicSelected, level) {
        return <TopicWidget key={this.title} topic={this} level={level} topicSelected={topicSelected}/>;
   }


}