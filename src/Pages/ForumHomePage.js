import React, { Component } from 'react';
// import { MDBIcon } from "mdbreact";
import Searchbar from '../Components/Searchbar';
import { baseURL } from '../services/asyncHelper';
import { Link } from 'react-router-dom';

import ForumHomeThread from '../Containers/Forum/ForumHomeThread';

export default class ForumHomePage extends Component {
	constructor() {
		super();
		this.state = {
			forums: [
				{
					id: 0,
					title: 'Forum Home Thread',
					content: 'This is the contend ofa Forum Home-Thread element',
				},
				{
					id: 0,
					title: 'Forum Home Thread',
					content: 'This is the contend ofa Forum Home-Thread element',
				},
				{
					id: 0,
					title: 'Forum Home Thread',
					content: 'This is the contend ofa Forum Home-Thread element',
				},
				{
					id: 0,
					title: 'Forum Home Thread',
					content: 'This is the contend ofa Forum Home-Thread element',
				},
				{
					id: 0,
					title: 'Forum Home Thread',
					content: 'This is the contend ofa Forum Home-Thread element',
				},
				{
					id: 0,
					title: 'Forum Home Thread',
					content: 'This is the contend ofa Forum Home-Thread element',
				},
				{
					id: 0,
					title: 'Forum Home Thread',
					content: 'This is the contend ofa Forum Home-Thread element',
				},
				{
					id: 0,
					title: 'Forum Home Thread',
					content: 'This is the contend ofa Forum Home-Thread element',
				},
			],
		};
	}

	componentDidMount() {
		fetch(baseURL + '/forums')
			.then((resp) => resp.json())
			.then((forums) => {
				this.setState({ forums });
			});
	}

	render() {
		return (
			<div id="forum-home-page" className="page-area">
				<div className="wrapper">
					<div id="forum-nav" className="neu-container">
						<Searchbar />
						<button>Button!</button>
					</div>
					<div id="threads" className="wrapper col mx-5">
						{this.state.forums.map((forum) => (
							<ForumTab forum={forum} />
						))}
					</div>
				</div>
			</div>
		);
	}
}

const ForumTab = (props) => {
	return (
		<div className="neu-container inset p-2 mb-4 wrapper w-75">
			<div className="neu-container circle" />

			<h3 className="mx-5 pt-2">
				<Link to={`/forums/threads/${props.forum.id}`}>{props.forum.title !== undefined ? props.forum.title : 'Forum Tab'}</Link>
			</h3>
		</div>
	);
};
