import React from 'react'

export default class Response extends React.Component {

    render() {
        const lines = this.props.response.data.split("\n").filter(s => s.length > 0);
        const line = lines[0];
        lines.shift();
        return <>
            <div className="response">
                <span className="responseIcon"> => </span>
                <span className="responseData">{line}</span>
            </div>
            {lines.map(this.renderIndenting, this)}
        </>;
    }

    renderIndenting(line, idx) {
        return <div className="response" key={idx}>
            <span className="responseIcon">&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {this.renderIndents(line)}
            <span className="responseData">{line.replace(/\t/g, "")}</span>
        </div>;
    }

    renderIndents(line) {
        const indentLevel = (line.match(/\t/g) || []).length;
        if (indentLevel) {
            const keys = Array(indentLevel).fill(0).map((val, idx) => idx);
            return keys.map(val => <span key={val} className="promptIndent">&nbsp;</span>);
        }
    }

}