import '../../assets/css/playground.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Repl from "./Repl";

const INITIAL_HISTORY = [
    "Welcome to Prompto",
    "Using dialect: M",
    "Type ? for help"
].map(s => {
    return {type: "welcome", data: s};
});

export default class Playground extends React.Component {

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
        const divStyle = {display: this.props.visible ? "block" : "none"};
        return <div className="playground" style={divStyle}>
            <Repl ref="repl" historyToDisplay={INITIAL_HISTORY}/>
        </div>;
    }
}

