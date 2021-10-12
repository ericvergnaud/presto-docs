import React from 'react';
import PromptoPlayer from "../../../player/PromptoPlayer";
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Store");
    }

    renderContent(topicSelected) {
        return <>

            <h2>Delete and store statement</h2>

            <p>The Prompto language comes with a built-in data storage mechanism.</p>
            <p>
                This mechanism relies on 3rd party data store implementations. Which data store technology is
                effectively used is determined through configuration.
                Without configuration, Prompto uses a built-in in-memory non persistent data store, which helps get
                started and run tests, but is not supported for production.
            </p>

            <p>A data store generally provides guarantees of availability, scalability and consistency.
                However, from a programming language standpoint, the only relevant characteristic is consistency aka
                ACID (Atomicity, Consistency, Isolation, Durability).
                Many data stores provide consistency through transactions, however this does not scale well.
                Instead, other data stores provide consistency using grouped CRUD operations
                (<b>CR</b>eate, <b>U</b>pdate, <b>D</b>elete).
                To ensure compatibility with most data stores, Prompto only requires the data store to support
                consistency, not transactions.
                Prompto also caters for asynchronous consistency of certain data stores, using
                the <code>flush</code> statement.</p>
            <p>Consistency in Prompto is achieved by grouping multiple CRUD operations in a single statement. A delete
                and store statement allows such grouping.</p>
            <p>A delete and store statement has the form <code>store <i>obj1, obj2 ... objn</i></code> optionally
                preceded by <code>delete <i>obj1, obj2 ... objn</i></code> optionally followed by <code>with metadata <i>metadata</i></code>
                where <code>obj<i>i</i></code> is any valid category or category collection expression and <code>metadata</code> is a Document expression.
            </p>

            <h3>
                Storing new objects
            </h3>
            <p>Prompto can store any object for which the category is marked as <code><i>storable</i></code>, as
                follows:</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={8} sampleUrl="samples/statements/store-create.pec" runnable={true}/>
            <br/>

            <h3>
                Updating existing objects
            </h3>
            <p>Prompto storable objects have a built-in database id attribute, namely <code>dbId</code> provided by the
                data store.
                Only objects fetched from the store can be updated, and those objects carry their <code>dbId</code>.
                These objects must also be mutable, so the language is allowed to modify attribute values.<br/>
                Updating these objects can be simply done by storing them, as follows:</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={12} sampleUrl="samples/statements/store-update.pec" runnable={true}/>
            <br/>

            <h3>
                Deleting objects
            </h3>
            <p>Prompto storable objects have a built-in database id attribute, namely <code>dbId</code> provided by the
                data store.
                Only objects fetched from the store can be deleted, and those objects carry their <code>dbId</code>.
                Deleting these objects can be simply done as follows:</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={12} sampleUrl="samples/statements/delete.pec" runnable={true}/>
            <br/>

            <h3>
                Deleting and storing atomically.
            </h3>
            <p>To ensure consistency of data, Prompto supports deleting and storing multiple objects in a single
                statement, as follows:</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={12} sampleUrl="samples/statements/delete-store.pec" runnable={true}/>
            <br/>

            <h3>
                Metadata
            </h3>
            <p>If audit is enabled (and supported by the data store), Prompto can store metadata for each <code>delete and store</code> statement</p>
            <p>To learn more about audit, read the Library -> Audit section.</p>
            <p>Metadata is simply a Document, which can contain any data, such as the user or process initiating the change,
                the reason for the change and/or any data useful to track data changes</p>
            <p>To populate metadata, simply append <code>with metadata ( <i>metadata</i> )</code> to the <code>delete and store</code> statement, as follows:</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={16} sampleUrl="samples/statements/store-metadata.pec" runnable={true}/>
        </>;
    }

}

export default new ThisTopic();