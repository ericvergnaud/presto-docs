//

import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import YouTube from 'react-youtube';

const ALL_TUTORIALS = [ { id: "VaGc8aqxAB4", title: "My first Prompto web site" } ];

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
        const videoOpts = { width: "960px", height: "540px"};
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
                </div>;
    }
}