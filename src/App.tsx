import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '@components/layout/Layout';

import Favorite from '@pages/favorite/Favorite';
import Home from '@pages/home/Home';

import { ROUTES } from '@utils/routes';

import { Wrapper } from './app.styled';

const App = () => {
	return (
		<Wrapper>
			<BrowserRouter basename='/'>
				<Layout>
					<Routes>
						<Route index element={<Home />}></Route>
						<Route path={ROUTES.FAVORITE} element={<Favorite />}></Route>
					</Routes>
				</Layout>
			</BrowserRouter>
		</Wrapper>
	);
};

export default App;
