const ALL_SLIDES = [
	{ name: "Projects explorer", image: "projects-explorer.png", caption: "Create your project in seconds"},
	{ name: "Code editor", image: "code-editor.png", caption: "Start coding immediately"},
	{ name: "Try out", image: "try-out.png", caption: "Try out your app in less than a minute"},
	{ name: "Data explorer", image: "data-explorer.png", caption: "Explore application data"},
	{ name: "Stores explorer", image: "stores-explorer.png", caption: "Manage data stores"},
	{ name: "Debug server", image: "debug-server.png", caption: "Analyze and fix issues online"},
	{ name: "Deploy wizard", image: "deploy-wizard.png", caption: "Deploy to the cloud instantly"},
	{ name: "Tablet coding", image: "tablet-coding.jpg", caption: "Zero setup ! Enjoy mobility"}
];

function Header() {
	return (
		<article className="p-header uk-padding-large uk-padding-remove-horizontal" style={{ 'backgroundImage': `url(${process.env.PUBLIC_URL}/misc/header.jpg)` }}>
			<div className="uk-container uk-container-large">
				<div className="uk-grid-medium uk-child-width-1-2@s" data-uk-grid>
					<div>
						<h1 className="uk-heading-small uk-margin-small-bottom uk-margin-medium-top">the <span>full stack</span> language</h1>
						<h1 className="uk-heading-small uk-margin-remove-top">hosted in the <span>cloud</span></h1>
						<h4 className="uk-margin-large-top"><span className="prompto">prompto</span>&nbsp;frees you from time consuming tasks<br />and lets you focus on making visible differences : <br /> creative web pages, meaningful data models and relevant business logic</h4>

						<div className="uk-flex uk-margin-large-top">
							<a href="#getting-started" className="uk-button uk-button-secondary p-primary uk-box-shadow-medium uk-margin-medium-right">
								<span data-uk-icon="icon: cloud-upload; ratio: 1.15;" className="uk-margin-small-right"></span>
								<span>Get Started</span>
							</a>
							<a href="https://github.com/prompto" rel="noreferrer" target="_blank" className="uk-button uk-button-default uk-box-shadow-small uk-flex uk-flex-middle">
								<span data-uk-icon="icon: github" className="uk-margin-small-right"></span>
								<span>Source Code</span>
							</a>
						</div>
					</div>

					<div>
						<div className="uk-position-relative uk-visible-toggle" tabIndex="-1" data-uk-slideshow="min-height: 570; max-height: 570; autoplay: true;">
						    <ul className="uk-slideshow-items">
								{
									ALL_SLIDES.map(s =>
										<li key={s.name}>
											<figure>
												<img src={`${process.env.PUBLIC_URL}/code/` + s.image}
													 alt={s.name}/>
											</figure>
											<h3 className="uk-margin-small-bottom uk-text-center">{s.caption}</h3>
										</li>)
								}
						    </ul>
							{ /* eslint-disable-next-line */ }
						    <a className="uk-position-center-left-out uk-position-small" data-uk-slidenav-previous data-uk-slideshow-item="previous" />
							{ /* eslint-disable-next-line */ }
							<a className="uk-position-center-right-out uk-position-small" data-uk-slidenav-next data-uk-slideshow-item="next" />
						</div>
					</div>
				</div>
			</div>
		</article>
	)
}

export default Header;