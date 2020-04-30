import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBIcon } from 'mdbreact';

export default class SideBar extends Component {
	constructor() {
		super();
		this.state = {
			toggled: false,
		};
	}
	render() {
		return (
			<>
				<button onClick={this.props.toggleSidebar}>
					<MDBIcon icon="bars" />
				</button>
				<div className={'page-overlay ' + (this.props.toggled ? '' : 'hidden')}>
					<aside className={this.props.toggled ? '' : 'hidden'}>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/projects">Projects</Link>
							</li>
							<li>
								<Link to="/resources">Resources</Link>
							</li>
							<li>
								<Link to="/forums">Forums</Link>
							</li>
						</ul>
					</aside>
          <div className="w-100" onClick={this.props.toggleSidebar}/>
				</div>
			</>
		);
	}
}
