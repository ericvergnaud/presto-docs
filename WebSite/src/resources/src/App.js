import { BrowserRouter as Router, Route } from 'react-router-dom';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import '../node_modules/uikit/dist/css/uikit.min.css';
import '../node_modules/uikit/dist/js/uikit.min.js';
import Home from "./components/home/Home";
import Playground from "./components/playground/Playground";
import Tutorials from "./components/tutorials/Tutorials";
import Reference from "./components/reference/Reference";
import Libraries from "./components/libraries/Libraries";
import Navigation from "./components/navigation/Navigation";


UIkit.use(Icons);


function App() {
    return (
        <main>
            <Router basename="">
                <Navigation />
                <Route exact path="/" children={ ({match}) => <Home visible={match}/> } />
                <Route exact path="/tutorials" children={ ({match}) => <Tutorials visible={match}/> } />
                <Route exact path="/playground" children={ ({match}) => <Playground visible={match}/> } />
                <Route exact path="/libraries" children={ ({match}) => <Libraries visible={match}/> } />
                <Route exact path="/reference" children={ ({match}) => <Reference visible={match}/> } />
            </Router>
        </main>
    );
}

export default App;
