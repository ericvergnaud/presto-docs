import React from 'react';
import { NavItem, NavLink } from "react-bootstrap";
import PromptoPlayer from "../../../player/PromptoPlayer";
import Topic from "../../../content/Topic";
import TopicItem from "../../../content/TopicItem";

class CallThenTopicItem extends TopicItem {

    render() {
        const active = this.props.topic===this.props.activeTopic;
        return <>
            <NavItem>
                <NavLink active={active} eventKey={this.props.topic.title} onSelect={this.onSelect.bind(this)}><i>Call</i> then</NavLink>
            </NavItem>
            { this.renderChildren()}
        </>;
    }

}


class ThisTopic extends Topic {

    constructor() {
        super("Call then");
    }

    renderItem(topicSelected, activeTopic, level) {
        return <CallThenTopicItem ref={ref=>this.widget=ref || this.widget} key={this.title} topic={this} activeTopic={activeTopic} level={level} topicSelected={topicSelected}/>;
    }

    renderContent(topicSelected) {
        return <>
            <h2><i>Call</i> then statement</h2>

            <p>A <i>Call</i> then statement is a way to execute a method on the server, return immediately, and run continuing statements locally later, once the method has finished executing on the server.<br/>
                In its simplest form, a <i>Call</i> then statement has the form<br/>
                <code><i>method</i> then <i>continuation</i></code><br/>
                where <i>method</i> is a method call as described in the Methods section,
                and <i>continuation</i> is a list of statements which are to be executed only after the method has finished executing on the server.</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={10} sampleUrl="samples/statements/call-then-void.pec"/>
                <br/>
            <p>For methods that return a value, and if the value is needed by the continuation, a <i>Call</i> then statement has the form<br/>
                <code><i>method</i> then with <i>value continuation</i></code><br/>
                where <i>value</i> is the name you want to give to the local variable holding the result.</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={10} sampleUrl="samples/statements/call-then-value.pec"/>
            <br/>



            <h3><i>Async</i> programming</h3>
             <p>The <i>Call</i> then technique is called <i>async</i> programming. It is useful when running code in a browser, to provide the best user experience by avoiding a non-responsive UI.<br/>
                 Without it, the browser would be blocked until the method has completed (which could take seconds or minutes).<br/>
                 You should <i>never</i> make assumptions on the execution sequence of async statements.
                 Notably, if you call multiple async statements, you should not expect that their respective continuations will be executed in the same sequence.<br/>
                As of writing, Prompto executes async statements only when running in the browser. In other environments, it waits for completion.</p>
             </>;
    }

}

export default new ThisTopic();