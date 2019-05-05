import React from 'react';
import Topic from "../../../components/Topic";
import SortNatural from "./SortNatural";
import SortCustom from "./SortCustom";
import SortAdvanced from "./SortAdvanced";

class ThisTopic extends Topic {

    constructor() {
        super("Sort", [SortNatural, SortCustom, SortAdvanced]);
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Sort expressions</h2>

            <p>Sort expressions are used to produce a sorted list from an existing collection.<br/>
                A Sort expression is a code fragment which produces a list, whose item type is the same as the item
                type of the collection being sorted,
                which can then be used as an input for other operations: print, write, method call and so forth.<br/>
                A Sort expression has the form <code>sorted <i>collection</i></code>
                where <code>collection</code> is a collection value.<br/>
            </p>
            <p>The type of the resulting value is always a list.</p>
            <p>Sorting backwards is done by inserting the <code>descending</code> keyword after
                the <code>sorted</code> one.<br/>
                In O and M dialects, the <code>desc</code> abbreviated keyword is preferred.</p>

            </React.Fragment>;
    }

}

export default new ThisTopic();