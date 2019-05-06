import React from 'react';
import Repl from "./Repl";
import './Repl.css';

export default class Sandbox extends React.Component {

    render() {
        return <div className="sandbox">
            <Repl />
            </div>;
    }
}