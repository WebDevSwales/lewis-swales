import './App.css';
import { useState } from 'react';
import Title from './components/topLevel/Title';
import Container from './components/topLevel/Container';
import Overlay from './components/topLevel/Overlay';
import Store from './components/Store';

function App() {
	return (
		<Store>
			<Overlay />
			<Title />
			<Container />
		</Store>
	);
}

export default App;
