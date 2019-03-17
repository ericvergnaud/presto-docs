import React from 'react';
import Topic from "../Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Assignment");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>Assignment statements</h2>

            <p>An assignment is a statement which assigns the value of an expression to a value holder.<br/>
                An assignment has the form <code><i>holder</i> = <i>exp</i></code> where <code><i>exp</i></code> is an
                expression,
                aka <i>rvalue</i> (read <i>right</i> value) and <code><i>holder</i></code> is a valid value holder,
                aka <i>lvalue</i> (read <i>left</i> value).<br/>
                When an assignment statement is executed, the rvalue is computed and stored in the lvalue.
            </p>
            <h3>
                Assigning values to variables
            </h3>
            <PromptoPlayer sampleUrl="samples/statements/assign-variable.pec" runnable={true}/>

            <br/>
            <p>Prompto infers the type of a variable from its first assignment, which is generaly desirable.<br/>
                In the above example, the variable <code>a</code> has the type <code>Integer</code>.<br/>
                There are however situations where you might want the type to be explicit.<br/>
                In the first statement of the below example, the assigned type is <code>Decimal</code>, although the
                rvalue is an <code>Integer</code>.<br/>
                This is in preparation of the next statement, where the rvalue is a <code>Decimal</code>.<br/>
                Without the explicit type in the first statement, the second statement would be illegal
                because an <code>Integer</code> variable cannot hold a <code>Decimal</code> value.
            </p>
            <br/>
            <PromptoPlayer sampleUrl="samples/statements/assign-explicit.pec" runnable={true}/>

            <h3>
                Assigning values to list items
            </h3>
            <p>Prompto values are immutable by default. Therefore you cannot change the contents of a list, unless you
                make it
                explicit using the <code><i>mutable</i></code> keyword when creating the list.<br/>
                A list item assignment has the
                form <code><i>list[item]</i> = <i>exp</i></code> where <code><i>exp</i></code> is an expression,
                <code><i>list</i></code> is a list expression and <code><i>item</i></code> is
                an <code>Integer</code> expression.<br/>
                The <code><i>item</i></code> must be in the range <i>1 .. n</i> where <i>n</i> is the number of items in
                the list.
            </p>
            <PromptoPlayer sampleUrl="samples/statements/assign-mutable.pec" runnable={true}/>
            <br/>

            <h3>
                Assigning values to tuple items
            </h3>
            <p>Assigning values to tuple items is done the same way as for lists.
            </p>
            <PromptoPlayer sampleUrl="samples/statements/assign-tuple.pec" runnable={true}/>
            <br/>

            <h3>
                Assigning values to set items
            </h3>
            <p>Assigning values to set items is illegal.</p>
            <br/>

            <h3>
                Assigning values to dictionary keys
            </h3>
            <p>Prompto values are immutable by default. Therefore you cannot change the contents of a dictionary, unless
                you make it
                explicit using the <code><i>mutable</i></code> keyword when creating the dictionary.<br/>
                A dictionary <i>key</i> assignment has the
                form <code><i>dict[key]</i> = <i>exp</i></code> where <code><i>exp</i></code> is an expression,
                <code><i>dict</i></code> is a dictionary expression and <code><i>key</i></code> is
                a <code>Text</code> expression.
            </p>
            <PromptoPlayer sampleUrl="samples/statements/assign-dictionary.pec" runnable={true}/>
            <br/>

            <h3>
                Assigning values to category object members
            </h3>
            <p>Prompto values are immutable by default. Therefore you cannot change a member of a category object,
                unless you make it
                explicit using the <code><i>mutable</i></code> keyword when creating the object.<br/>
                A category <i>member</i> assignment has the
                form <code><i>object.member</i> = <i>exp</i></code> where <code><i>exp</i></code> is an expression,
                <code><i>object</i></code> is a category object expression and <code><i>member</i></code> is
                an <code>attribute</code>.
            </p>
            <PromptoPlayer lines={8} sampleUrl="samples/statements/assign-member.pec" runnable={true}/>

           </React.Fragment>;
    }

}

export default new ThisTopic();