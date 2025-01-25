import React from 'react';

import Container from '@components/shared-components/container/Container';

import { useAppSelector } from '@hooks/redux';

import EmptyFavorite from './emptyFavorite/EmptyFavorite';
import FavoritesList from './favoritesList/FavoritesList';
import { Section } from './main.styled';

const Main = () => {
	const { favorites } = useAppSelector((state) => state.FavoriteReducer);

	return (
		<Section>
			<Container>{favorites.length > 0 ? <FavoritesList /> : <EmptyFavorite />}</Container>
		</Section>
	);
};

export default Main;
