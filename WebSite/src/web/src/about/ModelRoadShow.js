import React from "react";
import YouTube from "react-youtube";

const videoOpts = { width: "800px", height: "600px", playerVars: { 'autoplay': 0, 'controls': 1,'autohide':0, 'wmode':'opaque', 'origin': window.location } };

export default class ModelRoadShow extends React.Component {

    render() {
        return <div style={{width: "800px", margin: "0 auto", marginTop: "15px"}}>
            <YouTube videoId={"yMkQXnasx38"} opts={videoOpts}/>
        </div>

    }
}