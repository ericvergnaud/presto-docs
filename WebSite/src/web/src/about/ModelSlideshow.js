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
            <CarouselItem interval={8000}>{this.renderMonolith1()}</CarouselItem>
            <CarouselItem interval={4000}>{this.renderMonolith2()}</CarouselItem>
            <CarouselItem interval={4000}>{this.renderMonolith3()}</CarouselItem>
            <CarouselItem interval={2000}>{this.renderMonolith4()}</CarouselItem>
            <CarouselItem interval={1000}>{this.renderMonolith5()}</CarouselItem>
            <CarouselItem interval={1000}>{this.renderMonolith6()}</CarouselItem>
            <CarouselItem interval={4000}>{this.renderMonolith7()}</CarouselItem>
            <CarouselItem interval={6000}>{this.renderDistributed1()}</CarouselItem>
            <CarouselItem interval={4000}>{this.renderDistributed2()}</CarouselItem>
            <CarouselItem interval={4000}>{this.renderDistributed3()}</CarouselItem>
            <CarouselItem interval={4000}>{this.renderDistributed4()}</CarouselItem>
            <CarouselItem interval={4000}>{this.renderDataTransfer1()}</CarouselItem>
            <CarouselItem interval={4000}>{this.renderDataTransfer2()}</CarouselItem>
            <CarouselItem interval={4000}>{this.renderDataTransfer3()}</CarouselItem>
            <CarouselItem interval={4000}>{this.renderDataTransfer4()}</CarouselItem>
            <CarouselItem interval={4000}>{this.renderDataTransfer5()}</CarouselItem>
            <CarouselItem interval={8000}>{this.renderDataTransfer6()}</CarouselItem>
        </Carousel>;
    }

    willSlide(target, direction) {
        if (direction === "left" && target === 0)
           ; // this.props.moveNext();
        else if (direction === "right" && target === 7)
            this.props.movePrevious();
     }

    renderMonolithImage(renderTooltips) {
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/model-slides/monolith.png" style={imageStyle} alt=""/>
                { renderTooltips && renderTooltips() }
            </div>
            <div style={textBoxStyle}>
            </div>
        </>;
    }

    renderMonolithCaption() {
        return <Carousel.Caption>
                <h4>Once upon a time, solutions were monolithic</h4>
                due to performance limitations and cost of hardware<br/>
                components of a solution share a single database<br/>
                they communicate via the database<br/>
            </Carousel.Caption>;
    }

    renderMonolithTooltips1() {
        return <>
                <div key="tip1Div" className="model-tip" style={{left: "270px", top: "210px"}}>Job scheduler</div>
                <div key="tip2Div" className="model-tip" style={{left: "605px", top: "115px"}}>Statement producer</div>
        </>;
    }

    renderMonolith1() {
        return <>
            {this.renderMonolithImage(this.renderMonolithTooltips1)}
            {this.renderMonolithCaption()}
        </>;
    }

    renderMonolithPopover2() {
        const popoverStyle = {top: "300px", left: "550px"};
         return <Popover id="P2" style={popoverStyle} placement="bottom">
             <PopoverTitle>All components of the solution share the same database</PopoverTitle>
             <PopoverContent>
                 the database is the source of truth for both data and models<br/>
             </PopoverContent>
         </Popover>;

    }

    renderMonolith2() {
        return <>
            {this.renderMonolithImage(this.renderMonolithTooltips1)}
            {this.renderMonolithCaption()}
            {this.renderMonolithPopover2()}
        </>;
    }

    renderMonolithPopover3() {
        const popoverStyle = {top: "60px", left: "50px"};
        return <Popover id="P3" style={popoverStyle} placement="left">
            <PopoverTitle>Direct communication between components is rare</PopoverTitle>
            <PopoverContent>
                the database is used as a communication channel<br/>
            </PopoverContent>
        </Popover>;
    }

    renderMonolith3() {
        return <>
            {this.renderMonolithImage(null)}
            {this.renderMonolithCaption()}
            {this.renderMonolithPopover2()}
            {this.renderMonolithPopover3()}
        </>;
    }

    renderMonolith4(renderTooltips) {
        return <>
            {this.renderMonolithImage(renderTooltips)}
            <Carousel.Caption>
                <h4>Monolithic solutions are problematic</h4>
                components use a database not fit for purpose<br/>
                the cost of change is exponential because it impacts all components<br/>
                they do not scale well because the database is central<br/>
            </Carousel.Caption>
         </>;
    }

    renderMonolithTooltips5() {
        return <div key="tip4Div" className="model-tip" style={{left: "400px", top: "45px"}}>Web search</div>;
    }

    renderMonolith5() {
         return this.renderMonolith4(this.renderMonolithTooltips5.bind(this));
    }

    renderMonolithTooltips6() {
        return <>
            { this.renderMonolithTooltips5()}
            <div key="tip5Div" className="model-tip" style={{left: "300px", top: "250px"}}>Data analytics</div>
        </>;
    }

    renderMonolith6() {
        return this.renderMonolith4(this.renderMonolithTooltips6.bind(this));
    }

    renderMonolithTooltips7() {
        return <>
            { this.renderMonolithTooltips6()}
            <div key="tip6Div" className="model-tip" style={{left: "605px", top: "320px"}}>Transaction processing</div>
        </>;
    }

    renderMonolith7() {
        return this.renderMonolith4(this.renderMonolithTooltips7.bind(this));
    }

    renderDistributed1() {
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/model-slides/distributed.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            <Carousel.Caption>
                <h4>Solutions now follow micro-services architecture</h4>
                each component has its own fit for purpose data store<br/>
                scalability is enabled by just adding cheap hardware<br/>
                components communicate via network or messaging protocols<br/>
            </Carousel.Caption>
        </>;
    }

    renderDistributedPopover2() {
        const popoverStyle = {top: "50px", left: "180px"};
        return <Popover id="P3" style={popoverStyle} placement="left">
            <PopoverTitle>The web site benefits from a search engine</PopoverTitle>
            <PopoverContent>
                the data store (SOLR, Elastic...) is optimized for natural language queries <br/>
            </PopoverContent>
        </Popover>;
    }

    renderDistributed2() {
        return <>
            { this.renderDistributed1() }
            { this.renderDistributedPopover2() }
        </>;
    }

    renderDistributedPopover3() {
        const popoverStyle = {top: "270px", left: "610px"};
        return <Popover id="P3" style={popoverStyle} placement="right">
            <PopoverTitle>Transaction processing requires an ACID data store </PopoverTitle>
            <PopoverContent>
                the data store (Mongo, Datomic...) is optimized for consistency<br/>
            </PopoverContent>
        </Popover>;
    }

    renderDistributed3() {
        return <>
            { this.renderDistributed1() }
            { this.renderDistributedPopover3() }
        </>;
    }

    renderDistributedPopover4() {
        const popoverStyle = {top: "290px", left: "80px"};
        return <Popover id="P3" style={popoverStyle} placement="left">
            <PopoverTitle>Data analytics benefits from a big data or OLAP data store</PopoverTitle>
            <PopoverContent>
                the analytics data store (HBase, Druid...) is optimized for large data sets<br/>
            </PopoverContent>
        </Popover>;
    }

    renderDistributed4() {
        return <>
            { this.renderDistributed1() }
            { this.renderDistributedPopover4() }
        </>;
    }

    renderDataTransferCaption1() {
         return <Carousel.Caption>
             <h4>A new problem arises: data transfer</h4>
             components still need access to data they don't master<br/>
             but "Anyone who doesn’t <i>[use APIs]</i> will be fired" - Jeff Bezos (2002)<br/>
             whilst most communications between components are about data<br/>
         </Carousel.Caption>;

    }

    renderDataTransfer1() {
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/model-slides/distributed.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            { this.renderDataTransferCaption1()}
        </>;
    }

    renderDataTransfer2() {
        const popoverStyle = {top: "150px", left: "190px"};
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/model-slides/distributed-arrow-1.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            { this.renderDataTransferCaption1()}
            <Popover id="DT2" style={popoverStyle} placement="left">
                <PopoverTitle>Transactions data transfer</PopoverTitle>
                <PopoverContent>
                    the statement generator needs transactions data from the transactions processor<br/>
                </PopoverContent>
            </Popover>
        </>;
    }

    renderDataTransfer3() {
        const popoverStyle = {top: "80px", left: "500px"};
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/model-slides/distributed-arrow-2.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            { this.renderDataTransferCaption1()}
            <Popover id="DT3" style={popoverStyle} placement="top">
                <PopoverTitle>Balances data transfer</PopoverTitle>
                <PopoverContent>
                    the transaction processor needs data from the data analytics engine<br/>
                </PopoverContent>
            </Popover>
        </>;
    }

    renderDataTransfer4() {
        const popoverStyle = {top: "240px", left: "540px"};
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/model-slides/distributed-arrow-3.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            { this.renderDataTransferCaption1()}
            <Popover id="DT4" style={popoverStyle} placement="right">
                <PopoverTitle>Analytics data transfer</PopoverTitle>
                <PopoverContent>
                    the recommendation engine needs data from the data analytics engine<br/>
                </PopoverContent>
            </Popover>
        </>;
    }

    renderDataTransfer5() {
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/model-slides/distributed.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            <Carousel.Caption>
                <h4>There is no clear data model anymore</h4>
                every component defines its data model in isolation<br/>
                a lot of costly development time is spent "mapping" data<br/>
                none of this creates value and it puts the solution at risk<br/>
            </Carousel.Caption>
            <div key="tip1Div" className="model-tip" style={{left: "270px", top: "210px"}}>I'm the source of truth</div>
            <div key="tip2Div" className="model-tip" style={{left: "605px", top: "115px"}}>Sorry mate, I'm the source of truth</div>
            <div key="tip3Div" className="model-tip" style={{left: "400px", top: "45px"}}>My model is so much better!</div>
            <div key="tip6Div" className="model-tip" style={{left: "520px", top: "320px"}}>I don't care, stop talking to me!</div>
        </>;
    }

    renderDataTransfer6() {
        return <>
            <div style={imageBoxStyle}>
                <img src="/img/model-slides/distributed-seamless.png" style={imageStyle} alt=""/>
            </div>
            <div style={textBoxStyle}>
            </div>
            <Carousel.Caption>
                <h4>Eliminate the data transfer maze</h4>
                Prompto's unique data model makes it easy to transfer data<br/>
                across heteregenous data stores: Mongo, Elastic, HBase...<br/>
                thus maximizing the flexibility of micro services<br/>
            </Carousel.Caption>
        </>;
    }

}