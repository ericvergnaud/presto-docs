import React from 'react';
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Image");
    }

    renderContent(topicSelected) {
        return <>
            <h2>Image</h2>

            <p>The <code>Image</code> type is a specialized Blob type used to hold displayable binary data, such as a JPEG image.<br/>
                An Image has a mime type, which is useful to describe the type of the binary data, notably over the Internet.<br/>
                There is no Image literal, an Image can only be read from an external resource, and written to it.<br/>
            </p>
            </>;
    }

}

export default new ThisTopic();