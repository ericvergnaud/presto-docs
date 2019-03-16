import React from 'react';
import Topic from "../Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Range");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>Range</h2>

            <p>The Range type is a technical type used to create sequences of 1 or more items of the same discrete type.<br/>
                The items themselves can only be of type Character, Integer, Date or Time.<br/>
                A Range type is declared by adding 2 dots enclosed in square brackets '[..]' after the item type.</p>
            <pre><code>Integer[..] -> the type Integer range</code></pre>
            <p>A Range literal must be enclosed in square brackets '[' and ']', the start and end value being separated
                by 2 dots '..'.</p>
            <pre><code>{String.raw`[1..17] -> all Integers ranging from 1 to 17 included
['c'..'k'] -> all Characters ranging from 'c' to 'k' included (using their Unicode value)
['2012-01-01'..'2014-04-01'] -> all Dates ranging from '2012-01-01' to '2014-04-01'
['20:01:01'..'23:02:02'] -> all Times ranging from '20:01:01' to '23:02:02', with a 1 second increment`}</code></pre>
            <p>
                Items in a Range can be accessed individually using their position.<br/>
                Positions start at 1 and end at the Range length.</p>
            <pre><code>{String.raw`r = [2..17] -> assign a Range of Integers to variable 'r'
r[4] -> get item at position 4 in Range referenced by variable 'r' i.e. the Integer 5`}</code></pre>
            <br/>
        </React.Fragment>;
    }

}

export default new ThisTopic();