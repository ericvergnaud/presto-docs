import '../../assets/css/home.scss';

function download(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if(form)
        alert("download");
}

export default function Download(props) {
    const divStyle = {display: props.visible ? "block" : "none"};
    return (
            <article className="p-download" style={divStyle}>
                <div className="uk-container uk-container-medium uk-margin-medium-top">
                    <h2>Docker Image &amp; Instructions</h2>

                    <div className="uk-grid-large uk-margin-medium-top" data-uk-grid>
                        <div className="uk-width-3-5@s">
                            <h3>Installation Instructions</h3>

                            <p className="uk-text-danger">Disclaimer: Prompto is designed to run in the cloud. This docker image download is for evaluation and training purpose only.</p>

                            <h4>Pre-requisites</h4>
                            <ul className="uk-list uk-list-disc">
                                <li>You need a valid Docker and Docker-compose installation.</li>
                                <li>If you don't already have Docker unstalled, you can <a href="https://www.docker.com/products/docker-desktop" target="_blank" rel="noreferrer">download it for free from here.</a></li>
                                <li>Once you have Docker installed, <a href="https://raw.githubusercontent.com/prompto/prompto-docker/master/install_prompto_macosx.sh" target="_blank" rel="noreferrer">download the Prompto installer.</a></li>
                                <li>Open Terminal, and type the following:
                                    <pre className="uk-margin-small-top">
                                            {`mkdir ~/prompto & cd ~/prompto
mv ~/Downloads/install_prompto_macosx.sh ./
chmod 777 install_prompto_macosx.sh
./install_prompto_macosx.sh`}
                                    </pre>
                                </li>
                            </ul>
                        </div>
                        <div className="uk-width-2-5@s">
                            <div className="uk-background-muted uk-padding uk-margin-large-top uk-text-center">
                                <h3>Download Docker Image</h3>

                                <form className="uk-margin-medium-top uk-text-center" onSubmit={download}>
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
            </article>
    );
}

