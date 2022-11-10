import './App.css';
import { useState } from 'react';
import Title from './components/topLevel/Title';
import Container from './components/topLevel/Container';
import Overlay from './components/topLevel/Overlay';

function App() {
	return (
		<>
			{showOverlay ? <Overlay /> : null}
			<Title />
			<Container />
		</>
	);
}

export default App;
