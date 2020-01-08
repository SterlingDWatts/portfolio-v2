import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import PageLinks from './NavBar/PageLinks';
import HomePage from './HomePage/HomePage';
import ConnectLinks from './NavBar/ConnectLinks';
import './App.css';

class App extends Component {

    state = {
        prevScrollPos: window.pageYOffset,
        visible: true
    };

    handleScroll = () => {
        const { prevScrollPos } = this.state;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollPos > currentScrollPos;

        this.setState({
            prevScrollPos: currentScrollPos,
            visible
        });
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillMount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <div className="App">
                <NavBar hidden={!this.state.visible}>
                    <div className='NavBar_top'>
                        <a href='/'>Sterling | Dev</a>
                        <PageLinks />
                    </div>
                </NavBar>
                <Route path='/' component={HomePage} />
                <NavBar>
                    <ConnectLinks />
                </NavBar>
            </div>
        );
    }
    
}

export default App;
