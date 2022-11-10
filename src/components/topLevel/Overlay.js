import React, { useContext } from 'react';
import './overlay.css';
import Title from './Title';
import Contact from '../secondLevel/Contact';
import { Context } from '../Store';

const Overlay = () => {
	const [state, setState] = useContext(Context);
	console.log(`state.overlay: ${state.overlay}`);

	return state.overlay ? (
		<div className="overlay">
			<Contact />
			<Title />
		</div>
	) : null;
};

export default Overlay;
