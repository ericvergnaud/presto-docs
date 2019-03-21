import React from 'react';
import Topic from "../Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";
import ReactState from "./ReactState";
import ReactProperties from "./ReactProperties";
import ReactLifecycle from "./ReactLifecycle";
import ReactRendering from "./ReactRendering";

class ThisTopic extends Topic {

    constructor() {
        super("React widgets", [ ReactLifecycle, ReactState, ReactProperties, ReactRendering ]);
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>React widgets</h2>
            <p>A React widget is a widget to be used with the React rendering engine.<br/>
                It must extend the ReactWidget class. Here is a minimal example:</p>
            <PromptoPlayer sampleUrl="samples/widgets/react-minimal.poc"/>
            <br/>
            <p>At minimal, a React widget must provide a <code><i>render</i></code> method. This method does not take parameters, and must return valid Html.</p>
            <h3>Derived widget</h3>
            <p>Additionally, a React widget can extend an existing React widget. Here is an example:</p>
            <PromptoPlayer lines={12} sampleUrl="samples/widgets/react-derived.poc"/>
            <i>(note that the Derived widget is not required to implement a render method, since it is already provided by the Minimal widget)</i>
            <br/>
            <h3>Documentation</h3>
            <p>Prompto React widgets are simply a mean to make React components available in Prompto.<br/>
            The intent is to be 100% compatible with React javascript to ensure ease of adoption (and migration).<br/>
                We do not provide a thorough documentation of React programming, only the minimal required to get started.</p>
                Prompto uses React v16.x
            <h3>Disclaimer</h3>
            <p>React widgets are easy to use once important concepts such as component lifecycle and rendering workflow are fully understood.<br/>
            You are therefore <b><i>strongly</i></b> encouraged to read (multiple times) <a href="https://reactjs.org/docs/react-component.html" rel="noreferrer noopener">the reference documentation for React components</a>.  </p>


        </React.Fragment>;
    }

}

export default new ThisTopic();