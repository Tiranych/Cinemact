import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { filmAPI } from '@services/FilmService';

import { OrderTypes, TCard } from '@utils/types';
import {
	sortByAlphabet,
	sortByAlphabetDesc,
	sortByRate,
	sortByRateDesc,
	sortByYear,
	sortByYearDesc,
} from '@utils/utils';

type TFilmState = {
	films: TCard[];
	filteredFilms: TCard[];
	filters: string[];
};

const initialState: TFilmState = { films: [], filteredFilms: [], filters: [] };

export const FilmSlice = createSlice({
	name: 'films',
	initialState,
	reducers: {
		setFilters(state, action: PayloadAction<string>) {
			if (action.payload === '') {
				state.filters = [];
				return;
			}

			if (state.filters.includes(action.payload)) {
				state.filters = state.filters.filter((key) => key !== action.payload);
			} else {
				state.filters = [...state.filters, action.payload];
			}
		},
		filterFilms(state, action: PayloadAction<string[]>) {
			state.filters = action.payload;
			if (state.filters.length === 0) {
				state.filteredFilms = state.films;
			} else {
				state.filteredFilms = state.films.filter((film) =>
					film.genre.find((filmGenre) => state.filters.includes(filmGenre.key))
				);
			}
		},
		sortFilms(state, action: PayloadAction<string>) {
			if (state.filteredFilms.length === 0) {
				state.films.sort(sortByRate);
			}

			switch (action.payload) {
				case OrderTypes.BY_RATE:
					state.filteredFilms.sort(sortByRate);
					break;
				case OrderTypes.BY_YEAR:
					state.filteredFilms.sort(sortByYear);
					break;
				case OrderTypes.BY_ALPHABET:
					state.filteredFilms.sort(sortByAlphabet);
					break;
				case OrderTypes.BY_RATE_DESC:
					state.filteredFilms.sort(sortByRateDesc);
					break;
				case OrderTypes.BY_YEAR_DESC:
					state.filteredFilms.sort(sortByYearDesc);
					break;
				case OrderTypes.BY_ALPHABET_DESC:
					state.filteredFilms.sort(sortByAlphabetDesc);
					break;
				default:
					state.filteredFilms.sort(sortByRate);
			}
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(filmAPI.endpoints.getFilms.matchFulfilled, (state, action) => {
			state.films = action.payload.films;
			state.filteredFilms = state.films.sort(sortByRate);
		});
	},
});

export default FilmSlice.reducer;
