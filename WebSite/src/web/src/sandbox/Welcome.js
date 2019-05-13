import React from 'react'

export default class Welcome extends React.Component {

    render() {
        return (
            <div className="welcome">
                <span className="welcomeData">{this.props.welcome.data}</span>
            </div>
        )
    }
}