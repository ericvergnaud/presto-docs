import React from 'react'

export default class Input extends React.Component {

  render () {
    return <div className="input">
          <span className="inputIcon"> > </span>
          { this.renderIndents() }
          <span className="inputData">{this.props.input.data}</span>
      </div>;
  }

    renderIndents(prompt) {
        if(this.props.input.indentLevel) {
            const keys = Array(this.props.input.indentLevel).fill(0).map((val, idx) => idx);
            return keys.map(val => <span key={val} className="promptIndent">&nbsp;</span>);
        }
    }

}