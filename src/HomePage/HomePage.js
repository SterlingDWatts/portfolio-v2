import React, { Component } from 'react';
import HomeLanding from './HomeLanding';
import AboutMe from './AboutMe';
import Projects from './Projects/Projects';
import Connect from './Connect';

import './HomePage.css';

class HomePage extends Component {

	render() {
		return (
			<main className='HomePage'>
				<HomeLanding />
				<AboutMe />
				<Projects />
				<Connect />
			</main>
		);
	}

}

export default HomePage;
