import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Container from '@components/shared-components/container/Container';

import { ROUTES } from '@utils/routes';

import { useAppSelector } from '@hooks/redux';

import Favorite from '@assets/icons/heart.svg';
import Logo from '@assets/icons/logo.svg';

import {
	Anchor,
	Button,
	ImageFavorite,
	ImageLogo,
	Inner,
	SubTitle,
	Title,
	Wrapper,
} from './header.styled';

const Header = () => {
	const location = useLocation();

	const { favorites } = useAppSelector((state) => state.FavoriteReducer);

	return (
		<Inner>
			<Container>
				<Wrapper>
					<Anchor href={ROUTES.HOME}>
						<ImageLogo src={Logo} alt='Логотип' />
						<span>
							<Title>Cinemact</Title>
							<SubTitle>Включи эмоции на максимум</SubTitle>
						</span>
					</Anchor>
					{location.pathname === ROUTES.HOME && (
						<Link to={ROUTES.FAVORITE}>
							<Button>
								<ImageFavorite src={Favorite} alt='Избранное' />
								{favorites.length}
							</Button>
						</Link>
					)}
				</Wrapper>
			</Container>
		</Inner>
	);
};

export default Header;
