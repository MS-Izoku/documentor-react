import React, { Component } from 'react';
import { MDBIcon } from 'mdbreact';

export default class LoginForm extends Component {
	render() {
		return (
			<form
				className="neu-form neu-container"
				id="login-form"
				onSubmit={this.handleSubmit}
				onClick={this.ignoreClick}
			>
				<h2 className="title">Sign In</h2>

				<label htmlFor="username">Username</label>
				<input name="username" type="text" onChange={this.handleChange} placeholder="Username" />

				<label htmlFor="password">Password</label>
				<input name="password" type="password" onChange={this.handleChange} placeholder="Password" />

				<div id="oauth-login">
					<p className="text-center">Or with a Connect Account</p>
					<div className="wrapper space-around w-100 mx-1 py-2 neu-container inset">
						<a className="m-auto neu-container w-25 py-2 wrapper" href="#">
							<MDBIcon fab icon="google" size="2x" className="m-auto"/>
						</a>
						<a className="m-auto neu-container w-25 py-2 wrapper" href="#">
							<MDBIcon fab icon="facebook-f" size="2x" className="m-auto" />
						</a>
						<a className="m-auto neu-container w-25 py-2 wrapper" href="#">
							<MDBIcon fab icon="twitter" size="2x" className="m-auto"/>
						</a>
					</div>
				</div>

				<input type="submit" />
			</form>
		);
	}
}
