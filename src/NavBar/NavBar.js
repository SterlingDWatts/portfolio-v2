import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {


	render() {
		let classnames = 'NavBar';
		if (this.props.hidden) {
			classnames = 'NavBar NavBar--hidden';
		}
		return (
			<div className={classnames}>
				{this.props.children}
			</div>
		);

	}

}

export default NavBar;
