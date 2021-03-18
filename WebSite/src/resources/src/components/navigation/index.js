import '../../assets/navigation.scss';

function Navigation() {
    return (
    	<div data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
	        <nav className="uk-navbar-container" data-uk-navbar>
			    <div className="uk-navbar-left">
			        <ul className="uk-navbar-nav">
			            <li>
			            	<a href="/">
			            		<span>prompto</span>
			            	</a>
			            </li>
			        </ul>
			    </div>

			    <div className="uk-navbar-right">
			        <ul className="uk-navbar-nav">
			        	<li>
			            	<a href="/playground">Playground</a>
			            </li>
			            <li>
			            	<a href="/documentation">Documentation</a>
			            </li>
			            <li>
			                <a href="/tutorials">Tutorials</a>
			            </li>
			            <li>
			            	<a href="/references">References</a>
			            </li>
			        </ul>

			        <div className="uk-navbar-item">
			        	<form className="uk-search uk-search-default">
					        <span data-uk-search-icon></span>
					        <input className="uk-search-input" type="search" placeholder="Search" />
					    </form>
			        </div>
			    </div>
			</nav>
		</div>
    );
}

export default Navigation;
