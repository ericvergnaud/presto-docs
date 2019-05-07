import React from 'react';
import Repl from "./Repl";
import './Repl.css';

export default class Sandbox extends React.Component {

    render() {
        const divStyle = { display: this.props.visible ? "block" : "none" };
        return <div className="sandbox" style={divStyle}>
            <Repl />
            </div>;
    }
}