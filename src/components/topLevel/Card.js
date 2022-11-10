import React from 'react';
import './Card.css';
import contact from '../../images/contact.png';

const Card = ({ pic }) => {
	let handleClick = (i) => {
		console.log(i);
	};

	return (
		<div className="card" onClick={handleClick}>
			<img style={{ backgroundImage: pic }} src={pic} />
		</div>
	);
};

export default Card;
