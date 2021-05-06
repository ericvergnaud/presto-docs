const codeSnippet = [
	`widget SimpleWidget extends ReactWidget {
		method getInitialState() {
			return { dark: false };
		}
		method render() {
			css = { margin-left: 10px; padding: 5%; };
			if (state.dark is true)
				css = css + { color: white; background-color: black; };
			return <div style={css}>Hi there!</div>
		}
	}`,
	`method populateVariables() {
		list = ["John", "Mary", "Eric"];
		set = < "John", "Mary", "Eric" >;
		dict = < "a": "stuff", "b": "other" >;
		doc = { a: 22, b: 33.5 };
		date = '2022-12-10';
		time = '15:00:53';
		dateTime = '2022-12-10T15:00:53+03:00';
		period = 'PT15M';
		version = 'v1.2.3';
		uuid = '123e4567-e89b-12d3-a456-426614174000';
	}`,
	`Decimal native method parseDecimal (Text text) {
		Java: return Double.parseDouble(text);
		C#: return System.Double.Parse(text, System..InvariantCulture);
		Python2: return float(text);
		Python3: return float(text);
		Javascript: return parseFloat(text);
	}`,
	`method createTeam() {
		alison = Member(name="Alison");
		john = Member(name="John");
		members = [alison, john];
		name = "Dream Team";
		team = Team(name, members);
		store(team);
	}`
];

function Features(props) {
	return (
		<article className="p-features">
			<div className="uk-padding-large uk-padding-remove-horizontal">
				<div className="uk-container uk-container-large">
					<h2 className="uk-text-center"><span className="prompto">prompto</span>&nbsp;features</h2>

					<div className="uk-grid-medium uk-child-width-1-2@s uk-margin-medium-top" data-uk-grid>
						<div>	
							<div className="uk-padding">		
								<figure className="uk-box-shadow-large uk-position-relative">
									<img src={ `${process.env.PUBLIC_URL}/features/inline-css.png` } alt="html & css literals" />
									<div className="uk-position-top-right uk-position-small" 
										onClick={ () => { navigator.clipboard.writeText(codeSnippet[0]) } }>
										<span>Copy</span>
										<span data-uk-icon="icon: copy"></span>
									</div>
								</figure>
							</div>				
						</div>
						<div>
							<div className="uk-padding">
								<figure className="uk-margin-small-top">
									<img src={ `${process.env.PUBLIC_URL}/features/html.svg` } className="p-icons" alt="html & css literals" />
								</figure>
								<h3 className="uk-margin-remove-bottom">Write HTML and CSS literals in code</h3>
								<p>Prompto natively supports HTML literals. Discover the power of plain CSS literals for styles used only once. You can combine local CSS styles to build conditional styles.</p>
							</div>
						</div>
					</div>

					<div className="uk-grid-medium uk-child-width-1-2@s uk-margin-medium-top" data-uk-grid>
						<div>
							<div className="uk-padding">
								<figure className="uk-margin-small-top">
									<img src={ `${process.env.PUBLIC_URL}/features/cloud-computing.svg` } className="p-icons" alt="data literals" />
								</figure>
								<h3 className="uk-margin-remove-bottom">Enjoy powerful data literals</h3>
								<p>List, set, dict, document - choose your collection literal. Date, time, dateTime and period literals that follow ISO 8601. You also have version and uuid literals.</p>
							</div>
						</div>

						<div>			
							<div className="uk-padding">		
								<figure className="uk-box-shadow-large uk-position-relative">
									<img src={ `${process.env.PUBLIC_URL}/features/literals.png` } alt="data literals" />
									<div className="uk-position-top-right uk-position-small"
										onClick={ () => { navigator.clipboard.writeText(codeSnippet[1]) } }>
										<span>Copy</span>
										<span data-uk-icon="icon: copy"></span>
									</div>
								</figure>
							</div>					
						</div>
					</div>

					<div className="uk-grid-large uk-child-width-1-2@s uk-margin-medium-top" data-uk-grid>
						<div>			
							<div className="uk-padding">		
								<figure className="uk-box-shadow-large uk-position-relative">
									<img src={ `${process.env.PUBLIC_URL}/features/everywhere.png` } alt="run same code everywhere" />
									<div className="uk-position-top-right uk-position-small"
										onClick={ () => { navigator.clipboard.writeText(codeSnippet[2]) } }>
										<span>Copy</span>
										<span data-uk-icon="icon: copy"></span>
									</div>
								</figure>
							</div>					
						</div>
						<div>
							<div className="uk-padding uk-padding-remove-vertical">
								<figure className="uk-margin-small-top">
									<img src={ `${process.env.PUBLIC_URL}/features/web-development.svg` } className="p-icons" alt="run same code everywhere" />
								</figure>
								<h3 className="uk-margin-remove-bottom">Run the same code everywhere</h3>
								<p>Thanks to its polyglot native bindings, prompto can run anywhere. Forget data transfer protocols, your models and your code are the same in the browser, on the server or in a forked process (C# code above abbreviated for presentation).</p>
							</div>
						</div>
					</div>

					<div className="uk-grid-large uk-child-width-1-2@s uk-margin-medium-top" data-uk-grid>
						<div>
							<div className="uk-padding uk-padding-remove-vertical">
								<figure className="uk-margin-large-top">
									<img src={ `${process.env.PUBLIC_URL}/features/database.svg` } className="p-icons" alt="store data in one statement" />
								</figure>
								<h3 className="uk-margin-remove-bottom">Store and fetch data in one statement</h3>
								<p>Simply populate your instances, then call <code>store</code>. You can delete and store multiple instances in one ACID statement (if supported by the back-end data store). Fetching data has never been simpler, just call <code>fetch</code>.</p>
							</div>
						</div>

						<div>			
							<div className="uk-padding">		
								<figure className="uk-box-shadow-large uk-position-relative">
									<img src={ `${process.env.PUBLIC_URL}/features/storable-2.png` } alt="store data in one statement" />
									<div className="uk-position-top-right uk-position-small"
										onClick={ () => { navigator.clipboard.writeText(codeSnippet[3]) } }>
										<span>Copy</span>
										<span data-uk-icon="icon: copy"></span>
									</div>
								</figure>
							</div>				
						</div>
					</div>
				</div>

				<h5 className="uk-margin-large-top uk-text-center">
					<button className="uk-flex-inline uk-flex-middle uk-button uk-button-link" onClick={()=>props.history.push("/reference")}>
						<span className="uk-margin-small-right">Learn more about prompto features</span>
						<span data-uk-icon="icon: arrow-right; ratio: 1.25;"></span>
					</button>
				</h5>
			</div>
		</article>
	);
}

export default Features;