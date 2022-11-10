import React from 'react';
import './overlay.css';
import Title from './Title';
import Contact from '../secondLevel/Contact';

const Overlay = () => {
	return (
		<div className="overlay">
			<Contact />
			<Title />
		</div>
	);
};

export default Overlay;
