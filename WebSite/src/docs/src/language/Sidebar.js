import React from 'react';
import { Nav } from 'react-bootstrap';
import Dialects from "./topics/Dialects";
import Overview from "./topics/Overview";
import Keywords from "./topics/Keywords";
import Identifiers from "./topics/Identifiers";
import Types from "./topics/Types";

const TOPICS = [ Overview, Dialects, Keywords, Identifiers, Types ];

export default class Sidebar extends React.Component {

    render() {
        return <Nav className="sidebar level-1" >
                { TOPICS.map(t=>t.renderItem(this.props.topicSelected, 1), this) }
            </Nav>
    }
}