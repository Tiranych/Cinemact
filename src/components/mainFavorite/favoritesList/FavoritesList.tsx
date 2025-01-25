import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '@utils/routes';

import { useAppSelector } from '@hooks/redux';

import GoBack from '@assets/icons/go_back_icon.svg';
import Heart from '@assets/icons/heart.svg';

import FavoriteFilm from './favoriteFilm/FavoriteFilm';
import { Box, Button, Img, Inner, List, Text, Title, Wrapper } from './favoritesList.styled';

const Favorites = () => {
	const { favorites } = useAppSelector((state) => state.FavoriteReducer);

	const countTotalDuration = () => {
		let time = 0;
		favorites.map((film) => {
			time += Number(film.duration.split(' ')[0]);
		});
		return time;
	};

	return (
		<Inner>
			<Box>
				<Img src={Heart} alt='Избранное' />
				<Title>Избранное</Title>
			</Box>
			<List>
				{favorites.map((film) => {
					return <FavoriteFilm key={film.id} film={film} />;
				})}
			</List>
			<Wrapper>
				<Text>Всего фильмов: {favorites.length}</Text>
				<Text>Общее время: {countTotalDuration() + ' ' + 'минут'}</Text>
			</Wrapper>
			<Link to={ROUTES.HOME}>
				<Button>
					<img src={GoBack} alt='Вернуться назад' />
				</Button>
			</Link>
		</Inner>
	);
};

export default Favorites;
