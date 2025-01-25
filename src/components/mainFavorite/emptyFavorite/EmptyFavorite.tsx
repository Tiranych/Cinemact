import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '@utils/routes';

import Happy from '@assets/icons/happy_emoji.svg';
import Minions from '@assets/images/minions.jpg';

import { Box, Button, Image, Img, Inner, Subtitle, Text } from './emptyFavorite.styled';

const EmptyFavorite = () => {
	return (
		<Inner>
			<Box>
				<Subtitle>В избранном пока что пусто</Subtitle>
				<Img src={Happy} alt='Смайлик' />
			</Box>
			<Text>
				Вероятнее всего Вы не нашли тот самый фильм. Для того, чтобы насладиться фильмами, перейдите
				на главную страницу.
			</Text>
			<Image src={Minions} alt='Миньоны' />
			<Link to={ROUTES.HOME}>
				<Button>Вернуться назад</Button>
			</Link>
		</Inner>
	);
};

export default EmptyFavorite;
