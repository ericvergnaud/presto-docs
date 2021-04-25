import React from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import '../node_modules/uikit/dist/css/uikit.min.css';
import '../node_modules/uikit/dist/js/uikit.min.js';

import Home from "./components/home/Home";
import Playground from "./components/playground/Playground";
import Tutorials from "./components/tutorials/Tutorials";
import Reference from "./components/reference/Reference";
import Libraries from "./components/libraries/Libraries";
import Download from "./components/download/Download";
import Navigation from "./components/navigation/Navigation";

UIkit.use(Icons);

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.libraries = null;
        this.reference = null;
        this.Navigator = withRouter(({history}) => <Navigation topicSelected={suggestion => this.topicSelected(history, suggestion)}/>);
        this.Home = withRouter(({visible, history}) => <Home visible={visible} history={history}/>);
    }

    render() {
        return (
            <main>
                <Router basename="">
                    <this.Navigator />
                    <Route exact path="/" children={ ({match}) => <this.Home visible={match}/> } />
                    <Route exact path="/tutorials" children={ ({match}) => <Tutorials visible={match}/> } />
                    <Route exact path="/playground" children={ ({match}) => <Playground visible={match}/> } />
                    <Route exact path="/libraries" children={ ({match}) => <Libraries ref={ref => this.libraries = ref || this.libraries} visible={match}/> } />
                    <Route exact path="/reference" children={ ({match}) => <Reference ref={ref => this.reference = ref || this.reference} visible={match}/> } />
                    <Route exact path="/download" children={ ({match}) => <Download visible={match}/> } />
                </Router>
            </main>
        );
    }

    topicSelected(history, suggestion) {
        const chapter = suggestion.path.split("/")[0];
        history.push("/" + chapter);
        this[chapter].topicSelected(suggestion.topic);
    }

}
