import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import YouTube from "react-youtube";

class ImageBanner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {angle: 0};
    }

    componentDidMount() {
        this.interval = setInterval( this.rotate.bind(this), 20);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    rotate() {
        const angle = ( this.state.angle - 1 ) % 360;
        this.setState({angle: angle});
    }

    render() {
        const rotation = "rotate(" + this.state.angle + "deg)";
        const rotatingStyle = { display: "flex", width: "170px", transform: rotation };
        const stillStyle = { display: "flex", width: "170px"};
        return <Grid>
            <Row style={{marginTop: "30px", marginBottom: "30px"}}>
                <Col md={1}/>
                <Col md={2}>
                    <img src="img/factory.png" style={stillStyle} alt=""/>
                </Col>
                <Col md={2}>
                    <img src="img/web.png" style={stillStyle} alt=""/>
                </Col>
                <Col md={2}>
                    <img src="img/arrows.png" style={rotatingStyle} alt=""/>
                </Col>
                <Col md={2}>
                    <img src="img/repl.png" style={stillStyle} alt=""/>
                </Col>
                <Col md={2}>
                    <img src="img/tools.png" style={stillStyle} alt=""/>
                </Col>
                <Col md={1}/>
            </Row>
        </Grid>;

    }
}

export default class About extends React.Component {

    render() {
        const divStyle = { display: this.props.visible ? "block" : "none" };
        const videoOpts = { width: "800px", height: "600px", playerVars: { 'autoplay': 0, 'controls': 1,'autohide':0, 'wmode':'opaque', 'origin': window.location } };

        return <div className="about" style={divStyle}>
            <ImageBanner/>
            <div style={{textAlign: "center"}}>
            <h1>Prompto</h1>
                <h4><i>the cost cutting technology<br/>for building information systems in the cloud</i></h4>
            </div>
            <div style={{width: "800px", margin: "0 auto"}}>
                <h2>Why Prompto?</h2>
                <YouTube videoId={"yMkQXnasx38"} opts={videoOpts}/>
            </div>
            <div style={{width: "800px", margin: "0 auto"}}>
                <h2>Build in the cloud</h2>
                <p>Prompto information systems live entirely in the cloud.<br/>
                    Infrastructure is in the cloud.<br/>
                    Management tools are in the cloud.<br/>
                    Development tools are in the cloud.<br/>
                    Business applications are in the cloud.<br/>
                </p>


                <h2>Prompto components</h2>
                <p>Prompto comprises different components:</p>
                <ul>
                    <li>cloud administration tools</li>
                    <li>application administration tools</li>
                    <li>development tools</li>
                    <li>a code store used to store and distribute application code</li>
                    <li>data store adapters, used to store business data in popular cloud based data stores</li>
                    <li>a programming language, called Prompto</li>
                </ul>



                <h2>How is this different from traditional tools?</h2>
                <p>Many of the technologies currently used to build applications were designed long before the cloud was
                    even dreamt of.<br/>
                    As a consequence, organizations have a hard time building applications for the cloud, and deploying them
                    in the cloud.</p>
                <p>Information systems are built from many applications, often dozens, sometimes hundreds of them.<br/>
                    Making applications work together is a task in itself, proven to be complex even when using simple
                    infrastructure.<br/>
                    While the cloud may simplify some aspects such as hardware provisioning, it can increase the inherent
                    complexity of running an information system.
                </p>
                <p>Prompto introduces a radically different approach, where the information system itself is in the cloud.<br/>
                    This includes all core components of the information system: deployment, load balancing, replication,
                    backup,
                    monitoring, OS upgrades, DNS, authentication, entitlement and so forth.<br/>
                    It also includes the IDE for creating web pages and writing application code.
                </p>
                <p>Prompto is designed from the ground up to run in the cloud, whether public or private.</p>
                <p>While the Prompto technology takes care of infrastructure, security and scalability, the applications
                    running within this
                    information system can focus on business value.
                </p>


                <h2>Availability</h2>
                <p>Prompto is currently running its evaluation program.<br/>
                    This web site provides the reference of the Prompto
                    programming language, and a sneak preview of the Prompto libraries.<br/>
                    On-line development and deployment tools are available on request.
                </p>
                <p>We are looking for evaluators! And contributors!<br/>
                    If you would like to participate, <a href="mailto:support@prompto.cloud?subject=Prompto%20evaluation%20program">please contact us</a>.</p>
            </div>
        </div>;
    }
}