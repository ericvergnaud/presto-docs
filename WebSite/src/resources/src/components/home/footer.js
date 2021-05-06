import { Link } from "react-router-dom";

function download(event) {
	event.preventDefault();
	const form = event.currentTarget;
	if(form)
		alert("download");
}

function subscribe(event) {
	event.preventDefault();
	const form = event.currentTarget;
	if(form)
		alert("subscribe");
}

function Footer() {
	return (
		<article id="getting-started" className="p-footer">

			<div className="uk-background-muted uk-padding-large uk-padding-remove-horizontal">
				<div className="uk-container uk-container-small uk-text-center">
					<div className="uk-flex uk-flex-middle uk-flex-around">
						<figure>	
							<img src={ `${process.env.PUBLIC_URL}/misc/docker.png` } className="uk-width-small uk-margin-small-right" alt="docker" />
							<Link to="/download">
								<span data-uk-icon="icon: download; ratio: 5;"></span>
							</Link>
						</figure>
						<div>
							<div className="uk-text-left">
								<h2><Link to="/download">Download the <span>DOCKER</span> image</Link></h2>
								<h3 className="uk-margin-remove-top">Try it out on your local machine!</h3>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="uk-container uk-container-medium">
				<div className="uk-margin-large-top">
					<div className="uk-flex uk-flex-middle uk-flex-between">
						<div>	
							<h2><span className="prompto">prompto</span>&nbsp;is getting better every day - <br /> Stay Tuned!</h2>
							<p className="uk-text-muted">Join the prompto newsletter and stay updated on new releases, features, tutorials, and documentation.</p>
						</div>
						<div>
							<form className="uk-text-right" onSubmit={subscribe}>
								<div className="uk-margin-small-bottom">
									<div className="uk-inline">
							            <span className="uk-form-icon" data-uk-icon="icon: mail"></span>
							            <input className="uk-input" type="email" placeholder="name@domain.com" />
							        </div>
							    </div>
						        <div>
						        	<button className="uk-button uk-button-secondary p-secondary">Subscribe</button>
					        	 </div>
							</form>
						</div>
					</div>
					<hr className="uk-margin-medium-top uk-margin-medium-bottom" />

					<div className="uk-text-center">
						<p className="uk-text-small">Prompto is currently running its evaluation program.<br/>On-line development and deployment tools are available on request from <a href="https://www.quartance.com" target="_blank" rel="noreferrer">Quartance.</a></p>
						<p className="uk-text-small">Prompto is looking for contributors!<br/>If you wish to participate, please contact us - <a href="mailto:support@prompto.org?subject=Contribute%20to%20prompto&body=Hi,%20I%20would%20like%20to%20contribute%20to%20prompto">support@prompto.org</a>.</p>
					</div>

				</div>

				<hr className="uk-margin-medium-top uk-margin-medium-bottom" />

				<div className="uk-grid-medium uk-margin-medium-bottom" data-uk-grid>
					<div className="uk-width-2-3@s">
						<p className="uk-text-small uk-text-left">Prompto is currently running its evaluation program. On-line development and deployment tools are available on request.</p>
						<p className="uk-text-small uk-text-left">Prompto is looking for contributors! If you would like to participate, please contact us - <a href="mailto:support@prompto.org?subject=Contribute%20to%20prompto&body=Hi,%20I%20would%20like%20to%20contribute%20to%20prompto">support@prompto.org</a>.</p>
					</div>
					<div className="uk-width-1-3@s">
						<p className="uk-text-small uk-text-right">
							<a href="https://www.ej-technologies.com/products/jprofiler/overview.html">The Prompto Java components are optimized using <img src="https://www.ej-technologies.com/images/product_banners/jprofiler_small.png" alt="JProfiler"/></a>
						</p>
					</div>
				</div>
			</div>
		</article>
	);
}

export default Footer;