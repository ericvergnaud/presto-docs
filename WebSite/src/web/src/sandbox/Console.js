import React from 'react'
import Prompt from "./Prompt";
import Response from "./Response";
import Welcome from "./Welcome";
import Error from "./Error";
import Input from "./Input";

export default class Console extends React.Component {

  constructor(props) {
    super(props) ;
    this.addStyling = this.addStyling.bind(this);
    this.addListeners = this.addListeners.bind(this);
  }  

  componentDidMount() {
    this.addListeners();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.style !== this.props.style)
      this.addStyling(nextProps);
  }

  addListeners() {
    window.addEventListener('keydown', e => {
      // Up Key
      if(e.keyCode === 38) this.props.handleToggleHistory('UP');
      // Down Key
      else if(e.keyCode === 40) this.props.handleToggleHistory('DOWN');
      // Left Key
      else if(e.keyCode === 37) this.props.moveCursor('LEFT');
      // Right Key
      else if(e.keyCode === 39) this.props.moveCursor('RIGHT');
      // Back Key
      else if(e.keyCode === 8) this.props.tryDedent();
      // Enter Key
      else if(e.keyCode === 13){ 
        e.preventDefault();
        this.props.handleSubmit();
      }
    });
  }

  addStyling(props) {
    // Maybe change this to JS css file 
    let consoleElem = document.getElementsByClassName('console')[0];
    if(props.style.height) {
      consoleElem.style.height = props.style.height;
    }
    if(props.style.width) {
      consoleElem.style.width = props.style.width;
    }
    if(props.style.textColor) {
      document.getElementsByClassName('userInput')[0].style.color = props.style.textColor;
    }
    if(props.style.backgroundColor) {
      consoleElem.style.width = props.style.width;
    }
    if(props.style.fontSize) {

    }
  }


  render() {
    return  <div className="console">
              <div className="consoleInteractive">
              { this.props.historyToDisplay.map((elem, idx) => this.renderHistory(elem, idx)) }
              <Prompt currentPrompt={this.props.currentPrompt} handleInput={this.props.handleInput}/>
            </div>
        </div>;
  }

  renderHistory(elem, idx) {
    switch(elem.type) {
      case 'welcome':
        return <Welcome welcome={elem} key={idx}/>;
      case 'input':
        return <Input input={elem} key={idx}/>;
      case 'response':
        return <Response response={elem} key={idx}/>;
      case 'error':
        return <Error error={elem} key={idx}/>;
      default:
        return null;
    }
  }

}
