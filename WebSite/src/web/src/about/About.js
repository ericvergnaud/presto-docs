import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import LanguageRoadShow from "./LanguageRoadShow";
import CloudRoadShow from "./CloudRoadShow";
import ModelRoadShow from "./ModelRoadShow";
import DifferenceRoadShow from "./DifferenceRoadShow";
import ImageBanner from "./ImageBanner";


export default class About extends React.Component {

    render() {
        const divStyle = { display: this.props.visible ? "block" : "none" };

        return <div className="about" style={divStyle}>

            <ImageBanner/>

            <div style={{textAlign: "center"}}>
                <h1>Prompto</h1>
                <h4>the full stack programming language<br/>for building information systems in the cloud</h4>
            </div>

            <div style={{width: "1000px", height: "660px", margin: "0 auto", marginTop: "20px"}}>
                <Tabs defaultActiveKey="language" id="topics">
                    <Tab eventKey="language" title="The full stack language">
                        <LanguageRoadShow />
                    </Tab>
                    <Tab eventKey="cloud" title="...fully hosted in the cloud">
                        <CloudRoadShow />
                    </Tab>
                    <Tab eventKey="model" title="...for building information systems" >
                        <ModelRoadShow />
                    </Tab>
                    <Tab eventKey="difference" title="...much more efficiently." >
                        <DifferenceRoadShow />
                    </Tab>
                </Tabs>
            </div>

            <div style={{width: "800px", margin: "0 auto"}}>

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
            </div>
            <div className="jprofiler" style={{bottomMargin: "0px"}}>
                The Prompto platform for Java is optimized using the <a href="https://www.ej-technologies.com/products/jprofiler/overview.html"><img src="https://www.ej-technologies.com/images/product_banners/jprofiler_small.png" alt="JProfiler"/></a> Java profiler.
            </div>
        </div>;
    }
}