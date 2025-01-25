import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { filmAPI } from '../services/FilmService';
import FavoriteReducer from './reducers/FavoriteSlice';
import FilmReducer from './reducers/FilmSlice';
import OrderReducer from './reducers/OrderSlice';

const rootReducer = combineReducers({
	FilmReducer,
	OrderReducer,
	FavoriteReducer,
	[filmAPI.reducerPath]: filmAPI.reducer,
});

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['FavoriteReducer'],
	blacklist: [filmAPI.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setUpStore = () => {
	return configureStore({
		reducer: persistedReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
				},
			}).concat(filmAPI.middleware),
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setUpStore>;
export type AppDispatch = AppStore['dispatch'];
