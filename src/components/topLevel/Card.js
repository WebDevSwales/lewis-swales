import React, { useContext } from 'react';
import './Card.css';
import contact from '../../images/contact.png';
import { Context } from '../Store';

const Card = ({ pic }) => {
	let handleClick = (i) => {
		console.log('clicked');
		if (state.overlay == false) {
			let newOverlayState = { state };
			newOverlayState.overlay = true;
			setState(newOverlayState);
		}
		console.log(i);
	};

	const [state, setState] = useContext(Context);

	return (
		<div className="card" onClick={handleClick}>
			<img style={{ backgroundImage: pic }} src={pic} />
		</div>
	);
};

export default Card;
