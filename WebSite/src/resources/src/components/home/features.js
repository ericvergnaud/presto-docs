function Features() {
	return (
		<article className="p-features">
			<div className="uk-padding-large uk-padding-remove-horizontal">
				<div className="uk-container uk-container-large">
					<h2 className="uk-text-center"><span>Prompto</span> Features</h2>

					<div className="uk-grid-medium uk-child-width-1-2@s uk-margin-medium-top" data-uk-grid>
						<div>	
							<div className="uk-padding">		
								<figure className="uk-box-shadow-large">
									<img src={ `${process.env.PUBLIC_URL}/features/inline-css.png` } alt="html & css literals" />
								</figure>
							</div>				
						</div>
						<div>
							<div className="uk-padding">
								<figure className="uk-margin-small-top">
									<img src={ `${process.env.PUBLIC_URL}/features/html.svg` } className="p-icons" alt="html & css literals" />
								</figure>
								<h3 className="uk-margin-remove-bottom">Write HTML and CSS literals in code</h3>
								<p>Prompto natively supports HTML literals discover the power of plain CSS literals for styles used only once you can combine local CSS styles to build conditional styles.</p>
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
								<p>List, set, dict, document - choose your collection literal. Date, time, dateTime and period literals that confirm to ISO 8601. You also have version or uuid literals.</p>
							</div>
						</div>

						<div>			
							<div className="uk-padding">		
								<figure className="uk-box-shadow-large">
									<img src={ `${process.env.PUBLIC_URL}/features/literals.png` } alt="data literals" />
								</figure>
							</div>					
						</div>
					</div>

					<div className="uk-grid-large uk-child-width-1-2@s uk-margin-medium-top" data-uk-grid>
						<div>			
							<div className="uk-padding">		
								<figure className="uk-box-shadow-large">
									<img src={ `${process.env.PUBLIC_URL}/features/everywhere.png` } alt="run same code everywhere" />
								</figure>
							</div>					
						</div>
						<div>
							<div className="uk-padding uk-padding-remove-vertical">
								<figure className="uk-margin-small-top">
									<img src={ `${process.env.PUBLIC_URL}/features/web-development.svg` } className="p-icons" alt="run same code everywhere" />
								</figure>
								<h3 className="uk-margin-remove-bottom">Run the same code everywhere</h3>
								<p>Thanks to its polyglot native bindings, Prompto can run anywhere your models and your code are the same in the browser, on the server or in a forked process (C# code above abbreviated for presentation).</p>
							</div>
						</div>
					</div>

					<div className="uk-grid-large uk-child-width-1-2@s uk-margin-medium-top" data-uk-grid>
						<div>
							<div className="uk-padding uk-padding-remove-vertical">
								<figure className="uk-margin-large-top">
									<img src={ `${process.env.PUBLIC_URL}/features/database.svg` } className="p-icons" alt="store data in one statement" />
								</figure>
								<h3 className="uk-margin-remove-bottom">Store data in one statement</h3>
								<p>Simply populate your instances, then call <code>store</code>. You can delete and store multiple instances in one statement which provides ACID consistency (if supported by the back-end data store).</p>
							</div>
						</div>

						<div>			
							<div className="uk-padding">		
								<figure className="uk-box-shadow-large">
									<img src={ `${process.env.PUBLIC_URL}/features/storable-2.png` } alt="store data in one statement" />
								</figure>
							</div>				
						</div>
					</div>
				</div>

				<h5 className="uk-margin-large-top uk-text-center">
					<a href="/features" className="uk-flex-inline uk-flex-middle">
						<span className="uk-margin-small-right">Learn more about Prompto features</span>
						<span data-uk-icon="icon: arrow-right; ratio: 1.25;"></span>
					</a>
				</h5>
			</div>
		</article>
	);
}

export default Features;