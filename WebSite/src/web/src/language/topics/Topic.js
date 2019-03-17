import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

export default class Topic {

    constructor(title, children) {
        this.title = title;
        this.children = children || null;
    }

    renderItem(topicSelected, level) {
        return <React.Fragment key={this.title}>
            <NavItem onClick={()=>topicSelected(this)}>{this.title}</NavItem>
            { this.renderChildren(topicSelected, level + 1)}
            </React.Fragment>;
    }

    renderChildren(topicSelected, level) {
        if(this.children)
            return <Nav className={"topic level-" + level}>
                    { this.children.map(t=>t.renderItem(topicSelected, level), this) }
            </Nav>;
    }

}