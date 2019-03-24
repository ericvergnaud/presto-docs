import React from 'react';
import Topic from "../../../components/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Rendering");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>React widget rendering</h2>
            <p>As described in the introduction, React components follow a specific lifecycle, centered around rendering.<br/>
            React widgets provides the following lifecycle methods:</p>
            <ul>
                <li><b>shouldComponentUpdate</b><br/>
                    The <i>shouldComponentUpdate</i> method is a callback invoked before rendering, which is useful to force update as part of next event loop iteration.<br/>
                    You should rarely need to implement this callback method.<br/>
                    <br/>
                </li>
                <li><b>render</b><br/>
                    The <i>render</i> method is a callback method invoked by the React engine to render a widget.<br/>
                    The <i>render</i> method is mandatory for visible widgets.<br/>
                    You cannot call <i>render</i> method from another piece of code, this could result in a duplicated UI.<br/>
                    <br/>
                </li>
                <li><b>getSnapshotBeforeUpdate</b><br/>
                    The <i>getSnapshotBeforeUpdate</i> method is a callback method invoked immediately after rendering, to give an opportunity to record a component's latest state (such as scroll position, caret...)<br/>
                    You should rarely need to implement this callback method.<br/>
                    <br/>
              </li>
                <li><b>componentDidUpdate</b><br/>
                    The <i>componentDidUpdate</i> method is a callback method invoked immediately after rendering, to give an opportunity to perfom housekeeping activities.<br/>
                    It is not frequent to implement this callback method.<br/>
                    <br/>
                </li>
                <li><b>componentWillUnmount</b><br/>
                    The <i>componentDidUpdate</i> method is the last callback method that is invoked before a widget is discarded.<br/>
                    It is not frequent to implement this callback method.<br/>
                    <br/>
                </li>
                <li><b>forceUpdate</b><br/>
                    The <i>forceUpdate</i> method is a method that can be called to force refresh of a widget following a change not tracked through state or properties.<br/>
                    You should rarely need to call this method.<br/>
                </li>
            </ul>
            </React.Fragment>;
    }

}

export default new ThisTopic();