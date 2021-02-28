import React from "react";
import {
    Carousel,
    CarouselItem,
    Popover,
    PopoverContent,
    PopoverTitle
} from "react-bootstrap";

const imageBoxStyle = { width: "100%", height: "440px", backgroundColor: "dimgray", display: "flex" };
const textBoxStyle = { width: "100%", height: "160px", backgroundColor: "dimgray" };
const imageStyle = { margin: "auto", maxWidth: "90%", maxHeight: "90%"};

export default class ModelSlideshow extends React.Component {

     render() {
        return <Carousel ref="carousel" interval={8000} onSlide={this.willSlide.bind(this)} fade={true}>
            <CarouselItem interval={6000}>{this.renderMonolith1()}</CarouselItem>
            <CarouselItem interval={4000}>{this.renderMonolith2()}</CarouselItem>
            <CarouselItem interval={4000}>{this.renderMonolith3()}</CarouselItem>
            <CarouselItem>{this.renderDistributed()}</CarouselItem>
        </Carousel>;
    }

    willSlide(target, direction) {
        if (direction === "left" && target === 0)
           ; // this.props.moveNext();
        else if (direction === "right" && target === 7)
            this.props.movePrevious();
     }

    renderMonolith(showTooltips) {
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/model-slides/monolith.png" style={imageStyle} alt=""/>
                { this.renderMonolithTooltips() }
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

    renderMonolithTooltips() {
        return <>
                <div key="tip1Div" className="model-tip" style={{left: "270px", top: "210px"}}>Job scheduler</div>
                <div key="tip2Div" className="model-tip" style={{left: "605px", top: "115px"}}>Statement producer</div>
        </>;
    }

    renderMonolith1() {
        return <>
            {this.renderMonolith(true)}
        </>;
    }

    renderMonolith2() {
        const popoverStyle = {top: "300px", left: "550px"};
        return <>
            {this.renderMonolith(false)}
            <Popover id="P2" style={popoverStyle} placement="bottom">
                <PopoverTitle>All components of the solution share the same database</PopoverTitle>
                <PopoverContent>
                    the database is the source of truth for both data and models<br/>
                </PopoverContent>
            </Popover>
        </>;
    }

    renderMonolith3() {
        const popoverStyle = {top: "60px", left: "50px"};
        return <>
            {this.renderMonolith2()}
            <Popover id="P3" style={popoverStyle} placement="left">
                <PopoverTitle>Direct communication between components is rare</PopoverTitle>
                <PopoverContent>
                    the database is used as a communication channel<br/>
                </PopoverContent>
            </Popover>
        </>;
    }

    renderDistributed() {
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/model-slides/distributed.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            <Carousel.Caption>
                <h4>Micro-services architecture enable scalability and rapid change</h4>
                due to performance limitations and cost of hardware<br/>
                components of a solution shared the same server and database<br/>
                communication between components was achieved via the database<br/>
            </Carousel.Caption>
        </>;

    }
}