import React, { Component } from 'react';
import './ConnectLinks.css';

class ConnectLinks extends Component {

    render() {
        return (
            <ul className='ConnectLinks'>
                <li><a href="https://github.com/SterlingDWatts" target="_blank"><i className="fab fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/sterlingdwatts/" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://www.facebook.com/SterlingDWatts" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="https://www.instagram.com/sterlingdwatts" target="_blank"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://twitter.com/SterlingDWatts" target="_blank"><i className="fab fa-twitter"></i></a></li>
            </ul>
        );
    }

}

export default ConnectLinks;
