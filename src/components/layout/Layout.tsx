import React from 'react';

import Header from '@components/shared-components/header/Header';

import { TLayout } from './types';

const Layout = ({ children }: TLayout) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};

export default Layout;
