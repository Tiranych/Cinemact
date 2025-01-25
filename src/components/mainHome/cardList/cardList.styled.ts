import styled from 'styled-components';

import { backgroundColor, boxShadowColor, mainColor } from '@utils/variables';

export const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	gap: 15px;
	align-items: flex-start;
	flex-wrap: wrap;
`;

export const Menu = styled.div`
	display: flex;
	gap: 9px;
	flex-wrap: wrap;
`;

export const Button = styled.button`
	padding: 10px 15px;
	border-radius: 30px;
	background-color: ${backgroundColor};
	transition: box-shadow 0.2s;

	&:hover {
		box-shadow: 0 0 5px ${boxShadowColor};
	}
`;

export const Content = styled.div`
	padding: 50px 0;

	@media (max-width: 800px) {
		padding: 30px 0;
	}
`;

export const Title = styled.h2`
	color: ${mainColor};
	font-size: 32px;
	font-weight: 700;
	letter-spacing: 0.32px;

	@media (max-width: 800px) {
		font-size: 26px;
	}
`;

export const List = styled.ul`
	padding: 35px 0;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 56px;

	@media (max-width: 900px) {
		grid-template-columns: repeat(3, 1fr);
		padding: 20px 0;
	}

	@media (max-width: 650px) {
		grid-template-columns: repeat(2, 1fr);
		padding: 15px 0;
	}

	@media (max-width: 450px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
