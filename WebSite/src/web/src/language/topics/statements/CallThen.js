import React from 'react';
import Topic from "../Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";
import {NavItem} from "react-bootstrap";

class ThisTopic extends Topic {

    constructor() {
        super("Call then");
    }

    renderItem(topicSelected, level) {
        return <NavItem key={this.title} onClick={()=>topicSelected(this)}><i>Call</i> then</NavItem>;
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            TODO
            <PromptoPlayer sampleUrl="samples/types/date/attributes.pec" runnable={true}/>
            </React.Fragment>;
    }

}

export default new ThisTopic();