function subscribe(event) {
	event.preventDefault();
	const form = event.currentTarget;
	if(form)
		alert("subscribe");
}

function Footer() {
	return (
		<article id="stay-tuned" className="p-footer">

			<hr className="uk-margin-medium-top uk-margin-medium-bottom" />

			<div className="uk-container uk-container-medium uk-margin-medium-top">
				<div className="uk-grid-large uk-margin-medium-top" data-uk-grid>
					<div className="uk-width-3-5@s">
						<h2>Stay Tuned!</h2>
						<p className="uk-text-muted">Prompto is getting better every day.<br/>Join the prompto newsletter and stay updated.</p>
					</div>

					<div className="uk-width-2-5@s">
						<div className="uk-background-muted uk-padding uk-text-center">
							<h3>Join the newletter</h3>
							<form className="uk-text-center" onSubmit={subscribe}>
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
				</div>
			</div>

			<hr className="uk-margin-medium-top uk-margin-medium-bottom" />

			<div className="uk-text-center">
				<p className="uk-text-small">Prompto is currently running its evaluation program.<br/>On-line development and deployment tools are available on request from <a href="https://www.quartance.com" target="_blank" rel="noreferrer">Quartance.</a></p>
				<p className="uk-text-small">Prompto is looking for contributors.<br/>If you wish to participate, please contact us - <a href="mailto:support@prompto.org?subject=Contribute%20to%20prompto&body=Hi,%20I%20would%20like%20to%20contribute%20to%20prompto">support@prompto.org</a>.</p>
			</div>

			<hr className="uk-margin-medium-top uk-margin-medium-bottom" />

			<div className="uk-margin-medium-bottom" >
				<div className="uk-text-small uk-text-center">
					The Prompto Java components are optimized using <a href="https://www.ej-technologies.com/products/jprofiler/overview.html"><img src="https://www.ej-technologies.com/images/product_banners/jprofiler_small.png" alt="JProfiler"/></a>
				</div>
			</div>
		</article>
	);
}

export default Footer;