import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class About extends React.Component {

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
        const divStyle = { display: this.props.visible ? "block" : "none" };
        const rotation = "rotate(" + this.state.angle + "deg)";
        const rotatingStyle = { display: "flex", width: "170px", transform: rotation };
        const stillStyle = { display: "flex", width: "170px"};
        return <div className="about" style={divStyle}>
            <Grid>
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
            </Grid>
            <h1 style={{textAlign: "center"}}>Prompto, the information system in the cloud</h1>
            <h3>Run in the cloud</h3>
            <p>Prompto is designed from the ground to run in the cloud, whether public or private.</p>
            <h3>How is this different from traditional tools?</h3>
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
                monitoring, OS upgrades, DNS, authentication, entitlement and so forth.
            </p>
            <p>While the Prompto technology takes care of infrastructure, security and scalability, the applications
                running within this
                information system can focus on business value.
            </p>

            <h2>Build in the cloud</h2>
            <p>Prompto information systems are entirely built in the cloud.<br/>
                All infrastructure management applications
                are in the cloud.<br/>
                All application management applications are in the cloud.<br/>
                All application development applications are
                in the cloud.<br/>
                This includes the IDE for creating web pages and writing application code.</p>


            <h2>Prompto components</h2>
            <p>Prompto comprises different components:</p>
            <ul>
                <li>hardware administration tools, used to manage deployment of applications on the infrastructure
                </li>
                <li>application administration tools, used to monitor execution of applications on the
                    infrastructure
                </li>
                <li>development tools, used to build applications, test them, and manage their lifecycle</li>
                <li>a code store used to store and distribute configuration and application code across the
                    infrastructure
                </li>
                <li>data store adapters, used to store business data in popular distributed data stores</li>
                <li>a programming language, called Prompto</li>
            </ul>

            <h2>Availability</h2>
            <p>Prompto is currently running its evaluation program.<br/>
                This web site provides the reference of the Prompto
                programming language, and a sneak preview of the Prompto libraries.<br/>
                On-line development and deployment tools are available on request.
            </p>
            <p>We are looking for evaluators! And contributors!<br/>
                If you would like to participate, <a href="mailto:support@prompto.cloud?subject=Prompto%20evaluation%20program">please contact us</a>.</p>

        </div>;
    }
}