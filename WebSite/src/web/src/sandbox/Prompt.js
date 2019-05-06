import React from 'react'

export default class Prompt extends React.Component {

    constructor(props) {
        super(props);
        this.state = { cursor: true };
    }


    componentDidMount() {
        document.body.addEventListener('click', () => {
            let textArea = document.getElementById('replTextArea');
            textArea.focus();
        });
        this.startBlinking();
    }

    componentWillUnmount() {
        this.stopBlinking();
    }

    startBlinking() {
        this.stopBlinking();
        this.blinker = setInterval(()=>this.setState({ cursor: !this.state.cursor }), 450);
    }

    stopBlinking() {
        if(this.blinker)
            clearInterval(this.blinker);
        delete this.blinker;
    }

    render() {
        return (
            <div className="prompt">
                {this.props.isActive ? this.renderActive() : this.renderHistory()}
            </div>
        )
    }

    renderActive() {
        const color = this.state.cursor ? "white" : "black";
        return <div className="promptLine">
            <span className="promptIcon"> > </span>
            <span className="userInput">{this.props.currentPrompt.beforeCursor}</span>
            <span className="cursor" id="cursor" style={{backgroundColor: color}}/>
            <span className="userInput">{this.props.currentPrompt.afterCursor}</span>
            <textarea className="input" id="replTextArea" onChange={this.props.handleInput} autoComplete="off"
                      autoCorrect="off" autoCapitalize="off" spellCheck="false"/>
        </div>;
    }

    renderHistory() {
        return <div className="promptLine">
            <span className="promptIcon history"> > </span>
            <span className="userInput history">{this.props.prompt}</span>
        </div>;

    }

}