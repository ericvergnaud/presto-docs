export default function AtomicTypes() {
	return (
		<li>
			<h2>Atomic types</h2>

            <p>Atomic types are technical types which can hold a single 'atomic' value: text, number, date and so forth.<br />
                All atomic types are defined by Prompto, there is no way to define custom atomic types in Prompto.
            </p>
            <p>Prompto defines the following atomic types:</p>
            <ul className="uk-list uk-list-disc">
                <li>Text</li>
                <li>Integer</li>
                <li>Decimal</li>
                <li>Boolean</li>
                <li>Date</li>
                <li>Time</li>
                <li>DateTime</li>
                <li>Period</li>
                <li>Uuid</li>
                <li>Version</li>
                <li>Css</li>
                <li>Html</li>
                <li>Blob</li>
                <li>Image</li>
            </ul>
		</li>
	)
}