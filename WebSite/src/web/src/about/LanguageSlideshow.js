import React from "react";
import {Carousel, Popover, PopoverContent, PopoverTitle} from "react-bootstrap";

const imageBoxStyle = { width: "100%", height: "440px", backgroundColor: "black", display: "flex" };
const textBoxStyle = { width: "100%", height: "160px", backgroundColor: "dimgray" };
const imageStyle = { margin: "auto", maxWidth: "90%", maxHeight: "90%"};

export default class LanguageSlideshow extends React.Component {

    render() {
        return <Carousel ref="carousel" interval={8000} onSlide={this.willSlide.bind(this)} >
            <Carousel.Item>{ this.renderInlineCss() }</Carousel.Item>
            <Carousel.Item>{ this.renderPowerfulLiterals() }</Carousel.Item>
            <Carousel.Item>{ this.renderEverywhere() }</Carousel.Item>
            <Carousel.Item>{ this.renderLocalRemote() }</Carousel.Item>
            <Carousel.Item>{ this.renderStorable1() }</Carousel.Item>
            <Carousel.Item>{ this.renderStorable2() }</Carousel.Item>
            <Carousel.Item>{ this.renderStorable3() }</Carousel.Item>
            <Carousel.Item>{ this.renderTesting() }</Carousel.Item>
            <Carousel.Item>{ this.renderFullStack() }</Carousel.Item>
            <Carousel.Item>{ this.renderDialect1() }</Carousel.Item>
            <Carousel.Item>{ this.renderDialect2() }</Carousel.Item>
            <Carousel.Item>{ this.renderDialect3() }</Carousel.Item>
        </Carousel>;
    }

    willSlide(target, direction) {
        if(direction === "left" && target === 0)
            this.props.moveNext();
        else if(direction === "right" && target === 11)
            this.props.movePrevious();
    }

    renderInlineCss() {
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/language-slides/inline-css.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            <Carousel.Caption>
                <h4>Write HTML and CSS literals in code</h4>
                Prompto natively supports HTML literals<br/>
                discover the power of plain CSS literals for styles used only once<br/>
                you can combine local CSS styles to build conditional styles<br/>
            </Carousel.Caption>
        </>;
    }

    renderPowerfulLiterals() {
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/language-slides/literals.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            <Carousel.Caption>
                <h4>Enjoy powerful data literals</h4>
                list, set, dict, document: choose your collection literal<br/>
                date, time, dateTime and period literals that conform to ISO 8601<br/>
                you also have version or uuid literals<br/>
            </Carousel.Caption>
        </>;
    }

    renderEverywhere() {
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/language-slides/everywhere.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            <Carousel.Caption>
                <h4>Run the same code everywhere</h4>
                thanks to its polyglot native bindings, Prompto can run anywhere<br/>
                your models and your code are the same in the browser, on the server or in a forked process<br/>
                <font><i>(C# code above abbreviated for presentation)</i></font><br/>
            </Carousel.Caption>
        </>;
    }

    renderLocalRemote() {
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/language-slides/local-remote.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            <Carousel.Caption>
                <h4>Call server code from your web page</h4>
                decide where code is executed (locally or remotely) with just one keyword<br/>
                the executed code itself does not need to change<br/>
                and you can change your mind anytime<br/>
            </Carousel.Caption>
        </>;
    }

    renderStorable1() {
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/language-slides/storable-1.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            <Carousel.Caption>
                <h4>Define the schema of your stored data in application code</h4>
                mark attributes (a.k.a. fields, columns or members) as <code>storable</code><br/>
                mark categories (a.k.a. classes) as <code>storable</code><br/>
                your schema is defined! (and in sync with your code)<br/>
            </Carousel.Caption>
        </>;
    }

    renderStorable2() {
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/language-slides/storable-2.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            <Carousel.Caption>
                <h4>Store data in one statement</h4>
                simply populate your instances, then call <code>store</code><br/>
                you can delete and store multiple instances in one statement<br/>
                this provides ACID consistency (if supported by the back-end data store)<br/>
            </Carousel.Caption>
        </>;
    }

    renderStorable3() {
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/language-slides/storable-3.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            <Carousel.Caption>
                <h4>Fetch data directly from your web page</h4>
                write queries in the UI, and run them asynchronously on the server<br/>
                no more insecure string based queries: queries are checked as you code them<br/>
                no need to create CRUD web services either, they're built-in<br/>
            </Carousel.Caption>
        </>;
    }

    renderTesting() {
        const popStyle = { top: "160px", left: "480px", maxWidth: "500px"};
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/language-slides/test-method.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            <Carousel.Caption>
                <h4>Feel the ease of a built-in testing framework</h4>
                write tests that can run in the browser or on a server<br/>
                each test run benefits from isolated in-memory storage<br/>
                test verification survives assertion failures<br/>
            </Carousel.Caption>
            <Popover id="test" style={popStyle}>
                <PopoverTitle placement="right">Test methods survive assertion failures"</PopoverTitle>
                <PopoverContent>
                    <img src="/img/language-slides/test-result.png" alt=""/>
                </PopoverContent>
            </Popover>
        </>;
    }

    renderFullStack() {
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/language-slides/full-stack.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            <Carousel.Caption>
                <h4>Enjoy the power of a full stack language</h4>
                automatically share data models, business logic and queries across components<br/>
                exchange data between components without writing code<br/>
                move execution from one component to another seamlessly<br/>
            </Carousel.Caption>
        </>;
    }

    renderDialect1() {
        const popoverStyle = { top: "100px", left: "650px"};
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/language-slides/dialect-M.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            <Carousel.Caption>
                <h4>Stick to your coding style</h4>
                Prompto is about a new way of manipulating data, not about syntax<br/>
                so if you favor indents over curly braces you are welcome (and conversely)<br/>
                meet Monty, 1 of the 3 Prompto dialects<br/>
            </Carousel.Caption>
            <Popover id="M" style={popoverStyle} placement="right">
                <PopoverTitle >Some code in Monty dialect</PopoverTitle>
                <PopoverContent>
                    colons and indents<br/>
                    python operators: '==', '!=', 'and', 'or'<br/>
                </PopoverContent>
                </Popover>
        </>;
    }

    renderDialect2() {
        const popoverStyle = { top: "60px", left: "700px"};
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/language-slides/dialect-O.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            <Carousel.Caption>
                <h4>Switch dialect any time</h4>
                you've already met Objy, a dialect that follows C-style syntax<br/>
                do your team mates prefer writing code using other dialects? That's ok!<br/>
                you can switch dialect any time, the code is translated automatically<br/>
            </Carousel.Caption>
            <Popover id="O" style={popoverStyle} placement="top">
                <PopoverTitle >The same code in Objy dialect</PopoverTitle>
                <PopoverContent>
                    curly braces, semi-colons<br/>
                    c-style operators: '==', '!=', '&&', '||'<br/>
                </PopoverContent>
            </Popover>
        </>;
    }

    renderDialect3() {
        const popoverStyle = { top: "300px", left: "450px"};
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/language-slides/dialect-E.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            <Carousel.Caption>
                <h4>Share your code with clients</h4>
                meet Engly, the dialect that makes Prompto code read like english!<br/>
                it requires more typing, but it's explicit about what the code means<br/>
                that proves very convenient when you need to share business logic with non-coders<br/>
            </Carousel.Caption>
            <Popover id="E" style={popoverStyle} placement="bottom">
                <PopoverTitle >The same code in Engly dialect</PopoverTitle>
                <PopoverContent>
                    colons and indents, no parenthesis<br/>
                    natural operators: '=', '&lt;>', 'and', 'or'<br/>
                </PopoverContent>
            </Popover>
        </>;
    }


}