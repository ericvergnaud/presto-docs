import PromptoPlayer from "../prompto-player/PromptoPlayer";

export default function Annotations() {
	return (
		<li>
			<h2>Annotations</h2>

            <p>Prompto supports Annotations.<br/>
                An annotation is an identifier prefixed by <code>@</code> optionally followed by parameters enclosed in parenthesis.<br/>
                Annotations are always attached to the next non-comment declaration.<br/>
                In the below example, the first annotation is attached to the widget declaration, the second one to a method.
            </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={8} sampleUrl="samples/definitions/annotation.pec" />

            <p className="uk-margin-medium-top">As of writing, Prompto only supports built-in annotations, which are used by the Prompto components.<br/>
                Support for user defined annotations is a desired feature, just not yet implemented.
             </p>

            <h3 className="uk-text-capitalize">Built-in annotations</h3>

             <ul className="uk-list uk-list-disc">
                 <li>
                     <code>@Inline</code>
                     This annotation only applies to native methods and categories. It tells the transpiler to <i>inline</i> native code (rather than generate a method which would then invoke it).
                 </li>
                 <li>
                     <code>@Callback</code>
                     This annotation only applies to native methods. It tells the transpiler to preserve method naming. This is necessary when using Html engines such as React, which call methods by name.
                 </li>
                 <li>
                     <code>@Static</code>
                     This annotation only applies to native methods. It tells the transpiler to make the transpiled method static. This is necessary when using Html engines such as React, which require certain callbacks to be static.
                 </li>
                 <li>
                     <code>@PageWidgetOf("<i>SomePage</i>")</code>
                     This annotation only applies to widgets. It lets prompto tell the browser to load <code><i>SomePage</i>.page</code> when running the widget from the developer factory.
                 </li>
                 <li>
                     <code>@WidgetField(name="<i>SomeName</i>", type=<i>SomeType</i>)</code>
                     This annotation only applies to widgets. Library widgets often come with specific fields unrelated to the information domain, which cannot be treated as attributes.<br/>
                     The <code>@WidgetField</code> annotation tells prompto that the widget has a built-in field named <code><i>SomeName</i></code> of type <code><i>SomeType</i></code>.<br/>
                     From there, it is possible to use the widget field in widget code.<br/>
                     The built-in <code>ReactWidget</code> comes with 2 widget fields: name and props. See ReactWidget for examples.
                 </li>
                 <li>
                     <code>@WidgetProperties(<i>a document</i>)</code>
                     This annotation only applies to widgets. Widgets are initialized using properties, and it is convenient to be able to verify them.<br/>
                     The <code>@WidgetProperties</code> annotation tells prompto which properties the widget supports and their type.<br/>
                     From there, it is possible to verify the widget property in widget code.<br/>
                     See ReactWidget for examples.
                 </li>
             </ul>
		</li>
	)
}