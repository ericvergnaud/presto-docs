import React from 'react';
import Topic from "../Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("State");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>React widget state</h2>
            <p>React supports both stateless and controlled components. Controlled components have a state, which is used to control the component.<br/>
                To set and access state, React widgets come with 4 methods:</p>
            <ul>
                <li>getInitialState<br/>
                    The getInitialState is an optional callback that is called by React to set a controlled component's initial state. It must return a Document.
                </li>

                <li>getState<br/>
                    This method returns the current state of the controlled component, in the form of a Document.
                </li>

                <li>setState<br/>
                    This method sets the new state of the controlled component, in the form of a Document.<br/>
                    (continuation is not supported yet, but is coming soon).
                </li>

                 <li>getDerivedStateFromProps<br/>
                    This method is rarely used, see <a href="https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops" rel="noreferrer noopener">getderivedstatefromprops</a>.
                </li>
            </ul>
            <p>Here is an example where the 3 common methods are used.</p>
            <PromptoPlayer lines={18} sampleUrl="samples/widgets/react-state.poc"/>
            <br/>
        </React.Fragment>;
    }

}

export default new ThisTopic();