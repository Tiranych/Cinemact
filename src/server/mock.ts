import { GenresTypes, TCard, TGenre } from '../utils/types';

const pathToImg = `http://localhost:3000/images/posters/`;

export const genres: TGenre[] = [
	{ key: GenresTypes.DRAMA, text: 'Драмы' },
	{ key: GenresTypes.FANTASTIC, text: 'Фантастика' },
	{ key: GenresTypes.ADVENTURE, text: 'Приключения' },
	{ key: GenresTypes.HORROR, text: 'Ужасы' },
	{ key: GenresTypes.THRILLER, text: 'Триллеры' },
	{ key: GenresTypes.ACTION, text: 'Боевики' },
];

export const films: TCard[] = [
	{
		id: 1,
		title: 'Тайлер Рейк: Операция по спасению',
		image: `${pathToImg}1.jpg`,
		year: 2020,
		genre: [{ key: GenresTypes.ACTION, text: 'Боевики' }],
		country: 'США',
		duration: '116 минут',
		rate: '6,9',
	},
	{
		id: 2,
		title: 'Неудержимые',
		image: `${pathToImg}2.jpg`,
		year: 2010,
		genre: [
			{ key: GenresTypes.ACTION, text: 'Боевики' },
			{ key: GenresTypes.THRILLER, text: 'Триллеры' },
		],
		country: 'США',
		duration: '103 минуты',
		rate: '6,9',
	},
	{
		id: 3,
		title: 'Одноклассники',
		image: `${pathToImg}3.jpg`,
		year: 2010,
		genre: [{ key: GenresTypes.ADVENTURE, text: 'Приключения' }],
		country: 'США',
		duration: '102 минуты',
		rate: '6,8',
	},
	{
		id: 4,
		title: 'Крик 4',
		image: `${pathToImg}4.jpg`,
		year: 2011,
		genre: [
			{ key: GenresTypes.HORROR, text: 'Ужасы' },
			{ key: GenresTypes.THRILLER, text: 'Триллеры' },
		],
		country: 'США',
		duration: '111 минут',
		rate: '6,1',
	},
	{
		id: 5,
		title: 'Бегущий в лабиринте',
		image: `${pathToImg}5.jpg`,
		year: 2014,
		genre: [
			{ key: GenresTypes.FANTASTIC, text: 'Фантастика' },
			{ key: GenresTypes.THRILLER, text: 'Триллеры' },
			{ key: GenresTypes.ADVENTURE, text: 'Приключения' },
		],
		country: 'США',
		duration: '113 минут',
		rate: '6,8',
	},
	{
		id: 6,
		title: 'Судья Дредд',
		image: `${pathToImg}6.jpg`,
		year: 2012,
		genre: [
			{ key: GenresTypes.FANTASTIC, text: 'Фантастика' },
			{ key: GenresTypes.ACTION, text: 'Боевики' },
		],
		country: 'Великобритания',
		duration: '95 минут',
		rate: '6,9',
	},
	{
		id: 7,
		title: 'Форсаж',
		image: `${pathToImg}7.jpg`,
		year: 2001,
		genre: [
			{ key: GenresTypes.ACTION, text: 'Боевики' },
			{ key: GenresTypes.THRILLER, text: 'Триллеры' },
		],
		country: 'США',
		duration: '106 минут',
		rate: '7,8',
	},
	{
		id: 8,
		title: 'Титаник',
		image: `${pathToImg}8.jpg`,
		year: 1997,
		genre: [
			{ key: GenresTypes.DRAMA, text: 'Драмы' },
			{ key: GenresTypes.THRILLER, text: 'Триллеры' },
		],
		country: 'США',
		duration: '194 минуты',
		rate: '8,4',
	},
	{
		id: 9,
		title: 'Джентельмены',
		image: `${pathToImg}9.jpg`,
		year: 2019,
		genre: [{ key: GenresTypes.ACTION, text: 'Боевики' }],
		country: 'США',
		duration: '113 минуты',
		rate: '8,6',
	},
];
