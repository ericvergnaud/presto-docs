import React from 'react';
import Topic from "../../../components/Topic";
import ReactBootstrap3 from "./ReactBootstrap3";

class ThisTopic extends Topic {

    constructor() {
        super("UI Frameworks", [ ReactBootstrap3 ]);
    }

    renderContent(topicSelected) {
        return <React.Fragment>
                    <h2>UI Frameworks</h2>
                    <p>UI Frameworks are libraries which aim to provide an advanced and consistent look and feel to applications.<br/>
                        This is often done by sophisticated techniques combining JavaScript and CSS.<br/>
                        Examples of popular UI Frameworks are Bootstrap, Semantic UI, Foundation, Bulma, Pure or Milligram.</p>
                    <p>Prompto does not itself aim to <i>create</i> such frameworks. Rather, it provides adapters for them, in the form of native widget libraries.<br/>
                        Since Prompto widgets are tied to rendering engines such as React or Vue, Prompto only provides widget libraries for frameworks available as components.<br/>
                        As of writing, Prompto provides widget libraries for:
                    </p>
                    <ul>
                        <li>React Bootstrap 3</li>
                        <li>React Bootstrap 4 (not available yet)</li>
                        <li>React Semantic UI 2 (not available yet)</li>
                    </ul>
            </React.Fragment>;
    }

}

export default new ThisTopic();