import React, { useContext } from 'react';
import './Card.css';
import contact from '../../images/contact.png';
import { Context } from '../Store';

const Card = ({ pic, element }) => {
	let handleClick = (i) => {
		console.log('clicked');

		let newOverlayState = { state };
		newOverlayState.overlay = true;
		newOverlayState.activeElement = element;
		setState(newOverlayState);
	};

	const [state, setState] = useContext(Context);

	return (
		<div className="card" onClick={handleClick}>
			<img style={{ backgroundImage: pic }} src={pic} />
		</div>
	);
};

export default Card;
