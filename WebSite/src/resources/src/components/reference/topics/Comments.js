import React from 'react';
import Topic from "../../content/Topic";
import PromptoPlayer from "../../player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Comments");
    }

    renderContent(topicSelected) {
        return <>
            <h2>Comments</h2>

            <p>Prompto supports comments in the form of line comments.<br/>
                A line comment is a line of text starting by <code>{String.raw`//`}</code> in E and O dialects, or <code>#</code> in M
                dialect.<br/>
                Prompto code is ususally not stored in files, so a comment cannot be attached to a file location.
                Instead, a comment is always attached to the next non-comment line of code.<br/>
                In the below example, the line comment is attached to the attribute declaration.
            </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/definitions/comment.pec"/>

            <br/>
            <p>Prompto does not support inline comments <code>{String.raw`/* ... */`}</code>,
                because it would be impossible to place them when translating code from one dialect to another.<br/>
                For the same reason, Prompto does not support end of line comments, such as: <code>a = 2 <i>{String.raw`// assign 2 to a`}</i></code>.<br/>
                The O dialect ignores line breaks, while the E and M dialects don't, so they would dangle around when
                translated.
            </p>
            </>;
    }

}

export default new ThisTopic();