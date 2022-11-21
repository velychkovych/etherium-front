import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './pages';

document.getElementById('preloader-div').remove();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Root />
	</React.StrictMode>
);
