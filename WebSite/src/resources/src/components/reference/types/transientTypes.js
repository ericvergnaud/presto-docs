export default function TransientTypes() {
	return (
		<li>
			<h2>Transient types</h2>
            <p>Transient types are technical types which do not hold domain information and only live during program execution.</p>

            <p>Prompto defines the following transient types:</p>
            <ul className="uk-list uk-list-disc">
                <li>Any</li>
                <li>Void</li>
                <li>Method</li>
                <li>Code</li>
                <li>Iterator</li>
                <li>Cursor</li>
                <li>Worker</li>
            </ul>
		</li>
	)
}