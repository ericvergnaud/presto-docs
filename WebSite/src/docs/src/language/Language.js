import React from 'react';
import Sidebar from "./Sidebar";
import Content from "./Content";
import OverviewTopic from "./topics/Overview";

export default class Language extends React.Component {

    constructor(props) {
        super(props);
        this.state = { topic: OverviewTopic };
    }

    render() {
        const style = { display: this.props.visible ? "block" : "none" };
        return <div style={style}>
                <div style={{width: "190px", float: "left", marginRight: "10px"}}>
                    <Sidebar topicSelected={topic=>this.setState({topic: topic})}/>
                </div>
                <div style={{width: "calc(100% - 200px)", float: "left"}}>
                    <Content topic={this.state.topic}/>
                </div>
            </div>;

    }

}