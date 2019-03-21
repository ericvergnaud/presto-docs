import React from 'react';
import Topic from "../Topic";
import ReactWidget from "./ReactWidget";

class ThisTopic extends Topic {

    constructor() {
        super("Widgets", [ ReactWidget ]);
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>Widgets</h2>

            <p>Prompto supports Widgets, a special type designed to render user interface.<br/>
                A widget cannot be instantiated in code i.e. you cannot write:</p>
            <pre>w = MyWidget()</pre>
            <p>Rather, widgets get instantiated by a rendering engine, when the UI is rendered.<br/>
                A rendering engine can be browser based (React, Vue, Angular...), or more specialized (Cocoa Touch,
                Android UI ...).<br/>
                Prompto widgets are not reusable across rendering engines. This is unfortunate, but the lack of
                standardization in this space simply makes it impossible.<br/>
                You must therefore decide which engine to use when coding, this cannot be changed by configuration.</p>
            <p>Due to the above, a <i>widget</i> type is defined by extending the base widget class of the selected
                rendering engine, and providing the methods required by the base widget.</p>
            <p>As of writing, Prompto supports the following rendering engines:</p>
            <ul>
                <li>Browser engines:
                    <ul>
                        <li>React</li>
                        <li>Vue (planned but not supported yet)</li>
                        <li>Ember (envisaged but not planned yet)</li>
                        <li>Angular (not envisaged yet)</li>
                    </ul>
                </li>
                <li>iOS engines:
                    <ul>
                        <li>React Native (envisaged but not planned yet)</li>
                        <li>Cocoa Touch (envisaged but not planned yet)</li>
                    </ul>
                </li>
                <li>Android engines:
                    <ul>
                        <li>React Native (envisaged but not planned yet)</li>
                        <li>Android SDK (envisaged but not planned yet)</li>
                    </ul>
                </li>
                <li>MacOSX engines:
                    <ul>
                        <li>Cocoa (not envisaged yet)</li>
                    </ul>
                </li>
                <li>Windows engines:
                    <ul>UWP (not envisaged yet)</ul>
                    <ul>WPF (not envisaged yet)</ul>
                    <ul>Windows Forms (not envisaged yet)</ul>
                </li>
            </ul>
            <p>We are also considering enabling creation of desktop web apps using Electron or similar</p>
            <h3>Derived widgets</h3>
            <p>Prompto fully supports derived widgets i.e. a widget extending an existing one.<br/>
            However multiple inheritance is not supported. Rather, you are encouraged to use composition, which we find also works better for UI rendering.</p>
            <h3>Widget attributes</h3>
            <p>As of writing, widgets cannot have attributes. This is planned but not available yet.<br/>
                (reason for this is we are hesitant on how they would be initialized)
            </p>
            <h3>Widget storage</h3>
            <p>Widgets cannot be stored. They are for UI only.</p>
        </React.Fragment>;
    }

}

export default new ThisTopic();