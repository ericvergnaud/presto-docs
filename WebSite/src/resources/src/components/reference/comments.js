import PromptoPlayer from "../prompto-player/PromptoPlayer";

export default function comments() {
	return (
		<li>
			<h2>Comments</h2>

            <p>Prompto supports comments in the form of line comments.<br />
                A line comment is a line of text starting by <code>{`//`}</code> in E and O dialects, or <code>#</code> in M
                dialect.<br />
                Prompto code is ususally not stored in files, so a comment cannot be attached to a file location.
                Instead, a comment is always attached to the next non-comment line of code.<br />
                In the below example, the line comment is attached to the attribute declaration.
            </p>
            
            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/definitions/comment.pec"/>

            <p className="uk-margin-medium-top">Prompto does not support inline comments <code>{`/* ... */`}</code>,
                because it would be impossible to place them when translating code from one dialect to another.<br />
                For the same reason, Prompto does not support end of line comments, such as: <code>a = 2 <i>{`// assign 2 to a`}</i></code>.<br />
                The O dialect ignores line breaks, while the E and M dialects don't, so they would dangle around when
                translated.
            </p>
		</li>
	)
}