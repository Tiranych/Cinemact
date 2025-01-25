import styled from 'styled-components';

export const Section = styled.main`
	flex-grow: 1;
	padding: 40px 0 100px;

	@media (max-width: 800px) {
		padding: 30px 0;
	}

	@media (max-width: 500px) {
		padding: 20px 0;
	}
`;
