import React from "react";
import {Carousel, CarouselItem, Popover, PopoverContent, PopoverTitle} from "react-bootstrap";

const imageBoxStyle = { width: "100%", height: "440px", backgroundColor: "dimgray", display: "flex" };
const textBoxStyle = { width: "100%", height: "160px", backgroundColor: "dimgray" };
const imageStyle = { margin: "auto", maxWidth: "90%", maxHeight: "90%"};

export default class ModelSlideshow extends React.Component {

    render() {
        return <Carousel ref="carousel" interval={8000} onSlide={this.willSlide.bind(this)} fade={true}>
            <CarouselItem interval={6000}>{ this.renderMonolith1() }</CarouselItem>
            <CarouselItem interval={2000}>{ this.renderMonolith2() }</CarouselItem>
            <CarouselItem interval={2000}>{ this.renderMonolith3() }</CarouselItem>
            </Carousel>;
    }

    willSlide(target, direction) {
        if(direction === "left" && target === 0)
            ; // this.props.moveNext();
        else if(direction === "right" && target === 7)
            this.props.movePrevious();
    }

    renderMonolith() {
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/model-slides/monolith.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            <Carousel.Caption>
                <h4>Once upon a time, solutions were monolithic</h4>
                due to performance limitations and cost of hardware<br/>
                components of a solution shared the same server and database<br/>
                communication between components was achieved via the database<br/>
            </Carousel.Caption>
        </>;
    }

    renderMonolith1() {
        return <>
            { this.renderMonolith() }
            </>;
    }

    renderMonolith2() {
        const popoverStyle = { top: "300px", left: "550px"};
        return <>
            { this.renderMonolith1() }
            <Popover id="P2" style={popoverStyle} placement="bottom">
                <PopoverTitle >All components of the solution shared the same database</PopoverTitle>
                <PopoverContent>
                    the database was the source of truth for both data and models<br/>
                </PopoverContent>
            </Popover>
        </>;
    }

    renderMonolith3() {
        const popoverStyle = { top: "60px", left: "50px"};
        return <>
            { this.renderMonolith2() }
            <Popover id="P3" style={popoverStyle} placement="left">
                <PopoverTitle >Direct communication between components was rare</PopoverTitle>
                <PopoverContent>
                    the database was used as a communication channel<br/>
                </PopoverContent>
            </Popover>
        </>;
    }

}