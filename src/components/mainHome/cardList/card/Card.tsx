import React from 'react';

import { getGenres } from '@utils/utils';

import { FavoriteSlice } from '@store/reducers/FavoriteSlice';

import { useAppDispatch } from '@hooks/redux';

import Favorite from '@assets/icons/favorite.svg';
import FavoriteFilled from '@assets/icons/favorite_filled.svg';

import { Button, Div, Image, Img, Info, Item, Rate, Title } from './card.styled';
import { TCardProps } from './types';

const CardItem = ({ film, favoriteFilm }: TCardProps) => {
	const dispatch = useAppDispatch();

	const { setFavorites } = FavoriteSlice.actions;

	const handleClick = () => {
		dispatch(setFavorites({ film: film, isFavorite: !favoriteFilm }));
	};

	return (
		<Item>
			<Img src={film.image} alt={film.title} />
			<Info>
				<Button onClick={handleClick}>
					<Image src={!!favoriteFilm ? FavoriteFilled : Favorite} alt='Добавить в избранное' />
				</Button>
				<Rate>{film.rate}</Rate>
				<Div>
					{film.year}, {film.country}, {getGenres(film)}
				</Div>
				<p>{film.duration}</p>
			</Info>
			<Title>{film.title}</Title>
		</Item>
	);
};

export default CardItem;
