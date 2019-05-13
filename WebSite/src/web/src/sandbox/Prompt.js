import React from 'react'

class Cursor extends React.Component {

    constructor(props) {
        super(props);
        this.state = { cursor: true };
    }

    componentDidMount() {
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
        const color = this.state.cursor ? "white" : "black";
        return <span className="cursor" id="cursor" style={{backgroundColor: color}}/>;
    }

}


export default class Prompt extends React.Component {

    render() {
        const prompt = this.props.currentPrompt;
        return  <div className="prompt">
                    <div className="promptLine">
                        <span className="promptIcon"> > </span>
                        { this.renderIndents(prompt) }
                        <span className="userInput">{prompt.beforeCursor}</span>
                        <Cursor />
                        <span className="userInput">{prompt.afterCursor}</span>
                        <textarea className="inputArea" id="replTextArea" onChange={this.props.handleInput}
                                  autoComplete="off" autoCorrect="off"
                                  autoCapitalize="off" spellCheck="false" autoFocus/>
                    </div>
                </div>;
    }

    renderIndents(prompt) {
        if(prompt.indentLevel) {
            const keys = Array(prompt.indentLevel).fill(0).map((val, idx) => idx);
            return keys.map(val => <span key={val} className="promptIndent">&nbsp;</span>);
        }
    }
}