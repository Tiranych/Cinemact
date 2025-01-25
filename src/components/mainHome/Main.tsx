import React from 'react';

import Container from '@components/shared-components/container/Container';

import CardList from './cardList/CardList';
import { Section } from './main.styled';

const Main = () => {
	return (
		<Section>
			<Container>
				<CardList />
			</Container>
		</Section>
	);
};

export default Main;
