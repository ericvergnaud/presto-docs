import React from 'react'
import Console from './Console.js'
import PROMPTO_WORKER from '../prompto-player/PromptoWorkerListener';

export default class Repl extends React.Component {

  constructor(props) {
    super(props) ;
    this.state = {
      historyToDisplay: this.props.historyToDisplay || [],
      promptHistory: [],
      historyIndex: 0,
      currentPrompt: {
        indentLevel: 0,
        linesBefore: [],
        beforeCursor: '',
        afterCursor: ''
      },
      style:{},
      dialect: "M"
    };
    // Bind Methods
    this.handleToggleHistory = this.handleToggleHistory.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearHistory = this.clearHistory.bind(this);
    this.moveCursor = this.moveCursor.bind(this);
    this.tryDedent = this.tryDedent.bind(this);
    this.setUpStyles = this.setUpStyles.bind(this);
  }

  componentDidMount() {
    this.setUpStyles()
  }

  setUpStyles() {
    let newStyle = {};
    if(this.props.height) {
      newStyle.height = this.props.height;
    }
    if(this.props.width) {
      newStyle.width = this.props.width;
    }
    if(this.props.textColor) {
      newStyle.textColor = this.props.textColor;
    }
    if(this.props.backgroundColor) {
      newStyle.backgroundColor = this.props.backgroundColor;
    }
    if(this.props.fontSize) {
      newStyle.props.fontSize = this.props.fontSize;
    }
    if(Object.keys(newStyle).length) {
      this.setState({ style: newStyle });
    }

  }


  evaluateInput(prompt) {
    if(this.collectMultiLine(prompt))
      return;
    if(prompt.length > 0) {
      if(this.evaluateInstruction(prompt))
        return;
      else
        this.interpretInput(prompt, true);
    } else
      this.pushHistory(null, [{type: 'input', data: ""}]);
  }


  evaluateInstruction(prompt) {
    const promptItem = { type: 'input', data: prompt };
    switch (prompt.trim().toLowerCase()) {
      case "help":
      case "?":
        this.printHelp(promptItem);
        break;
      case "clear":
        this.clear();
        break;
      case "reset":
        this.reset(promptItem);
        break;
      default:
        if(prompt.startsWith("dialect"))
          this.dialect(prompt, promptItem);
        else
          return false;
    }
    return true;
  }


  collectMultiLine(prompt) {
    const methodName = "collectMultiLine" + this.state.dialect;
    return this[methodName](prompt);
  }


  collectMultiLineM(promptValue) {
    const prompt = this.state.currentPrompt;
    if(promptValue.trim().endsWith(":")) {
      const value = "\t".repeat(prompt.indentLevel) + promptValue;
      prompt.linesBefore.push(value);
      prompt.indentLevel += 1;
      this.setState({currentPrompt: prompt }, () => this.pushHistory(null, { type: "input", data: promptValue, indentLevel: prompt.indentLevel - 1}));
      return true;
    } else if(prompt.indentLevel > 0) {
      const value = "\t".repeat(prompt.indentLevel) + promptValue;
      prompt.linesBefore.push(value);
      this.pushHistory(null, { type: "input", data: promptValue, indentLevel: prompt.indentLevel});
      return true;
    } else if(promptValue.length === 0 && prompt.linesBefore.length > 0) {
      const input = prompt.linesBefore.join("\n");
      prompt.linesBefore = [];
      this.setState({currentPrompt: prompt }, () => this.interpretInput(input, false));
    } else
      return false;
  }


  collectMultiLineE(prompt, callback) {
  }


  collectMultiLineO(prompt, callback) {
  }


  interpretInput(promptValue, isInput) {
    const promptItem = isInput ? { type: 'input', data: promptValue } : null;
    PROMPTO_WORKER.repl(promptValue, this.state.dialect, (out, err) => {
      if (out)
        this.pushHistory(promptItem, [{ type: 'response', data: out }]);
      else if(err)
        this.pushHistory(promptItem, [{ type: 'error', data: err }]);
    });
  }


  printHelp(promptItem) {
    const data = [ "help: print this",
                  "clear: clear screen",
                  "reset: clear data",
                  "dialect: switch to dialect E, M or O",
                  "( currently using dialect: " + this.state.dialect + " )"
                ].map(s => { return { type: 'welcome', data: s }; });
    this.pushHistory(promptItem, data);
  }

  clear() {
    const prompt = { beforeCursor: '', afterCursor: '', indentLevel: 0, linesBefore: [] };
    this.setState({historyToDisplay: [], currentPrompt: prompt})
  }

  reset(promptItem) {
    PROMPTO_WORKER.resetRepl(()=>this.pushHistory(promptItem, [{ type: 'welcome', data: "All data has been deleted" }]));
  }

  dialect(prompt, promptItem) {
    const dialect = prompt.substring(prompt.length-1).toUpperCase();
    if(new Set(["E", "O", "M"]).has(dialect))
      this.setState({ dialect: dialect}, () => this.pushHistory(promptItem, [{ type: 'welcome', data: "Using dialect: " +  dialect}]));
    else
      this.pushHistory(promptItem, [{ type: 'error', data: "No such dialect: " +  dialect}])
  }

  handleSubmit() {
    let textArea = document.getElementById('replTextArea');
    textArea.value = '';
    const prompt = this.state.currentPrompt;
    const promptValue = prompt.beforeCursor + prompt.afterCursor;
    prompt.beforeCursor = "";
    prompt.afterCursor = "";
    this.setState({ currentPrompt: prompt }, () => this.evaluateInput(promptValue));
  }

  pushHistory(promptItem, responseItems) {
    responseItems = (promptItem ? [promptItem] : []).concat(responseItems || []);
    const newHistory = this.state.historyToDisplay.concat(responseItems);
    const newPromptHistory = this.state.promptHistory.concat(promptItem || []);
    this.setState({
      historyToDisplay: newHistory,
      historyIndex: newPromptHistory.length,
      promptHistory: newPromptHistory
    }, this.showPrompt);
  }

  showPrompt() {
    const cursor = document.getElementById("cursor");
    cursor.scrollIntoView();
  }


  handleToggleHistory(str) {
    let len = this.state.promptHistory.length;
    // Do not take action if promptHistory is empty
    if(!len)
      return;
    let num = this.state.historyIndex;
    if(str === 'UP') {
      if(num < 1)
        num = 0;
      else
        num -= 1;
    } 
    else if(str === 'DOWN') {
      if(num >= len - 1)
        num = len - 1;
      else
        num += 1;
    }
    // Set textarea hidden text to new prompt data
    let textArea = document.getElementById('replTextArea');
    textArea.value = this.state.promptHistory[num].data;
    textArea.selectionStart = textArea.value.length;
    // Set new state with new prompt from history
    const prompt = { ...this.state.currentPrompt, beforeCursor: this.state.promptHistory[num].data, afterCursor: ''};
    this.setState({ historyIndex: num, currentPrompt: prompt });
  }

  /* Needed because window listener is run before prompt calls handleInput resulting in cursor
     being off by one */
  moveCursor(direction) {
    let textArea = document.getElementById('replTextArea'), idx = textArea.selectionStart;
    if(direction === 'RIGHT') {
      idx = idx > textArea.value.length ? idx : idx + 1
    }
    else if(direction === 'LEFT') {
      idx = idx < 1 ? 0 : idx - 1 
    }
    this.handleInput(idx)
  }

  handleInput(idx) {
    // Get current hidden string in text area
    const textArea = document.getElementById('replTextArea'), content = textArea.value;
    // onChange passes the this context as 1st arg. Need to ensure idx is a num and not obj
    const cursorIdx = Number.isInteger(idx) ? idx : textArea.selectionStart;
    // Represent strings for before and after the cursor
    const leftStr = content.substring(0, cursorIdx), rightStr = content.substring(cursorIdx, content.length);
    const newPrompt = { ...this.state.currentPrompt, beforeCursor: leftStr, afterCursor: rightStr };
    // Set new state to represent change in textarea
    this.setState({currentPrompt: newPrompt});
  }

  tryDedent() {
    const prompt = this.state.currentPrompt;
    if(prompt.indentLevel > 0) {
      // Get current hidden string in text area
      const textArea = document.getElementById('replTextArea');
      if(textArea.selectionStart === 0 && textArea.selectionEnd === 0) {
        prompt.indentLevel -= 1;
        this.setState({currentPrompt: prompt});
      }
    }
  }

  clearHistory() {
    this.setState({historyToDisplay: []});
  }

  render() {
    return <Console 
              currentPrompt={this.state.currentPrompt}
              handleInput={this.handleInput} 
              handleSubmit={this.handleSubmit}
              style={this.state.style}
              historyToDisplay={this.state.historyToDisplay}
              handleToggleHistory={this.handleToggleHistory} 
              moveCursor={this.moveCursor}
              tryDedent={this.tryDedent}
           />;
  }
}
