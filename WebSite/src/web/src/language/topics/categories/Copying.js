import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Copying");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Copying objects i.e. creating objects from existing ones</h2>

            <p>In Prompto, attributes are semantic types i.e. they have the same meaning across the entire solution.</p>
            <p>This enables powerful features such as automatically copying attribute values between independent
                objects.</p>
            <p>In the below example, we:</p>
            <ul>
                <li>define a Candidate category</li>
                <li>define an Employee category</li>
                <li>create a Candidate: john</li>
                <li>create an Employee: new_joiner, copied from john</li>
            </ul>
            <PromptoPlayer lines={10} sampleUrl="samples/categories/copy-employee.pec" runnable={true}/>
            <br/>

            <h3>Populating additional attribute values when copying objects</h3>
            <p>On top of copying values, you may need to populate additional attribute values:</p>
            <PromptoPlayer lines={10} sampleUrl="samples/categories/copy-enrich.pec" runnable={true}/>
            <br/>

            <h3>Overwriting attribute values when copying objects</h3>
            <p>Eventually, you might need to overwrite existing values:</p>
            <PromptoPlayer lines={10} sampleUrl="samples/categories/copy-overwrite.pec" runnable={true}/>
            <br/>
        </React.Fragment>;
    }

}

export default new ThisTopic();