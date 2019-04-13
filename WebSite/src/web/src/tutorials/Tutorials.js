//

import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import YouTube from 'react-youtube';

const ALL_TUTORIALS = [ { id: "z2LTkZaoJy8", title: "My first Prompto web site" },
                        { id: "QDtQz2nUGlg", title: "My first web page" },
                        { id: "nxuiBVblOMo", title: "Loading Employee data" },
                        { id: "b_oefHujWRM", title: "Displaying Employee data" } ];

export default class Tutorials extends React.Component {

    constructor(props) {
        super(props);
        this.state = { active: ALL_TUTORIALS[0] }
    }

    tutorialSelected(e) {
        const active = ALL_TUTORIALS.find(t => t.id === e.target.value);
        this.setState({ active: active });
    }

    render() {
        const style = { display: this.props.visible ? "block" : "none" };
        const selectStyle = { maxWidth: "450px"};
        const videoOpts = { width: "1280px", height: "720px", playerVars: { 'autoplay': 0, 'controls': 1,'autohide':0, 'wmode':'opaque', 'origin': window.location } };
        return <div className="about" style={style}>
                    <h2>Tutorials</h2>
                    <form>
                        <FormGroup>
                            <ControlLabel>Available tutorials</ControlLabel>
                            <FormControl id="which" componentClass="select" value={this.state.active.id} style={selectStyle} onChange={this.tutorialSelected.bind(this)} >
                                { ALL_TUTORIALS.map(t => <option key={t.id} value={t.id}>{t.title}</option>) }
                            </FormControl>
                        </FormGroup>
                    </form>
                    <YouTube videoId={ this.state.active.id } opts={videoOpts}/>
                <p/>
                <h2>Availability</h2>
                <p>Prompto is currently running its evaluation program.<br/>
                    This web site provides the reference of the Prompto
                    programming language, and a sneak preview of the Prompto libraries.<br/>
                    On-line development and deployment tools are available on request.
                </p>
                <p>We are looking for evaluators! And contributors!<br/>
                    If you would like to participate, <a href="mailto:support@prompto.cloud?subject=Prompto%20evaluation%20program">please contact us</a>.</p>
        </div>;
    }
}