import React from 'react';
import Card from './Card';
import './Container.css';
import contact from '../../images/contact.png';
import calender from '../../images/calender.png';
import tictactoe from '../../images/tictactoe.png';

const Container = () => {
	return (
		<div className="wrapper">
			<Card pic={contact} />
			<Card pic={calender} />
			<Card pic={tictactoe} />
		</div>
	);
};

export default Container;
