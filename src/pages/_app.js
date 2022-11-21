import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import FrontendRoutes from '../constants/FrontendRoutes';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.scss';
import MainPage from './main-page/MainPage';

export default () => {
	return (
		<div>
			<Routes>
				<Route
					path={FrontendRoutes.MAIN_ROOT}
					element={<Navigate to={FrontendRoutes.MAIN_PAGE(1)} />}
				/>
				<Route
					path={FrontendRoutes.MAIN_PAGE()}
					element={
						<div className="mainContainer">
							<Header />
							<MainPage />
							<Footer />
						</div>
					}
				/>
			</Routes>
		</div>
	);
};
