import React from "react";
import {Carousel} from "react-bootstrap";

const imageBoxStyle = { width: "100%", height: "440px", backgroundColor: "black", display: "flex" };
const textBoxStyle = { width: "100%", height: "160px", backgroundColor: "dimgray" };
const imageStyle = { margin: "auto", maxWidth: "90%", maxHeight: "90%"};

export default class LanguageRoadShow extends React.Component {

    render() {
        return <Carousel interval={8000}>
            <Carousel.Item>{ this.renderPowerfulLiterals() }</Carousel.Item>
            <Carousel.Item>{ this.renderInlineCss() }</Carousel.Item>
            <Carousel.Item>{ this.renderEverywhere() }</Carousel.Item>
            <Carousel.Item>{ this.renderLocalRemote() }</Carousel.Item>
            <Carousel.Item>{ this.renderStorable1() }</Carousel.Item>
            <Carousel.Item>{ this.renderStorable2() }</Carousel.Item>
            <Carousel.Item>{ this.renderStorable3() }</Carousel.Item>
            <Carousel.Item>{ this.renderDialect1() }</Carousel.Item>
            <Carousel.Item>{ this.renderDialect2() }</Carousel.Item>
            <Carousel.Item>{ this.renderDialect3() }</Carousel.Item>
        </Carousel>;
    }

    renderDialect3() {
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/language-roadshow/dialect-E.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            <Carousel.Caption>
                <h4>Show your code to your clients</h4>
                meet Engly, the dialect that makes Prompto code read like english!<br/>
                it requires more typing, but it's explicit about what the code means<br/>
                that proves very convenient when you need to share business logic with non-coders<br/>
            </Carousel.Caption>
        </>;
    }

    renderDialect2() {
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/language-roadshow/dialect-O.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            <Carousel.Caption>
                <h4>Switch dialect any time</h4>
                you've already met Objy, a dialect that adopts C-style syntax<br/>
                if your colleagues prefer writing in a different dialect, you can read their code in the dialect of your choice<br/>
                you can switch dialect any time, your code is translated automatically<br/>
            </Carousel.Caption>
        </>;
    }

    renderDialect1() {
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/language-roadshow/dialect-M.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            <Carousel.Caption>
                <h4>We respect your taste</h4>
                Prompto is about a new way of building apps, not about syntax<br/>
                so if you favor indents over curly braces you are welcome<br/>
                meet Monty, 1 of the 3 Prompto dialects<br/>
            </Carousel.Caption>
        </>;
    }

    renderStorable3() {
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/language-roadshow/storable-3.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            <Carousel.Caption>
                <h4>Fetch data seamlessly from your web page</h4>
                write queries in the UI, and run them asynchronously on the server<br/>
                no more insecure string based queries: queries are checked as you code them<br/>
                and no need to create web services for data, they're built-in<br/>
            </Carousel.Caption>
        </>;
    }

    renderStorable2() {
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/language-roadshow/storable-2.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            <Carousel.Caption>
                <h4>Storing data has never been simpler!</h4>
                simply populate your instances, then call <code>store</code><br/>
                you can delete and store multiple instances in one statement<br/>
                this provides ACID consistency (if supported by the data store)<br/>
            </Carousel.Caption>
        </>;
    }

    renderStorable1() {
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/language-roadshow/storable-1.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            <Carousel.Caption>
                <h4>Define the schema of your stored data in your code!</h4>
                mark attributes (a.k.a. fields, columns or members) as <code>storable</code><br/>
                mark categories (a.k.a. classes) as <code>storable</code><br/>
                your schema is defined! (and in sync with your code)<br/>
            </Carousel.Caption>
        </>;
    }

    renderLocalRemote() {
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/language-roadshow/local-remote.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            <Carousel.Caption>
                <h4>Call server code from your web page</h4>
                move execution of slow running code to asynchronous server execution in one keyword<br/>
                the executed code itself does not need to change<br/>
                <i>(not suggesting that moving the above code to the server is required)</i><br/>
            </Carousel.Caption>
        </>;
    }

    renderEverywhere() {
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/language-roadshow/everywhere.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            <Carousel.Caption>
                <h4>The same code runs everywhere</h4>
                thanks to its polyglot native bindings, Prompto can run anywhere<br/>
                your models and your code are the same in the browser, on the server or in a forked process<br/>
                <font><i>(C# code above abbreviated for presentation)</i></font><br/>
            </Carousel.Caption>
        </>;
    }

    renderPowerfulLiterals() {
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/language-roadshow/literals.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            <Carousel.Caption>
                <h4>Powerful data literals</h4>
                list, set, dict, document: choose your collection literal<br/>
                date, time, dateTime and period literals that conform to ISO 8601<br/>
                you also have version or uuid literals<br/>
            </Carousel.Caption>
        </>;
    }

    renderInlineCss() {
        return <>
                <div style={imageBoxStyle}>
                    <img src="/img/language-roadshow/inline-css.png" style={imageStyle} alt=""/>
                </div>
                <div style={textBoxStyle}>
                </div>
                <Carousel.Caption>
                    <h4>CSS literals in your code</h4>
                    discover the power of inline CSS literals for styles used only once<br/>
                    removes the need to create indirections to ever-growing CSS files<br/>
                    you can add local CSS styles to build conditional styles<br/>
                </Carousel.Caption>
            </>;
    }

}