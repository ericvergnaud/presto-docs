import PromptoPlayer from "../../prompto-player/PromptoPlayer";

export default function Calling() {
	return (
		<li>
			<h2>Calling methods</h2>
            <p>Calling methods is done simply by using the method name optionally followed by its arguments name and
                value pairs.</p>

            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={8} sampleUrl="samples/methods/add3Integers.pec" runnable={true}/>

            <p className="uk-margin-large-top">Thanks to naming, arguments can be provided in any sequence, which makes it clear how the arguments are used.</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={8}  sampleUrl="samples/methods/namedArguments.pec" runnable={true}/>

            <p className="uk-margin-large-top">Naming the arguments is mandatory in Prompto. However, when a method accepts only 1 argument, the
                argument name can be omitted:</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={8}  sampleUrl="samples/methods/anonymousArgument.pec" runnable={true}/>
		</li>
	)
}