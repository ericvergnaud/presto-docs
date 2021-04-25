import React from 'react';
import '../../assets/css/navigation.scss';
import {NavLink} from "react-router-dom";
import SearchBox from "../search/SearchBox";

export default class Navigation extends React.Component {

	render() {
		return (
			<div data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
				<nav className="uk-navbar-container" data-uk-navbar>
					<div className="uk-navbar-left">
						<ul className="uk-navbar-nav">
							<li>
								<NavLink to="/">
									<img className="logo" src={`${process.env.PUBLIC_URL}/brand/logo-vector.svg`}
										 alt=""/>
								</NavLink>
							</li>
						</ul>
					</div>

					<div className="uk-navbar-right">
						<ul className="uk-navbar-nav">
							<li>
								<NavLink to="/tutorials" activeClassName="selected">Tutorials</NavLink>
							</li>
							<li>
								<NavLink to="/playground" activeClassName="selected">Playground</NavLink>
							</li>
							<li>
								<NavLink to="/libraries" activeClassName="selected">Libraries</NavLink>
							</li>
							<li>
								<NavLink to="/reference" activeClassName="selected">Reference</NavLink>
							</li>
						</ul>

						<div className="uk-navbar-item">
							<SearchBox onSelectedSuggestion={this.props.topicSelected}/>
						</div>

					</div>
				</nav>
			</div>
		);
	}

}

