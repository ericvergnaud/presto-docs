import React from 'react';
import ReactWidget from "./ReactWidget";
import ReactModal from "./ReactModal";
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Widgets", [ReactWidget, ReactModal]);
    }

    renderContent(topicSelected) {
        return <>
            <h2>Widgets</h2>

            <p>Prompto supports Widgets, a special type designed to render user interface.</p>
            <p>A widget is rendered by a rendering engine.<br/>
                A rendering engine can be browser based (React, Vue, Angular...), or more specialized (Cocoa Touch,
                Android UI ...).<br/>
                Here is a non exhaustive list of rendering engines:</p>
            <ul>
                <li>Browser engines:<br/>
                    <ul>
                        <li>React</li>
                        <li>Vue</li>
                        <li>Ember</li>
                        <li>Angular</li>
                    </ul>
                    <i>(the above can also be used by Electron)</i>
                </li>
                <li>iOS engines:
                    <ul>
                        <li>Cocoa Touch</li>
                        <li>React Native</li>
                    </ul>
                </li>
                <li>Android engines:
                    <ul>
                        <li>Android SDK</li>
                        <li>React Native</li>
                    </ul>
                </li>
                <li>MacOSX engines:
                    <ul>
                        <li>Cocoa</li>
                    </ul>
                </li>
                <li>Windows engines:
                    <ul>UWP</ul>
                    <ul>WPF</ul>
                    <ul>Windows Forms</ul>
                </li>
            </ul>

            <p> As of writing, Prompto only supports the React rendering engine.</p>

            <p>Prompto widgets are not usable across rendering engines. This is unfortunate, but the lack of
                standardization in this space simply makes it impossible.<br/>
                You must therefore decide which engine to use when coding, this cannot be changed by configuration.</p>
            <p>Due to the above, a <i>widget</i> must extend the base widget type of the selected
                rendering engine, and providing the methods required by the base widget.</p>

            <p>Rendering occurs when a top most widget (such as a web page) is displayed.<br/>
                At that point, the engine obtains the contents to display from the widget.<br/>
                For example, the React engine will call the <code>render</code> method of the page widget (which must
                return Html).<br/>
                From there, if the returned Html contains widgets, they will in turn be rendered.</p>
            <p>A widget cannot be instantiated in code i.e. you cannot write:</p>
            <pre>w = MyWidget()</pre>
            <p>Rather, widgets are instantiated by the rendering engine, when the UI is rendered.</p>

            <h3>Derived widgets</h3>
            <p>Prompto fully supports derived widgets i.e. a widget extending an existing one.<br/>
                However multiple inheritance is not supported. Rather, you are encouraged to use composition, which
                we find also works better for UI rendering.</p>
            <h3>Widget attributes</h3>
            <p>As of writing, widgets cannot have attributes. This is planned but not available yet.<br/>
                (reason for this is we are hesitant on how they would be initialized)
            </p>
            <h3>Widget storage</h3>
            <p>Widgets cannot be stored. They are for UI only.</p>
        </>;
    }

}

export default new ThisTopic();