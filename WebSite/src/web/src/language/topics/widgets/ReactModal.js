import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("React modals");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>React modals</h2>
            <p>Because it is <i>reactive</i> to <code>state</code> and <code>props</code> rather than <i>premptive</i>, React makes it somewhat difficult to display transient widgets that are not embedded in the layout, such as modal dialogs.<br/>
            To help display such widgets, Prompto comes with 4 useful methods:</p>
            <ul>
                <li><b>showReactModal(Html modal)</b><br/>
                    The showReactModal is a method that can be called from widget code. It accepts Html.
                </li>
                <li><b>hideReactModal()</b><br/>
                    The hideReactModal is a method that can be called from widget code. It takes no parameter.
                </li>
                <li><b>showReactContextMenu(ClickEvent event, Html menu)</b><br/>
                    The showReactContextMenu is a method that can be called from widget code. It accepts a ClickEvent and Html.
                </li>
                <li><b>hideReactContextMenu()</b><br/>
                    The hideReactContextMenu is a method that can be called from widget code. It takes no parameter.<br/>
                    You usually do not need to call this method because the context menu is closed automatically on the next click.
                </li>
            </ul>
            <p>In the below example, when clicking on a button, a <code>Modal</code> is displayed.<br/>
                The <code>Modal</code> itself has a button to close the modal.</p>
            <PromptoPlayer lines={40} sampleUrl="samples/widgets/react-modal.poc" />
            <p/>
            <p>It is worth noting that these methods affect the html rendering of the widget, but the widget itself might require additional properties to be visible.<br/>
                For example React Bootstrap 3 modals require a <code>show</code> property to be set (see above example).
            </p>
            <p>Also worth noting, the <code>showReactModal</code> is not blocking. It prepares rendering for the next React cycle and returns <i>before</i> the modal is actually displayed.<br/>
                This also applies to <code>hideReactModal</code>.
            </p>

            </React.Fragment>;
    }

}

export default new ThisTopic();