import React, { useState } from 'react';
import './RotatingNav.css';

const RotatingNav = ({ children }) => {
	let [isOpen, setOpen] = useState(false);

	const clickListener = () => {
		setOpen(!isOpen);
	}

	return <>
		<button className={`menu-btn ${isOpen ? 'rotate' : ''}`} onClick={clickListener}>
			<div>S</div>
		</button>
		<button className={`close-btn ${isOpen ? 'rotate' : ''}`} onClick={clickListener}>
			<div>C</div>
		</button>
		<nav>
			<ul className={`menu ${isOpen ? 'slide-in' : ''}`}>
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</nav>
		<div className={`page ${isOpen ? 'active' : ''}`}>
			{children}
		</div>
	</>
};

export default RotatingNav;
