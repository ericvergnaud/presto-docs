function Footer() {
	return (
		<article className="p-footer">
			<div className="uk-background-muted uk-padding-large uk-padding-remove-horizontal">
				<div className="uk-container uk-container-small uk-text-center">
					<div className="uk-flex uk-flex-middle uk-flex-around">
						<figure>	
							<img src={ `${process.env.PUBLIC_URL}/misc/docker.png` } className="uk-width-small uk-margin-small-right" alt="docker image" />
							<span data-uk-icon="icon: download; ratio: 5;"></span>
						</figure>
						<div className="uk-text-left">	
							<h2>Download the <span>DOCKER</span> Image</h2>
							<h3 className="uk-margin-remove-top">Try it out on your local machine!</h3>
						</div>
					</div>
				</div>
			</div>

			<div className="uk-container uk-container-medium">
				<div className="uk-padding-large uk-padding-remove-horizontal">
					<div className="uk-flex uk-flex-middle uk-flex-between">
						<div>	
							<h2>Prompto is getting better every day - <br /> Stay Tuned!</h2>
							<p className="uk-text-muted">Join the Prompto newsletter and stay updated on new releases and features, tutorials, and documentation.</p>
						</div>

						<div>
							<form className="uk-text-right">
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

					<p className="uk-text-small">Prompto is currently running its evaluation program. On-line development and deployment tools are available on request. We are looking for evaluators! And contributors! If you would like to participate, please contact us - <a href="support@prompto.org">support@prompto.org</a>.</p>

					<div className="uk-flex uk-flex-between uk-flex-middle uk-margin-small-top">
						<h6 className="uk-margin-medium-top">&copy; 2021 Prompto</h6>
						<h6>
							<a href="/" className="uk-margin-medium-right">Terms of Use</a>
							<a href="/">Privacy Policy</a>
						</h6>
					</div>
				</div>
			</div>
		</article>
	);
}

export default Footer;