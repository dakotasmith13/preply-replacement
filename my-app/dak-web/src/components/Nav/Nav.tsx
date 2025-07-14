import { useState } from 'react';
import './Nav.css';

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className={`nav ${isOpen ? 'open' : ''}`}>
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
				<li className="logout">
					<a href="/">Log out</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
