import '../../assets/css/home.scss';

export default function Install(props) {
    const divStyle = {display: props.visible ? "block" : "none"};
    return (
            <article className="p-install" style={divStyle}>
                <div className="uk-container uk-container-medium uk-margin-medium-top">
                    <h2>Installing <span className="prompto">prompto</span>&nbsp;Docker Image </h2>

                    <div className="uk-margin-medium-top">
                             <h3>Installation Instructions</h3>

                            <p className="uk-text-danger">Disclaimer: Prompto is designed to run in the cloud. The docker image is for evaluation and training purpose only.</p>

                            <h4>Pre-requisites</h4>
                            <ul className="uk-list uk-list-disc">
                                <li>You need a valid Docker and Docker-compose installation.</li>
                                <li>If you don't already have Docker unstalled, you can <a href="https://www.docker.com/products/docker-desktop" target="_blank" rel="noreferrer">download it for free from here.</a></li>
                                <li>You need admin access to link local storage and ports with the docker components.</li>
                            </ul>

                        <h4>Installation - MacOSX</h4>
                        <ul className="uk-list uk-list-disc">
                            <li>Once you have Docker installed, <a href="https://raw.githubusercontent.com/prompto/prompto-docker/master/install_prompto_macosx.sh" download="install_prompto_macosx.sh" type="application/binary">download the Prompto installer.</a></li>
                                <li>Open Terminal, and type the following:
                                    <pre className="uk-margin-small-top">
                                            {`mkdir ~/prompto & cd ~/prompto
mv ~/Downloads/install_prompto_macosx.sh ./
chmod 777 install_prompto_macosx.sh
./install_prompto_macosx.sh`}
                                    </pre>
                                </li>
                            </ul>

                        <h4>Installation - Windows</h4>
                        <ul className="uk-list uk-list-disc">
                            <li>Once you have Docker installed, <a href="https://raw.githubusercontent.com/prompto/prompto-docker/master/install_prompto_windows.ps1" download="install_prompto_windows.ps1" type="application/binary">download the Prompto installer.</a></li>
                            <li>Open a Command prompt, and type the following:
                                <pre className="uk-margin-small-top">
                                            {`mkdir prompto
move downloads\\install_prompto_windows.ps1 prompto
cd prompto
powershell .\\install_prompto_windows.ps1`}
                                    </pre>
                            </li>
                            <li>(due to some incorrect communication between docker and powershell, you may encounter some errors, which you can probably safely ignore)</li>
                        </ul>

                    </div>

                </div>
            </article>
    );
}

