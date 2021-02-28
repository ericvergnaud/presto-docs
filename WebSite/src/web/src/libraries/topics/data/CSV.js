import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("CSV");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
                    <h2>Reading CSV</h2>
                    <p>Prompto is able to analyze CSV data provided as Text.<br/>
                        The Text itself should be read from resources using <code>read</code> statements.<br/>
                        <i>(support for parsing CSV resources directly is not available yet)</i></p>
                    <h3>CSV methods</h3>
                    <ul>
                        <li><p><b>readCsv</b> <i>text, columnNames, separator, quote</i>:<br/>
                            This method returns a <code>Document[]</code> i.e. a list of Documents.<br/>
                        </p>
                            <pre>{String.raw`define readCsv as native method receiving text, Text<:> columnNames = nothing, Character separator = ',', Character quote = '"' returning Document[]`}</pre>
                            <p>
                                The <i>text</i> argument must contain valid CSV text.<br/>
                                The <i>columnNames</i> argument is optional. When provided it is used to rename incoming columns.<br/>
                                The <i>separator</i> optional argument is used to detect <i>fields</i> within a CSV <i>record</i>.<br/>
                                The <i>quote</i> optional argument is used to unwrap field values.<br/>
                                Here is a simple example:</p>
                            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/data/csvSimple.pec" runnable={true}/>
                            <p/>
                            <p>Here is an example of mapping column names:</p>
                            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/data/csvMapping.pec" runnable={true}/>
                            <p><i>Notice how the "Code" column was renamed to "id"</i></p>
                            <p/>
                        </li>
                        <li><p><b>iterateCsv</b> <i>text, columnNames, separator, quote</i>:<br/>
                            This method is similar to <code>readCsv</code>, but returns an <code>Iterator&lt;Document&gt;</code>, which is convenient and consumes less memory.<br/>
                            Here is an example:</p>
                            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/data/csvIterate.pec" runnable={true}/>
                        <p/>
                        </li>
                    </ul>

            </React.Fragment>;
    }

}

export default new ThisTopic();