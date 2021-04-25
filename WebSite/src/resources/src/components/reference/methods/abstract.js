import PromptoPlayer from "../../prompto-player/PromptoPlayer";

export default function Abstract() {
	return (
		<li>
			<h2>Abstract methods</h2>
            <p>Prompto supports <code><i>abstract</i></code> methods, a special type of method, which <i>must</i> be overloaded.</p>
            <p>Abstract methods are resolved at runtime based on the actual type of the value.</p>
            <p>Abstract methods are well suited when no actual behaviour can be determined for an argument type (such as in the below <i>Shape</i>).</p>
            <p>In the below example, we do not know how to print a shape, only how to print specific shape types.</p>
            <p>In order to print a list of shapes without knowing their type, we use an abstract method.</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={20} sampleUrl="samples/methods/abstract.pec" runnable={true}/>

            <h3 className="uk-margin-large-top">Abstract methods as arguments</h3>
            <p>Abstract methods can also be used as arguments for other methods:</p>

            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={12} sampleUrl="samples/methods/abstractArgument.pec" runnable={true}/>
            <p className="uk-margin-large-top">In the above example, we show how to pass both a value: <i>Hello</i> and a method: <code><i>displayScreen</i></code> to another method: <code><i>someMethod</i></code>.</p>
            <p>The method: <code><i>someMethod</i></code> then invokes the method received as an argument, using the value also received as an argument.</p>
            <p>The method caller is responsible for providing a non abstract method compatible with the argument's method type.</p>
            <p>Please note that in the E dialect only, the <code>Method:</code> keyword is required to let Prompto decide whether to pass <code><i>displayScreen</i></code> directly as an argument, or to invoke it and pass the result. This is not required in O and M dialects, where method invocation requires parenthesis.</p>
        </li>
    )
}