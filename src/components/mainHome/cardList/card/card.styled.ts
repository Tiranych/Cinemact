import styled from 'styled-components';

import { boxShadowColor, mainColor, mainFontSize, overlayColor } from '@utils/variables';

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: transparent;
	color: transparent;
	transition:
		color 0.3s,
		background-color 0.3s;
	padding-left: 10px;
	padding-bottom: 15px;
	border-radius: 10px;
`;

export const Button = styled.button`
	position: absolute;
	top: 15px;
	right: 10px;
`;

export const Image = styled.img`
	opacity: 0;
	transition:
		opacity 0.3s,
		filter 0.2s;
	cursor: pointer;
	fill: ${mainColor};
	&:hover {
		filter: drop-shadow(0 0 3px ${boxShadowColor});
	}
`;

export const Item = styled.li`
	position: relative;
	width: 100%;
	height: 100%;
	max-width: 260px;
	color: ${mainColor};
	transition: transform 0.3s;
	&:hover {
		transform: scale(1.05);
		${Info} {
			background-color: ${overlayColor};
			color: ${mainColor};
		}
		${Image} {
			opacity: 1;
		}
	}
	@media (max-width: 450px) {
		max-width: 450px;
	}
`;

export const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 10px;
`;

export const Rate = styled.p`
	font-size: 20px;
	font-weight: 700;
	height: 24px;
	line-height: 24px;
`;

export const Div = styled.div`
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
	margin: 5px 0;
`;

export const Title = styled.h3`
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
	width: 100%;
	font-size: 20px;
	font-weight: 800;
	margin-top: 10px;
	letter-spacing: 0.2px;

	@media (max-width: 650px) {
		font-size: ${mainFontSize};
	}
`;
