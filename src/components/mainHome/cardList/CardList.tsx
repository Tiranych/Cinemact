import React, { useEffect } from 'react';

import { useGetFilmsQuery } from '@services/FilmService';

import { OrderTypes } from '@utils/types';

import { FilmSlice } from '@store/reducers/FilmSlice';
import { OrderSlice } from '@store/reducers/OrderSlice';

import { useAppDispatch, useAppSelector } from '@hooks/redux';

import CardItem from './card/Card';
import { Button, Content, List, Menu, Nav, Title } from './cardList.styled';
import FilterButton from './filterButton/FilterButton';
import Order from './order/Order';

const CardList = () => {
	const dispatch = useAppDispatch();

	const { filterFilms, setFilters, sortFilms } = FilmSlice.actions;
	const { setOrder } = OrderSlice.actions;

	const { favorites } = useAppSelector((state) => state.FavoriteReducer);
	const { filteredFilms, filters } = useAppSelector((state) => state.FilmReducer);
	const { order } = useAppSelector((state) => state.OrderReducer);

	const { data } = useGetFilmsQuery('');

	useEffect(() => {
		dispatch(sortFilms(order));
	}, [order]);

	useEffect(() => {
		dispatch(filterFilms(filters));
		dispatch(sortFilms(order));
	}, [filters]);

	return (
		<>
			<Nav>
				<Menu>
					{data?.genres.map((genre) => (
						<FilterButton
							key={genre.key}
							filterKey={genre.key}
							text={genre.text}
							isActive={filters.includes(genre.key)}
						/>
					))}
					{data?.genres.length ? (
						<Button
							onClick={() => {
								dispatch(setFilters(''));
								dispatch(setOrder(OrderTypes.BY_RATE));
							}}
						>
							Сбросить
						</Button>
					) : (
						<></>
					)}
				</Menu>
				<Order />
			</Nav>
			<Content>
				<Title>Все фильмы</Title>
				<List>
					{filteredFilms.map((elem) => (
						<CardItem
							key={elem.id}
							film={elem}
							favoriteFilm={favorites.find((favorite) => favorite.id === elem.id)}
						/>
					))}
				</List>
			</Content>
		</>
	);
};

export default CardList;
