import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import '../node_modules/uikit/dist/css/uikit.min.css';
import '../node_modules/uikit/dist/js/uikit.min.js';

import Navigation from './components/navigation/';
import Home from './components/home/';
import Playground from './components/playground/';
import Tutorials from './components/tutorials/';
import Documentation from './components/documentation/';
import References from './components/references/';

UIkit.use(Icons);


function App() {
    return (
        <main>
            <Navigation />
            <Router basename="/prompto">
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/playground" component={ Playground } />
                    <Route exact path="/tutorials" component={ Tutorials } />
                    <Route exact path="/documentation" component={ Documentation } />
                    <Route exact path="/references" component={ References } />
                </Switch>
            </Router>
        </main>
    );
}

export default App;
