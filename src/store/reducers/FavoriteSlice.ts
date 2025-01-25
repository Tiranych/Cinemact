import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { TCard } from '@utils/types';

type TFavoriteState = {
	favorites: TCard[];
};

const initialState: TFavoriteState = {
	favorites: [],
};

export const FavoriteSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		setFavorites(state, action: PayloadAction<{ film: TCard; isFavorite: boolean }>) {
			if (action.payload.isFavorite) {
				state.favorites = [...state.favorites, action.payload.film];
			} else {
				state.favorites = state.favorites.filter((film) => film.id !== action.payload.film.id);
			}
		},
	},
});

export default FavoriteSlice.reducer;
