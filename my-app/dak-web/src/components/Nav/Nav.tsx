import React, { useState } from 'react';
import './Nav.css';

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className={`nav ${isOpen ? 'open' : ''}`}>
			<div className="burger" onClick={toggleMenu}>
				<div className="burger-bar"></div>
				<div className="burger-bar"></div>
				<div className="burger-bar"></div>
			</div>
			<ul className={`nav-links ${isOpen ? 'open' : ''}`}>
				<li>
					<a href="/home">Home</a>
				</li>
				<li>
					<a href="/lessons">Lessons</a>
				</li>
				<li>
					<a href="/schedule">Schedule</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
