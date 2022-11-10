import React, { useContext } from 'react';
import './Close.css';
import { Context } from '../Store';

const Close = () => {
	const [state, setState] = useContext(Context);

	let handleclick = () => {
		console.log('button clicked');
		let newOverlayState = { state };
		newOverlayState.overlay = false;
		setState(newOverlayState);
	};

	return (
		<>
			<button className="exitButton" onClick={handleclick}>
				X
			</button>
		</>
	);
};

export default Close;
