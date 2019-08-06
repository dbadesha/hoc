import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Button from './component/Button';

function App() {
	return (
		<div className="App">
			<Button disable={true} />
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
