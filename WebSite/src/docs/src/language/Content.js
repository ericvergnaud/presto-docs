import React from 'react';

export default class Content extends React.Component {

    render() {
        return this.props.topic.renderContent(this.props.topicSelected);
    }

}