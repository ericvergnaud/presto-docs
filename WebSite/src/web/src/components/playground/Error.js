import React from 'react'

export default class Error extends React.Component {

    render() {
        return <div className="error">
            <span className="errorIcon"> => </span>
            <span className="errorData">{this.props.error.data}</span>
        </div>;
    }

}