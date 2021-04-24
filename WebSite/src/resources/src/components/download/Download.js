export default function Download(props) {
    const divStyle = {display: props.visible ? "block" : "none"};
    return (
            <article className="download" style={divStyle}>
                <p>Installation instructions</p>
                <p>Disclaimer: Prompto is designed to run in the cloud. This docker image download is for evaluation and training purpose only.</p>
                <p>Pre-requisites</p>
                <p>You need a valid Docker and Docker-compose installation.</p>
                <p>If you don't already have Docker unstalled, you can <a href="https://www.docker.com/products/docker-desktop" target="_blank">download it for free from here.</a></p>
                <p>Once you have Docker installed, <a href="https://raw.githubusercontent.com/prompto/prompto-docker/master/install_prompto_macosx.sh" target="_blank">download the Prompto installer.</a></p>
                <p>Open Terminal, and type the following:</p>
                <p><code>mkdir ~/prompto & cd ~/prompto</code></p>
                <p><code>mv ~/Downloads/install_prompto_macosx.sh ./</code></p>
                <p><code>chmod 777 install_prompto_macosx.sh</code></p>
                <p><code>./install_prompto_macosx.sh</code></p>
            </article>
    );
}

