import axios from 'axios';
import React from 'react';
import AceEditor from 'react-ace';
import 'brace/theme/eclipse';
import 'brace/mode/text';
import PromptoMode from "./PromptoMode";
import {Navbar, Nav, NavItem, Button, Form, NavLink} from 'react-bootstrap';
import PROMPTO_WORKER from './PromptoWorkerListener';

class DialectSwitcher extends React.Component {

    render() {
        return <NavItem>
                <NavLink eventKey={this.props.dialect} active={this.props.active} onSelect={() => this.props.dialectSelected(this.props.dialect)}>{this.props.dialect}</NavLink>
            </NavItem>;
    }
}


const ALL_DIALECTS = ["Engly", "Objy", "Monty"];

class PlayerNavbar extends React.Component {

    render() {
        return <Navbar bg="light" variant="light" style={this.props.style}>
                <Nav variant="tabs">
                    { ALL_DIALECTS.map(d=><DialectSwitcher key={d} dialect={d}
                                                           active={d[0]===this.props.dialect}
                                                           dialectSelected={this.props.dialectSelected} />, this)
                    }
                </Nav>
                { this.renderTryItButton() }
            </Navbar>;
    }

    renderTryItButton() {
        if(this.props.runnable)
            return <Form inline>
                        <Button variant="light" onClick={this.props.runRequested}>Try it!</Button>
                    </Form>;
        else
            return null;
    }
}


class PlayerOutput extends React.Component {

    render() {
        return <div className="player-output" style={this.props.style}>
                { this.renderOutput() }
                { this.renderDoneButton() }
             </div>;
    }

    renderOutput() {
        const lines = this.props.output || [];
        return lines.map(this.renderLine);
    }

    renderLine(line, i) {
        if(line.dest==="stdout")
            return <React.Fragment key={i}>{line.text}<br/></React.Fragment>;
        else
            return <React.Fragment key={i}><font color="red">{line.text}<br/></font></React.Fragment>;
    }

    renderDoneButton() {
        if(this.props.done)
            return <Button variant="light" onClick={this.props.doneRequested}>Done</Button>;
        else
            return null;
    }

}

let PLAYER_KEY = 0;

export default class PromptoPlayer extends React.Component {

    static nextKey() {
        return ++PLAYER_KEY;
    }

    constructor(props) {
        super(props);
        this.aceEditor = null;
        const ext = this.props.sampleUrl.substring(this.props.sampleUrl.lastIndexOf("."));
        const dialect = ext[2].toUpperCase();
        this.state = { value: "some text", dialect: dialect, output: null, done: false };
    }

    componentDidMount() {
        const editor = this.aceEditor.editor;
        editor.setReadOnly(true);
        editor.setShowPrintMargin(false);
        editor.setHighlightActiveLine(false);
        editor.renderer.setShowGutter(false);
        editor.renderer.$cursorLayer.element.style.display = "none";
        editor.getSession().setMode(new PromptoMode(this));
        axios.get(this.props.sampleUrl)
            .then(resp => this.setState({value: resp.data}))
            .catch(error => console.log(error));
    }

    dialectSelected(dialect) {
        const target = dialect[0];
        if(target===this.state.dialect)
            return;
        PROMPTO_WORKER.translate(this.state.value, this.state.dialect, target, translated => this.setState({dialect: target, value: translated}));
    }

    runRequested() {
        this.setState({output: []}, () => PROMPTO_WORKER.execute(this.state.value, this.state.dialect, (stdout, stderr) => {
            if (stdout)
                this.addToOutput("stdout", stdout);
            else if (stderr)
                this.addToOutput("stderr", stderr);
        }));
    }

    addToOutput(dest, text) {
        const nextCR = text.indexOf("\n");
        if (nextCR < 0 || nextCR === text.length - 1)
            this.addSingleLineToOutput(dest, text);
        else
            this.addMultiLinesToOutput(dest, text);
    }

    addSingleLineToOutput(dest, text) {
        const output = this.state.output;
        const entry = output[output.length - 1] || {dest: "none", text: ""};
        const done = text.startsWith("Success!");
        if (done || entry.dest !== dest || entry.text.endsWith("\n"))
            output.push({dest: dest, text: text});
        else
            entry.text += text;
        this.setState({output: output, done: done});
    }

    addMultiLinesToOutput(dest, text) {
        const endsWithCR = text.endsWith("\n");
        const output = this.state.output;
        const entry = output[output.length - 1] || {dest: "none", text: ""};
        const lines = text.split("\n");
        if(endsWithCR)
            lines.pop();
        // add first line
        if(entry.dest!==dest || entry.text.endsWith("\n"))
            output.push({dest: dest, text: lines[0] + "\n"});
        else
            entry.text += lines[0];
        // add full lines
        for(let i=1;i<lines.length-1;i++)
            output.push({dest: dest, text: lines[i] + "\n"});
        // add last line
        const lastEntry = {dest: dest, text: lines[lines.length - 1]};
        if(endsWithCR)
            lastEntry.text += "\n";
        output.push(lastEntry);
        this.setState({output: output});
    }

    render() {
        const lines = this.props.lines || 6;
        const fullHeight = 50 + lines * 15;
        const style = { height: fullHeight };
        const aceHeight = "" + (fullHeight - 32) + "px";
        const inputStyle = { display: (this.state.output===null ? "block" : "none" ) };
        const outputStyle = { display: (this.state.output!==null ? "block" : "none" ) };

        return <div className="prompto-player" style={style}>
                    <AceEditor ref={ref=>{this.aceEditor = ref || this.aceEditor;}}
                               style={inputStyle}
                               theme="eclipse" mode="text"
                               value={this.state.value}
                               editorProps={{ $blockScrolling: Infinity }}
                               width="100%" height={aceHeight} />
                    <PlayerNavbar style={inputStyle}
                                  dialect={this.state.dialect} runnable={this.props.runnable}
                                  dialectSelected={this.dialectSelected.bind(this)}
                                  runRequested={this.runRequested.bind(this)}  />
                    <PlayerOutput style={outputStyle} output={this.state.output} done={this.state.done} doneRequested={()=>this.setState({output: null, done: false})}/>
                </div>;

    }

}