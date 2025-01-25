import React from 'react';

import { OrderSlice } from '@store/reducers/OrderSlice';

import { useAppDispatch, useAppSelector } from '@hooks/redux';

import arrowUp from '@assets/icons/arrow_up.svg';

import { Box, Button, Image, Inner, Item, List, Text, Wrapper } from './order.styled';
import { TOnChangeText } from './types';

const Order = () => {
	const dispatch = useAppDispatch();

	const { pressed, order } = useAppSelector((state) => state.OrderReducer);
	const { setPressed, setOrder } = OrderSlice.actions;

	const handleClick = () => {
		dispatch(setPressed(!pressed));
	};

	const changeText: TOnChangeText = (e) => {
		dispatch(setPressed(!pressed));
		let newText = e.currentTarget.textContent;
		if (typeof newText === 'string') {
			dispatch(setOrder(newText));
		}
	};

	return (
		<Wrapper>
			<Button onClick={handleClick}>
				<Image $pressed={pressed} src={arrowUp} alt='Отсортировать по:' />
				<Text>Сортировка по: </Text>
				<Inner>{order}</Inner>
			</Button>
			<Box $pressed={pressed}>
				<List>
					<Item onClick={changeText}>по рейтингу</Item>
					<Item onClick={changeText}>по году</Item>
					<Item onClick={changeText}>по алфавиту</Item>
					<Item onClick={changeText}>по рейтингу (убыв.)</Item>
					<Item onClick={changeText}>по году (убыв.)</Item>
					<Item onClick={changeText}>по алфавиту (убыв.)</Item>
				</List>
			</Box>
		</Wrapper>
	);
};

export default Order;
