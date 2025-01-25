import styled from 'styled-components';

import { boxShadowColor, buttonColor, filterColor, subtitleColor } from '@utils/variables';

export const Inner = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Box = styled.div`
	display: flex;
	gap: 0 10px;
	align-items: center;
`;

export const Subtitle = styled.h2`
	font-size: 32px;
	font-weight: 700;
	letter-spacing: 0.32px;
	margin-bottom: 5px;

	@media (max-width: 800px) {
		font-size: 26px;
	}

	@media (max-width: 500px) {
		font-size: 18px;
	}
`;

export const Img = styled.img`
	max-width: 32px;
	max-height: 32px;

	@media (max-width: 500px) {
		max-width: 24px;
		max-height: 24px;
	}
`;

export const Text = styled.p`
	color: ${subtitleColor};
	text-align: center;
	font-size: 18px;
	max-width: 550px;
	line-height: 145.4%;
	letter-spacing: 0.18px;
	margin-top: 5px;

	@media (max-width: 800px) {
		font-size: 14px;
	}

	@media (max-width: 500px) {
		font-size: 12px;
	}
`;

export const Image = styled.img`
	width: 100%;
	height: 100px;
	max-width: 300px;
	object-fit: cover;
	min-height: 255px;
	margin: 50px 0 75px;

	@media (max-width: 800px) {
		margin: 35px 0 50px;
	}
`;

export const Button = styled.div`
	color: ${buttonColor};
	background: ${filterColor};
	font-weight: 700;
	letter-spacing: 0.24px;
	border-radius: 30px;
	padding: 14px 30px;
	transition: box-shadow 0.3s;

	&:hover {
		box-shadow: 0 0 5px ${boxShadowColor};
	}

	@media (max-width: 500px) {
		padding: 14px 20px;
	}
`;
