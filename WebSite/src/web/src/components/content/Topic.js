import React from 'react';
import asap from 'asap';
import TopicItem from "./TopicItem";

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
        return <TopicItem ref={ref=>this.widget=ref || this.widget} key={this.title} topic={this} activeTopic={activeTopic} level={level} topicSelected={topicSelected}/>;
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