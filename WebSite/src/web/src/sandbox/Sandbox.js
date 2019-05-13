import React from 'react';
import ReactDOM from 'react-dom';
import Repl from "./Repl";
import './Repl.css';

export default class Sandbox extends React.Component {

    componentDidMount() {
        this.observer = new MutationObserver(this.handleMutation.bind(this));
        this.observer.observe(ReactDOM.findDOMNode(this), { attributes: true, attributeFilter: ["style"] });
    }

    componentWillUnmount() {
        this.observer.disconnect();
    }

    handleMutation(mutations) {
        const mutation = mutations[0];
        const display = mutation.target.style.display;
        this.refs["repl"].visibilityChanged(display==="block");
    }

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
            <Repl ref="repl" historyToDisplay={historyToDisplay}/>
        </div>;
    }
}