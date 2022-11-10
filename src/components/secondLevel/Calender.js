import React from 'react';
import './Calender.css';
import Close from '../tools/Close';

const Calender = () => {
	return (
		<>
			<div className="holder">
				<Close />
				<form className="userInfo">
					<label>Name:</label>
					<input type="text"></input>
					<label>port:</label>
					<input type="text"></input>
				</form>
				<button onClick={null}>submit</button>
				<form className="calenderGrid">
					<input type="text" className="day" id="1"></input>
					<input type="text" className="day" id="2"></input>
					<input type="text" className="day" id="3"></input>
					<input type="text" className="day" id="4"></input>
					<input type="text" className="day" id="5"></input>
					<input type="text" className="day" id="6"></input>
					<input type="text" className="day" id="7"></input>
					<input type="text" className="day" id="8"></input>
					<input type="text" className="day" id="9"></input>
				</form>
			</div>
		</>
	);
};

export default Calender;

//this calender will use a database to allow users to make their own calender.
//I think I will user NeDB for the funtionality

//the port will allow multiple people to store calender notes
//notes will have name appended so we know who made the note

//I want to make the days a component so that we can generate them instead of manuall making days

//because I am here I am going to note some other features I want to add
//-text display under title showing more info about each module
//-change of background color
//-tictactoe game
//-breakaff
//-make contact better
// next time move these notes to app.js
