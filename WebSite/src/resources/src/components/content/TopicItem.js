import React from "react";
import TopicList from "./TopicList";

export default class TopicItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { collapsed: true };
    }

    onSelect() {
        const children = this.props.topic.children;
        if(children)
            this.setState({ collapsed: !this.state.collapsed });
        this.props.topicSelected(this.props.topic);
    }

    render() {
        const active = this.props.topic===this.props.activeTopic;
        return <>
            <li className={active ? "uk-active" : ""}>
                <button className="uk-button uk-button-link" onClick={this.onSelect.bind(this)}>{this.props.topic.title}</button>
            </li>
            { this.renderChildren()}
        </>;
    }

    renderChildren() {
        const children = this.props.topic.children;
        if(children && !this.state.collapsed)
            return <TopicList topics={children} activeTopic={this.props.activeTopic} level={this.props.level + 1} topicSelected={this.props.topicSelected}/>
    }

}

