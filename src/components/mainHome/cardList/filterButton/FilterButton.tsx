import React from 'react';

import { FilmSlice } from '@store/reducers/FilmSlice';

import { useAppDispatch } from '@hooks/redux';

import { Button } from './FilterButton.styled';
import { TButtonProps } from './types';

const FilterButton = ({ filterKey, text, isActive }: TButtonProps) => {
	const dispatch = useAppDispatch();
	const { setFilters } = FilmSlice.actions;

	const chooseFilter = () => {
		dispatch(setFilters(filterKey));
	};

	return (
		<Button $isActive={isActive} onClick={chooseFilter}>
			{text}
		</Button>
	);
};

export default FilterButton;
