import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import About from "./about/About";
import Language from "./language/Language";
import Libraries from "./libraries/Libraries";
import Sandbox from "./sandbox/Sandbox";
import Tutorials from "./tutorials/Tutorials";
import SearchBox from "./components/SearchBox";

class App extends React.Component {

    constructor(props) {
        super(props);
        const requested = this.getRequestedSection();
        this.state = { activeNav: requested || "ABOUT" };
    }

    getRequestedSection() {
        return document.location.pathname.substring(1).toUpperCase();
    }

    showSelectedSuggestion(suggestion) {
        const key = suggestion.path.split("/")[0];
        this.setState({activeNav: key}, ()=>this.refs[key].topicSelected(suggestion.topic));
    }

    render() {
        return <div>
            <Navbar inverse fluid fixedTop>
                <Navbar.Header>
                    <Navbar.Brand pullLeft>
                        <a href="/">The Prompto Platform</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight activeKey={this.state.active} onSelect={key => this.setState({activeNav: key})}>
                    <NavItem eventKey={"ABOUT"}>About</NavItem>
                    <NavItem eventKey={"TUTORIALS"}>Tutorials</NavItem>
                    <NavItem eventKey={"SANDBOX"}>Sandbox</NavItem>
                    <NavItem eventKey={"LIBRARIES"}>Libraries</NavItem>
                    <NavItem eventKey={"LANGUAGE"}>Language</NavItem>
                </Nav>
                <Navbar.Form pullRight>
                    <SearchBox onSelectedSuggestion={this.showSelectedSuggestion.bind(this)}/>
                </Navbar.Form>
            </Navbar>
            <div className="chapter">
                <About visible={this.state.activeNav==="ABOUT"}/>
                <Tutorials visible={this.state.activeNav==="TUTORIALS"}/>
                <Sandbox visible={this.state.activeNav==="SANDBOX"}/>
                <Libraries ref="LIBRARIES" visible={this.state.activeNav==="LIBRARIES"}/>
                <Language ref="LANGUAGE" visible={this.state.activeNav==="LANGUAGE"}/>
            </div>
        </div>;
    }
}

export default App;
