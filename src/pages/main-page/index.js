import { Grid } from '@mui/material';
import React from 'react';
import Header from '../../components/header';

const MainPage = () => {
	return (
		<Grid
			container
			sx={{ bgcolor: 'black', minHeight: '100vh', minWidth: '100vw' }}
		>
			<Grid item>
				<Header />
			</Grid>
		</Grid>
	);
};

export default MainPage;
