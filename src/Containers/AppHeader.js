import React, { Component } from 'react';
import { MDBIcon } from 'mdbreact';
import SideBar from '../Components/Sidebar';

export default class AppHeader extends Component {
	constructor() {
		super();
		this.state = {
			loginModalActive: false,
		};
	}

	render() {
		return (
			<header id="page-header">
				<div className="wrapper">
					<SideBar toggled={this.props.sidebarActive} toggleSidebar={this.props.toggleSidebar} />
					<UserArea
						user={this.props.user}
						logOut={this.props.logOut}
            toggleLoginModal={this.props.toggleLoginModal}
            toggled={this.props.sidebarActive}
					/>
				</div>
			</header>
		);
	}
}

const UserArea = (props) => {
	return (
		<div id="user-nav">
			<div id="avatar">{props.user.profilePic ? <img src={props.user.profilePic} alt="avatar-pic" /> : null}</div>
			<p>{props.user.username !== undefined ? props.user.username : 'Log In'}</p>
		</div>
	);
};
