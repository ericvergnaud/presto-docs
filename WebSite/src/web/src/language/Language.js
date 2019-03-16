import React from 'react';
import Topics from "./Topics";
import OverviewTopic from "./topics/Overview";

export default class Language extends React.Component {

    constructor(props) {
        super(props);
        this.state = { topic: OverviewTopic };
        this.topicSelected = this.topicSelected.bind(this);
    }

    topicSelected(topic) {
        this.setState({topic: topic});
    }

    render() {
        const style = { display: this.props.visible ? "block" : "none" };
        return <div className="language" style={style}>
                <div className="sidebar">
                    <Topics topicSelected={this.topicSelected}/>
                </div>
                <div className="content">
                    { this.state.topic.renderContent(this.topicSelected) }
                </div>
            </div>;

    }

}