import React from 'react';
import '../../assets/css/navigation.scss';
import {Link} from "react-router-dom";
import SearchBox from "../search/SearchBox";

export default class Navigation extends React.Component {

	render() {
		return (
			<div data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
				<nav className="uk-navbar-container" data-uk-navbar>
					<div className="uk-navbar-left">
						<ul className="uk-navbar-nav">
							<li>
								<Link to="/">
									<img className="logo" src={`${process.env.PUBLIC_URL}/brand/logo-vector.svg`}
										 alt=""/>
								</Link>
							</li>
						</ul>
					</div>

					<div className="uk-navbar-right">
						<ul className="uk-navbar-nav">
							<li>
								<Link to="/tutorials">Tutorials</Link>
							</li>
							<li>
								<Link to="/playground">Playground</Link>
							</li>
							<li>
								<Link to="/libraries">Libraries</Link>
							</li>
							<li>
								<Link to="/reference">Reference</Link>
							</li>
						</ul>

						<div className="uk-navbar-item">
							<SearchBox onSelectedSuggestion={this.selectSuggestion.bind(this)}/>
						</div>

					</div>
				</nav>
			</div>
		);
	}

	selectSuggestion() {
		console.log(arguments);
	}
}

