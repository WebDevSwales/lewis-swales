import React from 'react';
import Card from './Card';
import './Container.css';
import contact from '../../images/contact.png';
import calender from '../../images/calender.png';
import tictactoe from '../../images/tictactoe.png';

import Contact from '../secondLevel/Contact';
import Calender from '../secondLevel/Calender';
import Close from '../tools/Close';

const Container = () => {
	return (
		<div className="wrapper">
			<Card pic={contact} element={<Contact />} />
			<Card pic={calender} element={<Calender />} />
			<Card pic={tictactoe} element={<Close />} />
		</div>
	);
};

export default Container;
