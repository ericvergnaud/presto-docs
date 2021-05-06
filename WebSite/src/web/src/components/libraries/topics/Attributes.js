import React from 'react';
import Topic from "../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Attributes");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
                    <h2>Attributes</h2>
                    <p>Prompto has the following predefined attributes:</p>
            <pre>{String.raw`// runtime reference of any object
define id as Any attribute`}</pre>
            <pre>{String.raw`// database reference of stored object
define dbId as Any attribute`}</pre>
            <pre>{String.raw`// any object has a text attribute, used for display
define text as storable Text attribute with value and words index`}</pre>
            <pre>{String.raw`// many objects have a name, it is not unique
define name as storable Text attribute with key and value index`}</pre>
            <pre>{String.raw`// many objects have a description, it is not unique
define description as storable Text attribute with words index`}</pre>
            <pre>{String.raw`// many objects have an image, it is not unique
define image as storable Image attribute`}</pre>
            <pre>{String.raw`// many events have a timeStamp
define timeStamp as storable DateTime attribute`}</pre>
            <pre>{String.raw`// urls, files and fragments have a path
define path as storable Text attribute`}</pre>
            <pre>{String.raw`// external text sources have an encoding such as "UTF-8"
define encoding as storable Text attribute`}</pre>
            <pre>{String.raw`// many systems require a login
define login as storable Text attribute with key and value index`}</pre>
            <pre>{String.raw`// many systems require a password
define password as Text attribute`}</pre>
            <pre>{String.raw`// users typically have an email
define email as storable Text attribute with value index`}</pre>
            <pre>{String.raw`// many objects have an Url
define url as storable Url attribute`}</pre>
        </React.Fragment>
    }

}

export default new ThisTopic();