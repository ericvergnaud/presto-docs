import React from "react";
import YouTube from "react-youtube";

const videoOpts = { width: "800px", height: "600px", playerVars: { 'autoplay': 0, 'controls': 1,'autohide':0, 'wmode':'opaque', 'origin': window.location } };

export default class ModelRoadShow extends React.Component {

    render() {
        const style = { display: this.props.active ? "block" : "none", width: "800px", margin: "0 auto", marginTop: "15px" };
        return <div style={style}>
                <YouTube videoId={"yMkQXnasx38"} opts={videoOpts}/>
            </div>

    }
}