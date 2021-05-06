import React from 'react';
import PromptoPlayer from "../../../player/PromptoPlayer";
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Attribute");
    }

    renderContent(topicSelected) {
        return <>
            <h2>Attribute</h2>

            <p>The <code>Attribute</code> type is a semantic type.<br/>
                Prompto encourages technologists to use semantic types rather than technical ones.<br/>
                A semantic type is a type defined by meaning rather than structure.<br/>
                For example <code>dateOfBirth</code> is a semantic type, while <code>Date</code> is a technical
                type.<br/>
                In Prompto, semantic types are defined through attribute definitions.<br/>
                An attribute is defined by simply combining a name with a technical or category type.<br/>
            </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/types/attribute/simple.pec"/>

            <h2>Constraints</h2>

            <p>Additionally, attributes may also have to fit within value domains.<br/>
                These can be defined using lexical patterns, lists of values or computable expressions.<br/>
                Computable expressions can refer to the underlying value using the keyword <code>value</code>.<br/>
            </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/types/attribute/constraint.pec"/>

            <h2>Storage</h2>

            <p>Finally, attributes are used to define the data store schema.<br/>
                To achieve this, storable attribute definitions must be preceded with the <code>storable</code> keyword.<br/>
                If the attribute is to be searchable, it must also be indexed.<br/>
                For all technical types except Text, this is achieved by simply adding <code>with index</code> to the
                attribute definition.<br/>
            </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/types/attribute/storable.pec"/>

            <h2>Indexing Text</h2>

            <p>Indexing Text attributes requires a bit more attention.<br/>
                Text attributes may be used as unique identifiers. Examples of such are a product reference or social
                security number.<br/>
                Such Text attributes should be indexed using <code>key</code> indexing, which is case sensitive.<br/>
                Most Text attributes are better indexed insensitively of case, and would happily benefit from a phonetic
                search.<br/>
                Such Text attributes should be indexed using <code>value</code> indexing, which is not case
                sensitive.<br/>
                (depending on the data store implementation, phonetic search may or not be available).<br/>
                Finally, some Text attributes are actually sentences rather than 'atomic' values.<br/>
                For these, it is often preferable to use <code>words</code> indexing.<br/>
                Prompto lets you combine the 3 index types. It is rare however to simultaneously need more than 1 of
                them.<br/>
            </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/types/attribute/textindex.pec"/>
            </>;
    }

}

export default new ThisTopic();