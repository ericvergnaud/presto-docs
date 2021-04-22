function Header() {
	return (
		<article className="p-header uk-padding-large uk-padding-remove-horizontal" style={{ 'backgroundImage': `url(${process.env.PUBLIC_URL}/misc/header.jpg)` }}>
			<div className="uk-container uk-container-large">
				<div className="uk-grid-medium uk-child-width-1-2@s" data-uk-grid>
					<div>
						<h1 className="uk-heading-small uk-margin-small-bottom uk-margin-medium-top">The <span>Full Stack</span> Language</h1>
						<h1 className="uk-heading-small uk-margin-remove-top">Hosted in the <span>Cloud</span></h1>
						<h4 className="uk-margin-large-top">Prompto lets you focus on what really makes a difference - <br /> creative web pages, meaningful data models and relevant algorithms.</h4>

						<div className="uk-flex uk-margin-large-top">
							<button className="uk-button uk-button-secondary p-primary uk-box-shadow-medium uk-margin-medium-right">
								<span data-uk-icon="icon: cloud-upload; ratio: 1.15;" className="uk-margin-small-right"></span>
								<span>Get Started</span>
							</button>
							<button className="uk-button uk-button-default uk-box-shadow-small uk-flex uk-flex-middle">
								<span data-uk-icon="icon: github" className="uk-margin-small-right"></span>
								<span>Source Code</span>
							</button>
						</div>
					</div>

					<div>
						<div className="uk-position-relative uk-visible-toggle" tabIndex="-1" data-uk-slideshow="min-height: 570; max-height: 570; autoplay: true;">
						    <ul className="uk-slideshow-items">
						        <li>
									<figure>
										<img src={ `${process.env.PUBLIC_URL}/code/projects-explorer.png` } alt="projects explorer" />
									</figure>
									<h3 className="uk-margin-small-bottom uk-text-center">Create your project in seconds from your browser</h3>
						        </li>
						        <li>
						        	<figure>
										<img src={ `${process.env.PUBLIC_URL}/code/code-editor.png` } alt="code editor" />
									</figure>
									<h3 className="uk-margin-small-bottom uk-text-center">Start coding</h3>
						        </li>
						        <li>
						            <figure>
										<img src={ `${process.env.PUBLIC_URL}/code/try-out.png` } alt="try out" />
									</figure>
									<h3 className="uk-margin-small-bottom uk-text-center">Try out your app in less than a minute</h3>
						        </li>
						        <li>
						            <figure>
										<img src={ `${process.env.PUBLIC_URL}/code/data-explorer.png` } alt="data explorer" />
									</figure>
									<h3 className="uk-margin-small-bottom uk-text-center">Explore application data</h3>
						        </li>
						        <li>
						            <figure>
										<img src={ `${process.env.PUBLIC_URL}/code/stores-explorer.png` } alt="stores explorer" />
									</figure>
									<h3 className="uk-margin-small-bottom uk-text-center">Manage data stores</h3>
						        </li>
						        <li>
						        	<figure>
										<img src={ `${process.env.PUBLIC_URL}/code/debug-server.png` } alt="debug server" />
									</figure>
									<h3 className="uk-margin-small-bottom uk-text-center">Analyze issues online</h3>
						        </li>
						        <li>
						        	<figure>
										<img src={ `${process.env.PUBLIC_URL}/code/deploy-wizard.png` } alt="deploy wizard" />
									</figure>
									<h3 className="uk-margin-small-bottom uk-text-center">You are ready to go live</h3>
						        </li>
						        <li>
						            <figure>
										<img src={ `${process.env.PUBLIC_URL}/code/tablet-coding.jpg` } alt="tablet coding" />
									</figure>
									<h3 className="uk-margin-small-bottom uk-text-center">Zero setup lets you enjoy mobility</h3>
						        </li>
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