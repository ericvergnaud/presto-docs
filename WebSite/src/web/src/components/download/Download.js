import '../../assets/css/home.scss';
import * as luxon from 'luxon';

// eslint-disable-next-line
const emailRegExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

function getTimestampString() {
    return luxon.DateTime.now().toISO();
}

function download(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if(!form) {
        console.error("download called outside a form!");
        return;
    }
    const formData = new FormData(form);
    const email = formData.get("email");
    if(!emailRegExp.test(email)) {
        alert("Please provide a valid email address");
        return;
    }
    formData.append('timeStamp', getTimestampString());
    var xhr = new XMLHttpRequest();
    xhr.open( 'POST', "/public/v1/download", true );
    xhr.onreadystatechange = function() {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            const status = xhr.status;
            if (status === 0 || (status >= 200 && status < 400))
                alert("You have been sent an email with a download link.")
            else
                alert("An error occured, please contact support: support@prompto.org");
        }
    }
}

export default function Download(props) {
    const divStyle = {display: props.visible ? "block" : "none"};
    return (
            <article className="p-download" style={divStyle}>
                <div className="uk-container uk-container-medium uk-margin-medium-top">
                    <h2>Download&nbsp;<span className="prompto">prompto</span></h2>

                    <div className="uk-grid-large uk-margin-medium-top" data-uk-grid>
                        <div className="uk-width-3-5@s">
                            <h3>Installation instructions</h3>
                            <p>Prompto is designed to run in the cloud, which enables online storage and seamless deployment.</p>
                            <p>It is available as a Docker image, but the above features are then disabled.</p>

                            <h4>Pre-requisites</h4>
                            <ul className="uk-list uk-list-disc">
                                <li>You need a valid Docker and Docker-compose installation.</li>
                                <li>You need admin access to link local storage and ports with the docker components.</li>
                            </ul>

                            <p className="uk-text-danger">Disclaimer: the Prompto Docker image is for evaluation and training purpose only.</p>
                            <p className="uk-text-small">Prompto is currently running its evaluation program.<br/>On-line development and deployment tools are available on request from <a href="https://www.quartance.com" target="_blank" rel="noreferrer">Quartance.</a></p>

                        </div>
                        <div className="uk-width-2-5@s">
                            <div className="uk-background-muted uk-padding uk-margin-large-top uk-text-center">
                                <h3>Download Prompto</h3>

                                <form className="uk-margin-medium-top uk-text-center" onSubmit={download}>
                                    <div className="uk-margin-small-bottom">
                                        <div className="uk-inline">
                                            <span className="uk-form-icon" data-uk-icon="icon: mail"></span>
                                            <input name="email" className="uk-input" type="email" placeholder="name@domain.com" />
                                        </div>
                                    </div>
                                    <div>
                                        <button className="uk-button uk-button-secondary p-secondary">Download</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </article>
    );
}

