import styled from 'styled-components';

import { mainBackgroundColor, mainColor } from '@utils/variables';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100%;
	background-color: ${mainBackgroundColor};
	color: ${mainColor};
`;
