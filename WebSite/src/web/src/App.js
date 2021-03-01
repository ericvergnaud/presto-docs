import React from 'react';
import {Navbar, Nav, NavItem, Form, NavLink} from 'react-bootstrap';
import About from "./about/About";
import Language from "./language/Language";
import Libraries from "./libraries/Libraries";
import Sandbox from "./sandbox/Sandbox";
import Tutorials from "./tutorials/Tutorials";
import SearchBox from "./components/SearchBox";
import {getParameterByName} from './utils/Utils';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {activeNav: this.getRequestedNav()};
    }

    getRequestedNav() {
        const requested = getParameterByName("section");
        if (requested)
            return requested.toUpperCase();
        else
            return "ABOUT";
    }

    showSelectedSuggestion(suggestion) {
        const key = suggestion.path.split("/")[0];
        this.setState({activeNav: key}, () => this.refs[key].topicSelected(suggestion.topic));
    }

    render() {
        return <>
            <Navbar bg="dark" variant="dark" fixed="top" >
                <Navbar.Brand href="/">Prompto</Navbar.Brand>
                <Nav activeKey={this.state.active} className="ml-auto" onSelect={key => this.setState({activeNav: key})}>
                    <Form inline>
                        <SearchBox onSelectedSuggestion={this.showSelectedSuggestion.bind(this)}/>
                    </Form>
                    <NavItem>
                        <NavLink eventKey={"TUTORIALS"}>Tutorials</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink eventKey={"SANDBOX"}>Sandbox</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink eventKey={"LIBRARIES"}>Libraries</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink eventKey={"LANGUAGE"}>Reference</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
            <div className="chapter">
                <About visible={this.state.activeNav==="ABOUT"} />
                <Tutorials visible={this.state.activeNav==="TUTORIALS"}/>
                <Sandbox visible={this.state.activeNav==="SANDBOX"}/>
                <Libraries ref="LIBRARIES" visible={this.state.activeNav==="LIBRARIES"}/>
                <Language ref="LANGUAGE" visible={this.state.activeNav==="LANGUAGE"}/>
            </div>
        </>;
    }
}

export default App;
