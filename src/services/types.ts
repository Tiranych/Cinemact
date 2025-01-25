import { TCard, TGenre } from '@utils/types';

export type TServerRes = {
	genres: TGenre[];
	films: TCard[];
};
