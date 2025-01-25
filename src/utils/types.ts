export type TCard = {
	id: number;
	title: string;
	image: string;
	year: number;
	genre: TGenre[];
	country: string;
	duration: string;
	rate: string;
};

export type TGenre = { key: string; text: string };

export enum GenresTypes {
	DRAMA = 'drama',
	HORROR = 'horror',
	FANTASTIC = 'fantastic',
	ADVENTURE = 'adventure',
	THRILLER = 'thriller',
	ACTION = 'action',
}

export type TSortFunction = (a: TCard, b: TCard) => number;

export enum OrderTypes {
	BY_RATE = 'по рейтингу',
	BY_YEAR = 'по году',
	BY_ALPHABET = 'по алфавиту',
	BY_RATE_DESC = 'по рейтингу (убыв.)',
	BY_YEAR_DESC = 'по году (убыв.)',
	BY_ALPHABET_DESC = 'по алфавиту (убыв.)',
}
