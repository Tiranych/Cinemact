import { TCard } from './types';
import { TSortFunction } from './types';

export const sortByRate: TSortFunction = (a, b) => (a.rate < b.rate ? -1 : 1);
export const sortByYear: TSortFunction = (a, b) => a.year - b.year;
export const sortByAlphabet: TSortFunction = (a, b) => (a.title < b.title ? -1 : 1);
export const sortByRateDesc: TSortFunction = (a, b) => (a.rate > b.rate ? -1 : 1);
export const sortByYearDesc: TSortFunction = (a, b) => b.year - a.year;
export const sortByAlphabetDesc: TSortFunction = (a, b) => (a.title > b.title ? -1 : 1);

export const getGenres = (film: TCard) => {
	let result = '';
	film.genre.map((genreFilm) => {
		result += genreFilm.text + ', ';
	});
	result = result.slice(0, -2);
	return result;
};
