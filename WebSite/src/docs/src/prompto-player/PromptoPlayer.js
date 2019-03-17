import axios from 'axios';
import React from 'react';
import AceEditor from 'react-ace';
import 'brace/theme/eclipse';
import 'brace/mode/text';
import PromptoMode from "./PromptoMode";
import { Navbar, Nav, NavItem } from 'react-bootstrap';
// eslint-disable-next-line
import PromptoWorker from "worker-loader!./PromptoWorker";

class PromptoWorkerListener {

    constructor() {
        this.worker = new PromptoWorker();
        this.worker.onmessage = this.onMessage.bind(this);
        this.nexMessageId = null;
        this.messageHandlers = {};
    }

    onMessage(msg) {
        console.log(msg);
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
        return <Navbar fixed="bottom">
            <Nav bsStyle="tabs">
                { ALL_DIALECTS.map(d=><DialectSwitcher key={d} dialect={d}
                                                       active={d[0]===this.props.dialect}
                                                       dialectSelected={this.props.dialectSelected} />, this)
                }
            </Nav>
        </Navbar>
    }
}


export default class PromptoPlayer extends React.Component {

    constructor(props) {
        super(props);
        this.aceEditor = null;
        this.state = { value: "some text", dialect: "E" };
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

    render() {
        const lines = this.props.lines || 6;
        const fullHeight = 50 + lines * 15;
        const style = { height: fullHeight };
        const aceHeight = "" + (fullHeight - 28) + "px";
        return <div className="prompto-player" style={style}>
                    <AceEditor ref={ref=>{this.aceEditor = ref || this.aceEditor;}}
                               theme="eclipse" mode="text"
                               value={this.state.value}
                               editorProps={{ $blockScrolling: Infinity }}
                               width="100%" height={aceHeight} />
                    <PlayerNavbar dialect={this.state.dialect} dialectSelected={this.dialectSelected.bind(this)} runnable={this.props.runnable}/>
                </div>;

    }

}