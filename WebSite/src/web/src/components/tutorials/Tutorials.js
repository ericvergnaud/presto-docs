import '../../assets/css/tutorials.scss';

const ALL_TUTORIALS = [ 
	{ id: "z2LTkZaoJy8", title: "My first Prompto web site" },
	{ id: "nO0K5G8yDfk", title: "My first web page" },
	{ id: "pRmhWD5wP1Q", title: "Loading Employee data" },
	{ id: "gPLZug79iw0", title: "Displaying Employee data" },
	{ id: "BIOmBOtQADk", title: "Inputting Trip data" }
];

function Tutorials(props) {
	const divStyle = {display: props.visible ? "block" : "none"};
    return (
        <article style={divStyle} className="p-tutorials">
            <div className="uk-container uk-container-large uk-padding">
            	<h3>The TripGuru web site</h3>
            	<h5 className="uk-margin-remove-top uk-text-muted">This series of videos demonstrate how to create a web site, web pages, import data, input data, store it and display it.</h5>

            	<div className="uk-grid-large uk-grid-match uk-child-width-1-3@s uk-margin-medium-top" data-uk-grid>
					{ ALL_TUTORIALS.map(t =>
						<div key={t.id}>
							<h4>{t.title}</h4>
							<iframe src={"https://www.youtube.com/embed/" + t.id} title={t.title} height="280" frameBorder="0"
									allow="autoplay; encrypted-media" allowFullScreen></iframe>
						</div>
					)}
            	</div>
				<p><a href="/downloads/TripGuru.zip" download={true}>Download sample project for this tutorial</a></p>
            </div>
        </article>
    );
}

export default Tutorials;
