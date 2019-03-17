import React from 'react';
import Topic from "../Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Fetch");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Fetch expressions</h2>

            <p>Fetch expressions are used to fetch objects from the data store.</p>

            <h3>
                Fetching one object
            </h3>
            <p>Fetching one object from the store produces an object which can then be used as an input for other
                constructs.<br/>
                Such an expression has the form <code>fetch one where <i>predicate</i> (
                    and/or <i>predicate</i> )</code>,
                where <code><i>predicate</i></code> is a boolean expression in which any attribute can be used to filter
                the data.</p>
            <p>The type of the object retrieved is the type it had the last time the object was stored (or null if no
                object was found).
            </p>
            <PromptoPlayer lines={10} sampleUrl="samples/expressions/fetch-one-any.pec" runnable={true}
                           with-framework={true}/>
            <br/>

            <h3>
                Fetching one object with a given category
            </h3>
            <p>Fetch expressions can be specialized to return an object of a given user type.<br/>
                The type of the variable to which the object is assigned is the specified user type.<br/>
                The type of the object retrieved is the type it had the last time the object was stored (or null if
                no
                object was found).<br/>
                The type is specified as follows:
            </p>
            <PromptoPlayer lines={12} sampleUrl="samples/expressions/fetch-one-type.pec" runnable={true}
                           with-framework={true}/>
            <br/>

            <h3>
                Fetching multiple objects
            </h3>
            <p>Fetching multiple objects from the store produces a Cursor which can be used as an input for
                iterating constructs.<br/>
                Such an expression has the form <code>fetch all where <i>predicate</i> (
                    and/or <i>predicate</i> )</code>,
                where <code><i>predicate</i></code> is a boolean expression in which any attribute can be used
                to
                filter the data.</p>
            <p>The type of each object retrieved is the type it had the last time the object was stored.
            </p>
            <PromptoPlayer lines={14} sampleUrl="samples/expressions/fetch-all-any.pec" runnable={true}
                           with-framework={true}/>
            <br/>

            <h3>
                Fetching multiple objects with a given category
            </h3>
            <p>Similarly to fetching one object, fetching multiple objects expressions can be specialized to
                return
                only objects of a given user type.<br/>
                The item type of the cursor to which the object is assigned is the specified user type.<br/>
                The type of each object retrieved is the type the object had the last time the object was
                stored.<br/>
                The type is specified as follows:
            </p>
            <PromptoPlayer lines={14} sampleUrl="samples/expressions/fetch-all-type.pec" runnable={true}
                           with-framework={true}/>

            <p>When running the above example, you'll notice that Person "Sophie" is not returned
                because it is
                not a Member.</p>
            <p>Searching on child fields is not supported yet (it depends heaviliy on the Store
                implementation capabilities).</p>
            <br/>

            <h3>
                Sorting fetched objects
            </h3>
            <p>When fetching multiple objects, Prompto lets you specify the order in which the objects
                are retrieved.<br/>
                This is done by specifying one or more sort attributes, and the sort direction, as
                follows:
            </p>
            <PromptoPlayer lines={16} sampleUrl="samples/expressions/fetch-sorted.pec" runnable={true}
                           with-framework={true}/>

            <p>Sorting on child fields is not supported yet (it depends heaviliy on the Store
                implementation capabilities).</p>
            <br/>

            <h3>Paging results</h3>
            <p>When fetching a large number of objects, it can be convenient to only retrieve a
                subset of them.<br/>
            his is particularly convenient when paging results in a web site.<br/>
            Prompto lets you specify a slice of objects to be retrieved, as follows:</p>
            <PromptoPlayer lines={20} sampleUrl="samples/expressions/fetch-paged.pec" runnable={true}
                           with-framework={true}/>

            <p>Additionally, the Cursor object returned by the fetch expression has 2
                attributes: <code>count</code> and <code>totalCount</code>,
                which can be used to know how many objects are being returned, and how many
                objects in the Store satisfy the query before slicing.</p>


        </React.Fragment>;
    }

}

export default new ThisTopic();