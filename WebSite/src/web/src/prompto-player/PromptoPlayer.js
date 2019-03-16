import axios from 'axios';
import React from 'react';
import AceEditor from 'react-ace';
import 'brace/theme/eclipse';
import 'brace/mode/text';
import PromptoMode from "./PromptoMode";
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
// eslint-disable-next-line
import PromptoWorker from "worker-loader!./PromptoWorker";

class PromptoWorkerListener {

    constructor() {
        this.worker = new PromptoWorker();
        this.worker.onmessage = this.onMessage.bind(this);
        this.nextMessageId = 0;
        this.messageHandlers = {};
    }

    onMessage(msg) {
        const message = msg.data;
        const handler = this.messageHandlers[message.inResponseTo];
        if(!message.keepHandlerAlive)
            delete this.messageHandlers[message.inResponseTo];
        if(handler)
            handler(message.data);
        else
            console.log("No handler for: " + msg);
    }

    translate(content, from, to, callback) {
        const message = {
            id : ++this.nextMessageId,
            verb : "translate",
            data : {
                content : content,
                from : from,
                to : to
            }
        };
        this.messageHandlers[message.id] = data => {
            callback(data.translated, -1);
        };
        this.worker.postMessage(message);
    }

    execute(content, dialect, callback) {
        var message =  {
            id : ++this.nextMessageId,
            verb : "execute",
            data : {
                content : content,
                dialect : dialect
            }
        };
        // register handler for this message's responses
        this.messageHandlers[message.id] = data => {
            callback(data.toPrint);
        };
        this.worker.postMessage(message);
    }
}

const PROMPTO_WORKER = new PromptoWorkerListener();

class DialectSwitcher extends React.Component {

    render() {
        return <NavItem className={this.props.active ? "active" : ""}
                        onClick={() => this.props.dialectSelected(this.props.dialect)}>{this.props.dialect}</NavItem>;
    }
}


const ALL_DIALECTS = ["Engly", "Objy", "Monty"];

class PlayerNavbar extends React.Component {

    render() {
        return <Navbar fixed="bottom" style={this.props.style}>
            <Nav bsStyle="tabs">
                { ALL_DIALECTS.map(d=><DialectSwitcher key={d} dialect={d}
                                                       active={d[0]===this.props.dialect}
                                                       dialectSelected={this.props.dialectSelected} />, this)
                }
            </Nav>
            { this.props.runnable && <Navbar.Form pullRight>
                                        <Button onClick={this.props.runRequested}>Try it!</Button>
                                     </Navbar.Form>   }
        </Navbar>
    }
}

class PlayerOutput extends React.Component {

    render() {
        const lines = (this.props.output || "").split("\n");
        return <div className="player-output" style={this.props.style}>
                {lines.map((s, i) => <React.Fragment key={i}>{s}<br/></React.Fragment>)}
                { this.props.done && <Button onClick={this.props.doneRequested}>Done</Button> }
                </div>;
    }
}

export default class PromptoPlayer extends React.Component {

    constructor(props) {
        super(props);
        this.aceEditor = null;
        this.state = { value: "some text", dialect: "E", output: null, done: false };
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
        this.setState({output: ""}, ()=>PROMPTO_WORKER.execute(this.state.value, this.state.dialect, output => {
            const done = output.startsWith("Success!");
            output = this.state.output + output + "\n";
            this.setState({output: output, done: done});
        }));
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