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
        beforeCursor: '',
        afterCursor: '',
        indentLevel: 0
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


  evaluateInput(prompt, callback) {
    switch (prompt.trim().toLowerCase()) {
      case "help":
      case "?":
        this.printHelp(callback);
        break;
      case "clear":
        this.clear(callback);
        break;
      case "reset":
        this.reset(callback);
        break;
      case "dialect e":
      case "dialect m":
      case "dialect o":
        this.dialect(prompt, callback);
        break;
      default:
        this.interpretInput(prompt, callback);
    }
  }

  interpretInput(prompt, callback) {
    PROMPTO_WORKER.repl(prompt, this.state.dialect, (out, err) => {
      if (out)
        callback({ type: 'response', data: out });
      else if(err)
        callback({ type: 'error', data: err });
    });
  }


  printHelp(callback) {
    const data = [ "help: print this",
                  "clear: clear screen",
                  "reset: clear data",
                  "dialect: switch to dialect E, M or O",
                  "( currently using dialect: " + this.state.dialect + " )"
                ].map(s => { return { type: 'welcome', data: s }; });
    callback(data);
  }

  clear(callback) {
    const prompt = { beforeCursor: '', afterCursor: '', indentLevel: 0 };
    this.setState({historyToDisplay: [], currentPrompt: prompt})
  }

  reset(callback) {
    PROMPTO_WORKER.resetRepl(()=>callback({ type: 'welcome', data: "All data has been deleted" }));
  }

  dialect(prompt, callback) {
    const dialect = prompt.substring(prompt.length-1).toUpperCase();
    this.setState({ dialect: dialect}, () => {
      callback({ type: 'welcome', data: "Using dialect: " +  dialect});
    });
  }

  handleSubmit() {
    // Reset Text Area
    let textArea = document.getElementById('replTextArea');
    textArea.value = '';
    // Get final Prompt
    let prompt = this.state.currentPrompt.beforeCursor + this.state.currentPrompt.afterCursor;
    if (!prompt.length) {
      let newHistory = this.state.historyToDisplay.concat([{type: 'prompt', data: ""}]);
      this.setState({
        historyToDisplay: newHistory
      }, this.showPrompt);
    } else {
      // Evaluate the Prompt
      this.evaluateInput(prompt, responseItem => {
        const promptItem = {
          type: 'prompt',
          data: prompt
        };
        const newHistory = responseItem ?
            (Array.isArray(responseItem) ?
            this.state.historyToDisplay.concat([promptItem]).concat(responseItem) :
            this.state.historyToDisplay.concat([promptItem, responseItem])) :
            this.state.historyToDisplay.concat([promptItem]);
        const newPromptHistory = this.state.promptHistory.concat(promptItem);
        this.setState({
          historyToDisplay: newHistory,
          historyIndex: newPromptHistory.length,
          promptHistory: newPromptHistory,
          currentPrompt: {
            beforeCursor: '',
            afterCursor: ''
          }
        }, this.showPrompt);
      });
    }
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
    this.setState({
      historyIndex: num, 
        currentPrompt: {
        beforeCursor: this.state.promptHistory[num].data, 
        afterCursor: ''
      }
    });
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
    let textArea = document.getElementById('replTextArea'), content = textArea.value;
    // onChange passes the this context as 1st arg. Need to ensure idx is a num and not obj
    let cursorIdx = Number.isInteger(idx) ? idx : textArea.selectionStart ;
    // Represent strings for before and after the cursor
    let leftStr = content.substring(0, cursorIdx), rightStr = content.substring(cursorIdx, content.length);
    let newState = Object.assign({}, this.state.currentPrompt, {beforeCursor: leftStr, afterCursor: rightStr});
    // Set new state to represent change in textarea
    this.setState({currentPrompt: newState})
  }


  clearHistory() {
    console.log('psst incognito');
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
           />;
  }
}
