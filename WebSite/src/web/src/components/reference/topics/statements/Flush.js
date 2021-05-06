import React from 'react';
import PromptoPlayer from "../../../player/PromptoPlayer";
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Flush");
    }

    renderContent(topicSelected) {
        return <>
            <h2>Flush statements</h2>

            <p>The Prompto language comes with a built-in data storage mechanism.</p>>
            <p>
                This mechanism relies on 3rd party data store implementations. Which data store technology is effectively used is determined through configuration.
                Without configuration, Prompto uses a built-in in-memory non persistent data store, which helps get started and run tests, but is not supported for production.
            </p>

            <p>A data store generally provides guarantees of availability, scalability and consistency.
                However, from a programming language standpoint, the only relevant characteristic is consistency aka ACID (Atomicity, Consistency, Isolation, Durability).
                Many data stores provide consistency through transactions, however this does not scale well.
                Instead, other data stores provide consistency using grouped CRUD operations (<b>CR</b>eate, <b>U</b>pdate, <b>D</b>elete).
                To ensure compatibility with most data stores, Prompto only requires the data store to support consistency, not transactions.
            </p>

            <p>However, some data stores only provide <i>asynchronous</i> consistency of CRUD operations.
                As an example, SOLR and Elastic Search index data asynchronously, which has the unfortunate consequence that newly inserted data may not be found
                by indexed queries ran immediately after storing the data.
            </p>

            <p>The <code>flush</code> statement instructs the data store to synchronously flush any pending operation, thus ensuring
                that all data previously inserted can be accessed by queries.</p>
            <p>A flush statement has the form <code>flush</code>.</p>
            <p>Flush statements should be used with parcimony, as they may slow down storage dramatically, depending on the data store used.</p>
            <p>If you find yourself calling <code>flush</code> after every <code>store</code> statement, you probably want to revisit your architecture.</p>

            <h3>
                Flushing the store
            </h3>
            <p>Prompto instructs the store to flush its data as follows:</p>

            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/statements/flush.pec" runnable={true}/>
        </>;
    }

}

export default new ThisTopic();