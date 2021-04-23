import React from 'react';
import Topic from "../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Overview");
    }

    renderContent() {
        return <React.Fragment>
            <h2>Overview</h2>
            <p><i>This section describes components provided with the Prompto runtime. See the Language section for the Prompto syntax and the built-in types.</i></p>

            <h3>Disclaimer</h3>
            <p>Prompto Libraries are work in progress. We are adding more components and features as users encounter the need for them.<br/>
                If you find that a component or feature is missing, <a href="mailto:support@prompto.org?subject=Feature%20request">please contact Prompto support.</a><br/>
                Alternately, create a <a href="https://github.com/prompto/prompto-libraries/issues" target="_blank" rel="noreferrer">feature request on GitHub</a></p>

        </React.Fragment>;
    }
}

export default new ThisTopic();