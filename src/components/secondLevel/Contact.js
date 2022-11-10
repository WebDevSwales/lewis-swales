import React from 'react';
import './Contact.css';
import Close from '../tools/Close';

const Contact = () => {
	return (
		<>
			<div className="holder">
				<Close />
				<p className="name">Lewis Swales</p>
				<p className="location">Location: Scotland</p>
				<p className="experience">
					Experienced in:
					<ul className="expList">
						<li>HTML, CSS, JavaScript</li>
						<li>React, Jquery, Angular</li>
						<li>PHP</li>
						<li>Python</li>
						<li>Java</li>
						<li>Miniscript</li>
						<li>C++</li>
					</ul>
				</p>
				<p className="email">Email: Email@email.com</p>
				<p className="phone">Phone: phone number</p>
				<p className="github">GitHub: GitHub</p>
				<p className="twitter">Twitter: twitter</p>
			</div>
		</>
	);
};

export default Contact;
