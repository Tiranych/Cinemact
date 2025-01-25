import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TServerRes } from './types';

export const filmAPI = createApi({
	reducerPath: 'filmAPI',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
	endpoints: (builder) => ({
		getFilms: builder.query<TServerRes, string>({
			query: () => '/films',
		}),
	}),
});

export const { useGetFilmsQuery } = filmAPI;
