import React from 'react';
import Overview from "./topics/Overview";
import Topics from "../components/Topics";
import Console from "./topics/console/Console";

const TOPICS = [ Overview, Console ];

export default class Libraries extends React.Component {

    constructor(props) {
        super(props);
        this.state = { topic: Overview };
    }

    render() {
        const style = { display: this.props.visible ? "block" : "none" };
        return <div className="topics" style={style}>
                <div className="sidebar">
                    <Topics topics={TOPICS} topicSelected={topic => this.setState({topic: topic})}/>
                </div>
                <div className="content">
                    { this.state.topic.renderContent(this.topicSelected) }
                </div>
            </div>;

    }

}