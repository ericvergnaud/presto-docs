import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Advanced");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Advanced sorting</h2>

            <p>For scenarios where <i>natural</i> sorting or simple sorting are not sufficient, prompto supports advanced sorting using the <i>arrow</i> notation.</p>

            <h3>Single variable arrow sorting</h3>

            <p>Single variable arrow sorting is used to return a key from each item in the collection.<br/>
                The returned value must have a natural sort order.
            </p>

            <p>
                As an example, you can sort a Text collection by character count as follows:
            </p>
            <PromptoPlayer sampleUrl="samples/expressions/sort-text-count.pec" runnable={true}/>
            <br/>

            <h3>Double variable arrow sorting</h3>

            <p>For more complex scenarios where no <i>key</i> with a natural sort order can be provided, prompto supports direct comparison of instances.<br/>
                The <i>arrow</i> expression receives 2 items such as <i>a</i> and <i>b</i> which can then be compared.<br/>
                The returned value must be an Integer, as follows:</p>
                <ul>
                    <li>If the value is positive, prompto will treat <i>a</i> as greater than <i>b</i></li>
                    <li>If the value is negative, prompto will treat <i>b</i> as greater than <i>a</i></li>
                    <li>If the value is 0, prompto will treat <i>a</i> and <i>b</i> as equal</li>
                </ul>
            <p>
                In the below example, if a person's name first letter equals the person's city first letter, we sort by city population, otherwise we sort
                by name descending:
            </p>
            <PromptoPlayer lines={32} sampleUrl="samples/expressions/sort-advanced.pec" runnable={true}/>
            <br/>


            </React.Fragment>;
    }

}

export default new ThisTopic();