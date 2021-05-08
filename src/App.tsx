import React from 'react';
import { renderRoutes } from 'react-router-config';
import './App.css';
import routes from './config/routes';
import Layout from './layout';

function App() {
	return (
		<div className="App">
			<Layout>
				{renderRoutes(routes)}
				{/* {myGlobal} */}
			</Layout>
		</div>
	);
}

export default App;
