import React from 'react';
import Syntax from "./Syntax";
import BuiltIn from "./BuiltIn";
import Custom from "./Custom";
import PromptoPlayer from "../../../player/PromptoPlayer";
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Errors", [ Syntax, BuiltIn, Custom ]);
    }

    renderContent(topicSelected) {
        return <>

            <h2>Error handling</h2>

            <p>Error handling is critical to perception of quality. Even is your application code is correct, it may
                generate errors.
                These errors may emanate from hardware (disk, network, memory), from middleware (credentials, service down),
                or from your application itself if your code meets undesirable situations and raises corresponding user
                defined errors.
            </p>

            <p>Prompto implements error handling using a try/fail mechanism. Here is an example:
            </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/errors/example.pec" runnable={true}/>
            <p>In the above example, we try to perform an illegal operation (divide by zero).
                Without precaution, this error would simply force the application to abruptly exit.
                To avoid this, we <i>protect</i> the potential error by wrapping our code inside a try/fail block.</p>
        </>;
    }

}

export default new ThisTopic();