import React from "react";
import {Col, Grid, Row} from "react-bootstrap";

export default class ImageBanner extends React.Component {

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
