import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import About from "./about/About";
import Language from "./language/Language";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {active: "ABOUT"};
    }

    render() {
        return <div>
            <Navbar inverse fluid fixedTop>
                <Navbar.Header>
                    <Navbar.Brand pullLeft>
                        <a href="/">The Prompto Platform</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem href="#" onClick={()=>this.setState({active: "ABOUT"})}>About</NavItem>
                    <NavItem href="#" onClick={()=>this.setState({active: "LANGUAGE"})}>Language</NavItem>
                </Nav>
            </Navbar>
            <div className="content">
                <About visible={this.state.active==="ABOUT"}/>
                <Language visible={this.state.active==="LANGUAGE"}/>
            </div>
        </div>;
    }
}

export default App;
