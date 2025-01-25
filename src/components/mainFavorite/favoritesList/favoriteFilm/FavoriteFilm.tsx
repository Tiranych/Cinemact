import React from 'react';

import { getGenres } from '@utils/utils';

import { FavoriteSlice } from '@store/reducers/FavoriteSlice';

import { useAppDispatch } from '@hooks/redux';

import deleteIcon from '@assets/icons/delete_icon.svg';

import { Box, Button, FilmImage, Inner, Item, Text, Title } from './favoriteFilm.styled';
import { TFavoriteCard } from './types';

const FavoriteFilm = ({ film }: TFavoriteCard) => {
	const dispatch = useAppDispatch();

	const { setFavorites } = FavoriteSlice.actions;
	const handleClick = () => {
		dispatch(setFavorites({ film: film, isFavorite: false }));
	};

	return (
		<Item>
			<Box>
				<FilmImage src={film.image} alt={film.title} />
				<Inner>
					<Title>{film.title}</Title>
					<Text>
						{film.year}, {film.country}, {getGenres(film)}
					</Text>
					<Text>
						{film.duration}, {film.rate}
					</Text>
				</Inner>
			</Box>
			<Button onClick={handleClick}>
				<img src={deleteIcon} alt='Удалить' />
			</Button>
		</Item>
	);
};

export default FavoriteFilm;
