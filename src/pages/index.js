import React from 'react';
import { Container } from '@mui/material';
import MainPage from './main-page';

const Root = () => {
	return (
		<Container
			sx={{ minHeight: '100vh' }}
			disableGutters={true}
			maxWidth={false}
		>
			<MainPage />
		</Container>
	);
};

export default Root;
