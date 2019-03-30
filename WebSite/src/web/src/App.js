import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import About from "./about/About";
import Language from "./language/Language";
import Libraries from "./libraries/Libraries";
import Tutorials from "./tutorials/Tutorials";

class App extends React.Component {

    constructor(props) {
        super(props);
        const requested = this.getRequestedSection();
        this.state = { active: requested || "ABOUT" };
    }

    getRequestedSection() {
        return document.location.pathname.substring(1).toUpperCase();
    }

    render() {
        return <div>
            <Navbar inverse fluid fixedTop>
                <Navbar.Header>
                    <Navbar.Brand pullLeft>
                        <a href="/">The Prompto Platform</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight activeKey={this.state.active} onSelect={key => this.setState({active: key})}>
                    <NavItem href="#" eventKey={"ABOUT"}>About</NavItem>
                    <NavItem href="#" eventKey={"TUTORIALS"}>Tutorials</NavItem>
                    <NavItem href="#" eventKey={"LIBRARIES"}>Libraries</NavItem>
                    <NavItem href="#" eventKey={"LANGUAGE"}>Language</NavItem>
                </Nav>
            </Navbar>
            <div className="chapter">
                <About visible={this.state.active==="ABOUT"}/>
                <Tutorials visible={this.state.active==="TUTORIALS"}/>
                <Libraries visible={this.state.active==="LIBRARIES"}/>
                <Language visible={this.state.active==="LANGUAGE"}/>
            </div>
        </div>;
    }
}

export default App;
