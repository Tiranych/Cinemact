import styled from 'styled-components';

import {
	backgroundColor,
	boxShadowColor,
	buttonColor,
	filterColor,
	mainColor,
} from '@utils/variables';

export const Button = styled.button<{ $isActive: boolean }>`
	color: ${({ $isActive }) => ($isActive ? mainColor : buttonColor)};
	background: ${({ $isActive }) => ($isActive ? backgroundColor : filterColor)};
	font-weight: 700;
	letter-spacing: 0.24px;
	border-radius: 30px;
	padding: 14px 30px;
	transition: box-shadow 0.2s;

	&:hover {
		box-shadow: 0 0 5px ${boxShadowColor};
	}

	@media (max-width: 800px) {
		padding: 10px 20px;
	}
`;
