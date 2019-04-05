import React from 'react';
import { NavItem } from 'react-bootstrap';
import Topics from "./Topics";
import asap from 'asap';

class TopicWidget extends React.Component {

    constructor(props) {
        super(props);
        this.state = { collapsed: true };
    }

    onSelect(key) {
        const children = this.props.topic.children;
        if(children)
            this.setState({ collapsed: !this.state.collapsed });
        this.props.onSelect(key); // onSelect prop injected by Nav
    }

    render() {
        const className = this.props.topic===this.props.activeTopic ? "active" : "";
        return <>
            <NavItem className={className} eventKey={this.props.topic.title} onSelect={this.onSelect.bind(this)}>{this.props.topic.title}</NavItem>
            { this.renderChildren()}
        </>;
    }

    renderChildren() {
        const children = this.props.topic.children;
        if(children && !this.state.collapsed)
            return <Topics topics={children} activeTopic={this.props.activeTopic} level={this.props.level + 1} topicSelected={this.props.topicSelected}/>
    }

}

export default class Topic {

    constructor(title, children) {
        this.title = title;
        this.parent = null;
        this.widget = null;
        this.children = children || null;
        if(children)
            children.forEach(c=>c.parent=this, this);
    }

    renderItem(topicSelected, activeTopic, level) {
        return <TopicWidget ref={ref=>this.widget=ref || this.widget} key={this.title} topic={this} activeTopic={activeTopic} level={level} topicSelected={topicSelected}/>;
    }

    makeVisible(forChild) {
        if(forChild) {
            if(this.widget)
                this.widget.setState({ collapsed: false });
            else
                asap(()=>this.makeVisible(forChild));
        }
        if(this.parent)
            this.parent.makeVisible(true);
    }


}