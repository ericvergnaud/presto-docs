import React from "react";

export default class TopicList extends React.Component {

    topicSelected(key) {
        const topic = this.props.topics.find(t => key===t.title);
        if(topic)
            this.props.topicSelected(topic);
    }

    render() {
        return <ul className={"uk-nav topic level-" + this.props.level} >
            { this.props.topics.map(t => t.renderItem(this.props.topicSelected, this.props.activeTopic, this.props.level), this) }
        </ul>
    }
}