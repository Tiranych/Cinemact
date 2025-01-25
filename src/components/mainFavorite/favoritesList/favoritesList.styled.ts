import styled from 'styled-components';

import { boxShadowColor, buttonColor, filterColor } from '@utils/variables';

export const Inner = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 820px;
	margin: 0 auto;
`;

export const Box = styled.div`
	display: flex;
	gap: 0 10px;
	align-items: center;
	margin-bottom: 30px;
`;

export const Img = styled.img`
	max-width: 30px;
	max-height: 30px;
`;

export const Title = styled.h1`
	font-size: 32px;
	font-weight: 700;
	letter-spacing: 0.32px;

	@media (max-width: 450px) {
		font-size: 28px;
	}
`;

export const List = styled.ul`
	display: flex;
	flex-direction: column;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 10px;
	flex-wrap: wrap;
`;

export const Text = styled.p`
	font-size: 22px;
	font-weight: 700;
	letter-spacing: 0.22px;

	@media (max-width: 450px) {
		font-size: 18px;
	}
`;

export const Button = styled.div`
	max-width: 211px;
	max-height: 55px;
	margin-top: 40px;
	border-radius: 30px;
	transition: box-shadow 0.3s;

	&:hover {
		box-shadow: 0 0 5px ${boxShadowColor};
	}
`;
