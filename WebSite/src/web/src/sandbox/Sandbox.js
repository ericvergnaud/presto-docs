import React from 'react';
import Repl from "./Repl";
import './Repl.css';

export default class Sandbox extends React.Component {

    render() {
        const historyToDisplay = [
            "Welcome to Prompto",
            "Using dialect: M",
            "Type ? for help"
        ].map(s => {
            return {type: "welcome", data: s};
        });
        const divStyle = {display: this.props.visible ? "block" : "none"};
        return <div className="sandbox" style={divStyle}>
            <Repl historyToDisplay={historyToDisplay}/>
        </div>;
    }
}