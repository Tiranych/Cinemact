import styled from 'styled-components';

import { backgroundColor, mainColor, mainFontSize, subtitleColor } from '@utils/variables';

export const Inner = styled.header`
	padding: 50px 0 40px;
	border-bottom: 1px solid #f6f6f6;

	@media (max-width: 800px) {
		padding: 30px 0 20px;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 10px;
	min-height: 50px;
`;

export const Anchor = styled.a`
	display: flex;
	align-items: center;
`;

export const ImageLogo = styled.img`
	max-width: 38px;
	max-height: 38px;
	margin-right: 17px;
`;

export const Title = styled.h1`
	color: ${mainColor};
	font-size: 24px;
	font-weight: 800;
	letter-spacing: 0.24px;
	text-transform: uppercase;

	@media (max-width: 800px) {
		font-size: 20px;
	}
`;

export const SubTitle = styled.p`
	color: ${subtitleColor};
	font-size: ${mainFontSize};

	@media (max-width: 800px) {
		font-size: 14px;
	}
`;

export const Button = styled.div`
	display: flex;
	align-items: center;
	gap: 0 3px;
	color: ${mainColor};
	font-size: ${mainFontSize};
	font-weight: 700;
	padding: 16px 30px;
	border-radius: 30px;
	background: ${backgroundColor};
	transition: transform 0.3s;
	max-height: 50px;
	min-width: 100px;

	&:hover {
		transform: scale(1.1);
	}

	@media (max-width: 800px) {
		padding: 8px 20px;
		min-width: 80px;
	}
`;

export const ImageFavorite = styled.img`
	max-width: 25px;
	max-height: 25px;
`;
