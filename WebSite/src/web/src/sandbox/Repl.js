import React from 'react'
import Console from './Console'
import LineHandler from './LineHandler';
import DisplayHistory from "./DisplayHistory";
import PromptHistory from "./PromptHistory";
import PromptData from "./PromptData";

export default class Repl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayHistory: new DisplayHistory(this.props.historyToDisplay),
            promptHistory: new PromptHistory(),
            promptData: new PromptData(),
            style: {}
        };
        this.lineHandler = LineHandler.forDialect("M");
        this.visibilityChanged = this.visibilityChanged.bind(this);
        this.dispatchKeyDown = this.dispatchKeyDown.bind(this); // can't bind the handler inline without breaking the event flow
    }

    componentDidMount() {
        this.setUpStyles();
    }

    visibilityChanged(visible) {
        if(visible) {
            this.listener = e => this.dispatchKeyDown(e); // can't bind the handler inline without breaking the event flow
            window.addEventListener('keydown', this.listener);
            this.requestFocus();
        } else if(this.listener) {
            window.removeEventListener('keydown', this.listener);
            delete this.listener;
        }
    }

    requestFocus() {
        const textArea = document.getElementById('replTextArea');
        if(textArea)
            textArea.focus();
    }

    setUpStyles() {
        let newStyle = {};
        if (this.props.height) {
            newStyle.height = this.props.height;
        }
        if (this.props.width) {
            newStyle.width = this.props.width;
        }
        if (this.props.textColor) {
            newStyle.textColor = this.props.textColor;
        }
        if (this.props.backgroundColor) {
            newStyle.backgroundColor = this.props.backgroundColor;
        }
        if (this.props.fontSize) {
            newStyle.props.fontSize = this.props.fontSize;
        }
        if (Object.keys(newStyle).length) {
            this.setState({style: newStyle});
        }

    }

    dispatchKeyDown(e) {
        switch (e.key) {
            case "ArrowUp":
                e.preventDefault();
                return this.handleToggleHistory('UP');
            case "ArrowDown":
                e.preventDefault();
                return this.handleToggleHistory('DOWN');
            case "ArrowLeft":
                return this.moveCursor('LEFT');
            case "ArrowRight":
                return this.moveCursor('RIGHT');
            case "Backspace":
                return this.tryDedent();
            case "Tab":
                e.preventDefault();
                if (e.shiftKey)
                    return this.dedent();
                else
                    return this.indent();
            case "Enter":
                e.preventDefault();
                return this.handleSubmit();
            default:
                return;
        }
    }


    handleSubmit() {
        const textArea = document.getElementById('replTextArea');
        textArea.value = '';
        const promptValue = this.state.promptData.getValue();
        this.state.promptData.clearLine();
        this.lineHandler = this.lineHandler.evaluate(promptValue, this.state.promptData, this.state.promptHistory, this.state.displayHistory,
            () => this.setState(this.state, this.showPrompt.bind(this))
        );
    }

    showPrompt() {
        const cursor = document.getElementById("cursor");
        cursor.scrollIntoView();
    }


    handleToggleHistory(str) {
        const item = this.state.promptHistory.toggle(str);
        if (!item)
            return;
        const value = item.data;
        this.state.promptData.setValue(value);
        this.setState(this.state, () => {
            const textArea = document.getElementById('replTextArea');
            textArea.value = value;
        });
    }

    /* Needed because window listener is run before prompt calls handleInput resulting in cursor
       being off by one */
    moveCursor(direction) {
        let textArea = document.getElementById('replTextArea'), idx = textArea.selectionStart;
        if (direction === 'RIGHT') {
            idx = idx > textArea.value.length ? idx : idx + 1
        } else if (direction === 'LEFT') {
            idx = idx < 1 ? 0 : idx - 1
        }
        this.handleInput(idx)
    }

    handleInput(idx) {
        const textArea = document.getElementById('replTextArea');
        const content = textArea.value;
        const cursorIdx = Number.isInteger(idx) ? idx : textArea.selectionStart;
        this.state.promptData.handleInput(content, cursorIdx);
        this.setState({promptData: this.state.promptData});
    }

    tryDedent() {
        const promptData = this.state.promptData;
        if (promptData.indentLevel > 0) {
            const textArea = document.getElementById('replTextArea');
            if (textArea.selectionStart === 0 && textArea.selectionEnd === 0) {
                promptData.dedent();
                this.setState({promptData: promptData});
            }
        }
    }

    dedent() {
        const promptData = this.state.promptData;
        if (promptData.indentLevel > 0) {
            promptData.dedent();
            this.setState({promptData: promptData});
        }
    }

    indent() {
        const promptData = this.state.promptData;
        const textArea = document.getElementById('replTextArea');
        if (textArea.selectionStart === 0 && textArea.selectionEnd === 0) {
            promptData.indent();
            this.setState({promptData: promptData});
        }
    }

    clearHistory() {
        this.setState({historyToDisplay: []});
    }

    render() {
        return <Console
            currentPrompt={this.state.promptData}
            handleInput={this.handleInput.bind(this)}
            handleSubmit={this.handleSubmit.bind(this)}
            style={this.state.style}
            historyToDisplay={this.state.displayHistory}
            onClick={this.requestFocus}
        />;
    }
}
