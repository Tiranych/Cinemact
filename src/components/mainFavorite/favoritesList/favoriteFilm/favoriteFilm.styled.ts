import styled from 'styled-components';

import { boxShadowColor, subtitleColor } from '@utils/variables';

export const Item = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0 5px;
	padding: 30px 0;
	border-top: 1px solid ${subtitleColor};
`;

export const Box = styled.div`
	display: flex;
	gap: 0 15px;
`;

export const FilmImage = styled.img`
	width: 100%;
	height: 100%;
	max-width: 100px;
	max-height: 100px;
	object-fit: cover;

	@media (max-width: 400px) {
		max-width: 80px;
		max-height: 80px;
	}
`;

export const Inner = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

export const Title = styled.h2`
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
	white-space: wrap;
	font-size: 22px;
	font-weight: 700;
	letter-spacing: 0.22px;

	@media (max-width: 400px) {
		font-size: 18px;
	}
`;

export const Text = styled.p`
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	font-size: 18px;
	letter-spacing: 0.18px;
	color: ${subtitleColor};
	margin-top: 10px;
`;

export const Button = styled.button`
	max-width: 32px;
	max-height: 32px;
	transition: box-shadow 0.3s;
	border-radius: 50%;

	&:hover {
		box-shadow: 0 0 5px ${boxShadowColor};
	}
`;
