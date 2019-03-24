import React from 'react';
import Topic from "../../../components/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Blob");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
                <h2>Blob</h2>

                <p>The <code>Blob</code> (<b>B</b>inary <b>L</b>arge <b>OB</b>ject) type is a technical type used to hold an arbitray list of raw bytes.<br/>
                    A Blob has a mime type, which is useful to describe the type of the binary data, notably over the Internet.<br/>
                    There is no Blob literal, a Blob can only be read from an external resource, and written to it.<br/>
                    By design, Prompto has no byte manipulation capabilities.
                </p>
            </React.Fragment>;
    }

}

export default new ThisTopic();