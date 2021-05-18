import React from 'react';
import Overview from "./topics/Overview";
import Dialects from "./topics/Dialects";
import Keywords from "./topics/Keywords";
import Comments from "./topics/Comments";
import Annotations from "./topics/Annotations";
import Identifiers from "./topics/Identifiers";
import Types from "./topics/types/Types";
import Mutability from "./topics/Mutability";
import Testing from "./topics/Testing";
import Methods from "./topics/methods/Methods";
import Statements from "./topics/statements/Statements";
import Expressions from "./topics/expressions/Expressions";
import Errors from "./topics/errors/Errors";
import Categories from "./topics/categories/Categories";
import Singletons from "./topics/Singletons";
import Enumerations from "./topics/Enumerations";
import Resources from "./topics/Resources";
import Widgets from "./topics/widgets/Widgets";
import Events from "./topics/events/Events";
import Workers from "./topics/Workers";
import Bindings from "./topics/bindings/Bindings";
import SearchEngine from "../search/SearchEngine";
import TopicList from "../content/TopicList";
import '../../assets/css/topics.scss';

const TOPICS = [ Overview, Dialects, Keywords, Comments, Annotations, Identifiers, Types, Mutability, Testing,
    Methods, Statements, Expressions, Errors, Categories, Singletons, Enumerations, Resources, Widgets, Events, Workers, Bindings ];

TOPICS.forEach(t=>SearchEngine.addTopic(t, "reference"));

export default class Language extends React.Component {

    constructor(props) {
        super(props);
        this.state = { activeTopic: Overview };
    }

    topicSelected(topic) {
        this.setState({activeTopic: topic}, ()=>topic.makeVisible(false));
    }

    render() {
        const style = { display: this.props.visible ? "block" : "none" };
        return <div className="topics" style={style}>
                <div className="sidebar">
                    <TopicList topics={TOPICS} activeTopic={this.state.activeTopic} level={1} topicSelected={this.topicSelected.bind(this)}/>
                </div>
                <div className="content">
                    { this.state.activeTopic.renderContent(this.topicSelected) }
                </div>
            </div>;

    }

}