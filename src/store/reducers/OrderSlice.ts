import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { OrderTypes } from '@utils/types';

type TOrderState = {
	pressed: boolean;
	order: string;
};

const initialState: TOrderState = { pressed: false, order: OrderTypes.BY_RATE };

export const OrderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		setPressed(state, action: PayloadAction<boolean>) {
			state.pressed = action.payload;
		},
		setOrder(state, action: PayloadAction<string>) {
			state.order = action.payload;
		},
	},
});

export default OrderSlice.reducer;
