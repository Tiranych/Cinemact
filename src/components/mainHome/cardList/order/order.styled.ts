import styled from 'styled-components';

import { backgroundColor, boxShadowColor, buttonColor, mainColor } from '@utils/variables';

export const Wrapper = styled.div`
	position: relative;
`;

export const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0 7px;
	color: ${mainColor};
	font-size: 14px;
	font-weight: 700;
	letter-spacing: 0.21px;
	margin-top: 15px;
	max-height: 6px;
	padding: 5px 0;
`;

export const Image = styled.img<{ $pressed: boolean }>`
	transition: transform 0.3s;
	transform: ${({ $pressed }) => ($pressed ? 'rotateX(0deg)' : 'rotateX(-180deg)')};
`;

export const Text = styled.p`
	min-width: 110px;
`;

export const Inner = styled.p`
	font-size: 14px;
	color: ${backgroundColor};
	text-decoration: underline dotted 0.5px;
	text-underline-offset: 5px;
	white-space: nowrap;
`;

export const Item = styled.li`
	font-weight: 700;
	padding: 10px 15px;
	transition:
		background-color 0.3s,
		color 0.3s;

	&:hover {
		color: ${mainColor};
		background-color: ${boxShadowColor};
	}
`;

export const Box = styled.div<{ $pressed: boolean }>`
	display: ${({ $pressed }) => ($pressed ? 'block' : 'none')};
	position: absolute;
	z-index: 10;
	right: 0;
	top: 150%;
	width: 100%;
	max-width: 132px;
	min-height: 136px;
	background-color: ${mainColor};
	border-radius: 10px;
	${Item} {
		cursor: ${({ $pressed }) => $pressed && 'pointer'};
	}
`;

export const List = styled.ul`
	color: ${buttonColor};
	position: relative;
	z-index: inherit;
	display: flex;
	flex-direction: column;
	padding: 13px 0;
`;
