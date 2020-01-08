import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PageLinks.css';

class PageLinks extends Component {

	render() {
		return (
			<ul className='PageLinks'>
				<li className='large'>
					<a href='#about-me'>About Me</a>
				</li>
				<li className='large'>
					<a href='#projects'>Projects</a>
				</li>
				<li className='large'>
					<a href='#connect'>Connect</a>
				</li>
				<li className='large'>
					<Link 
						to='/blog'
					>
						Blog 
					</Link>
				</li>
				<li className='small'>
					<button className='burger_button'

					>
						<i className='fas fa-bars'></i>
					</button>
				</li>
			</ul>
		);
	}

}

export default PageLinks;
