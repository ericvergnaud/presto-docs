import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import LanguageSlideshow from "./LanguageSlideshow";
import CloudSlideshow from "./CloudSlideshow";
import ModelSlideshow from "./ModelSlideshow";
import DifferenceSlideshow from "./DifferenceSlideshow";

const TAB_KEYS = [ "language", "cloud", "model", "difference"];

export default class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = { activeTab: TAB_KEYS[2] };
    }

    render() {
        return <>
            { this.renderHeader() }
            { this.renderContent() }
            { this.renderFooter() }
       </>;
    }

    renderHeader() {
        const divStyle = { display: this.props.visible ? "block" : "none", width: "100%" };
        const imageStyle = {width: "100%", maxHeight: "200px"};
        const textStyle = { position: "absolute", top: "55px", left: "80px", color: "papayawhip", fontSize: "70pt", fontWeight: "500" };
        return <div style={divStyle}>
                <img style={imageStyle} src={"/img/banner/banner.jpg"} alt="" />
                <div style={textStyle}>The full stack technology</div>
            </div>;
    }

    renderContent() {
        const divStyle = { display: this.props.visible ? "block" : "none"};
        return <div className="about" style={divStyle}>
            { this.renderSlideShow() }
            { this.renderInvitation() }
        </div>;
    }

    renderFooter() {
        const divStyle = { display: this.props.visible ? "block" : "none",
                            position: "fixed", height: "32px", bottom: "0px", width: "100%",
                            backgroundColor: "white", textAlign: "center", fontSize: "smaller",
                            marginLeft: "auto", marginRight: "auto", paddingTop: "5px" };
        return <div style={divStyle}>
                The Prompto Java components are optimized using <a href="https://www.ej-technologies.com/products/jprofiler/overview.html"><img src="https://www.ej-technologies.com/images/product_banners/jprofiler_small.png" alt="JProfiler"/></a>
            </div>;
    }

    renderInvitation() {
        return <div style={{width: "800px", margin: "0 auto"}}>

            <h2>Sounds great! Can I play with it?</h2>
            <p>
                You can start playing immediately using the <a href="/?section=SANDBOX">online sandbox</a>.
            </p>
            <h2>This is really promising! Can I use it for a project?</h2>
            <p>Prompto is currently running its evaluation program.<br/>
                On-line development and deployment tools are available on request.
            </p>
            <p>We are looking for evaluators! And contributors!<br/>
                If you would like to participate, <a href="mailto:support@prompto.org?subject=Prompto%20evaluation%20program">please contact us</a>.</p>
        </div>;

    }

    renderSlideShow() {
        const activeTab = this.state.activeTab;
        return <div style={{width: "1000px", height: "660px", margin: "0 auto", marginTop: "20px"}}>
            <Tabs activeKey={activeTab} onSelect={key => this.setState({activeTab: key})} id="topics">
                <Tab eventKey={TAB_KEYS[0]} title="A full stack language">
                    <LanguageSlideshow ref={TAB_KEYS[0]} active={activeTab===TAB_KEYS[0]} moveNext={this.moveNext.bind(this)} movePrevious={this.movePrevious.bind(this)}/>
                </Tab>
                <Tab eventKey={TAB_KEYS[1]} title="...hosted in the cloud">
                    <CloudSlideshow ref={TAB_KEYS[1]} active={activeTab===TAB_KEYS[1]} moveNext={this.moveNext.bind(this)} movePrevious={this.movePrevious.bind(this)}/>
                </Tab>
                <Tab eventKey={TAB_KEYS[2]} title="...for building IT solutions" >
                    <ModelSlideshow ref={TAB_KEYS[2]} active={activeTab===TAB_KEYS[2]} moveNext={this.moveNext.bind(this)} movePrevious={this.movePrevious.bind(this)}/>
                </Tab>
                <Tab eventKey={TAB_KEYS[3]} title="...more efficiently." >
                    <DifferenceSlideshow ref={TAB_KEYS[3]} active={activeTab===TAB_KEYS[3]} moveNext={this.moveNext.bind(this)} movePrevious={this.movePrevious.bind(this)}/>
                </Tab>
            </Tabs>
        </div>;
    }

    moveNext() {
        let idx = TAB_KEYS.indexOf(this.state.activeTab);
        if(++idx >= TAB_KEYS.length)
            idx = 0;
        this.setState({activeTab: TAB_KEYS[idx]});
    }

    movePrevious() {
        let idx = TAB_KEYS.indexOf(this.state.activeTab);
        if(--idx < 0)
            idx = TAB_KEYS.length - 1;
        this.setState({activeTab: TAB_KEYS[idx]});
    }

}