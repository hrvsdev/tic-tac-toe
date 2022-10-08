import { customAlphabet } from 'nanoid';
import copyToClipboard from 'copy-to-clipboard';

export const winLogic = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

export const shareId = (id: string, url: string) => {
	navigator.share({
		title: 'Tic Tac Toe - T3',
		text: `Play this Tic Tac Toe game with id - ${id}`,
		url: url
	});
};

export const genId = () => customAlphabet('0123456789', 6)();

export const copy = (text: string) => copyToClipboard(text);
