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
				<div>
					<div className="wrapper col">
						<MDBIcon
							icon="bars"
							style={{ width: '64px', borderRadius: '0.25em', padding: '3px 12px 3px 12px' }}
							className="text-shadow neu-container inset m-auto"
							size="3x"
						/>
					</div>
				</div>

				<div className={'page-overlay ' + (this.props.toggled ? '' : 'hidden')}>
					<aside className={this.props.toggled ? '' : 'hidden'}>
						<ul className="">
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
					<div className="w-100 bg-info filler" onClick={this.props.toggleSidebar} />
				</div>
			</>
		);
	}
}
