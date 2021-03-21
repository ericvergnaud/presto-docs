import '../../assets/tutorials.scss';

const ALL_TUTORIALS = [ 
	{ id: "z2LTkZaoJy8", title: "My first Prompto web site" },
	{ id: "nO0K5G8yDfk", title: "My first web page" },
	{ id: "pRmhWD5wP1Q", title: "Loading Employee data" },
	{ id: "gPLZug79iw0", title: "Displaying Employee data" },
	{ id: "BIOmBOtQADk", title: "Inputting Trip data" }
];

function Tutorials() {
    return (
        <article className="p-tutorials">
            <div className="uk-container uk-container-large uk-padding">
            	<h3>The TripGuru web site</h3>
            	<h5 className="uk-margin-remove-top uk-text-muted">This series of videos demonstrate how to create a web site, web pages, import data, input data, store it and display it.</h5>

            	<div className="uk-grid-large uk-grid-match uk-child-width-1-3@s uk-margin-medium-top" data-uk-grid>
            		<div>
            			<h4>My first Prompto web site</h4>
            			<iframe src="https://www.youtube.com/embed/z2LTkZaoJy8" height="280" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            		</div>
            		<div>
            			<h4>My first web page</h4>
            			<iframe src="https://www.youtube.com/embed/nO0K5G8yDfk" height="280" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            		</div>
            		<div>
            			<h4>Loading Employee data</h4>
            			<iframe src="https://www.youtube.com/embed/pRmhWD5wP1Q" height="280" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            		</div>
            		<div>
            			<h4>Displaying Employee data</h4>
            			<iframe src="https://www.youtube.com/embed/gPLZug79iw0" height="280" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            		</div>
            		<div>
            			<h4>Inputting Trip data</h4>
            			<iframe src="https://www.youtube.com/embed/BIOmBOtQADk" height="260" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            		</div>
            	</div>
            </div>
        </article>
    );
}

export default Tutorials;
