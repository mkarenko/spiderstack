import hearts from '../assets/suits/hearts.png';
import spades from '../assets/suits/spades.png';
import diamonds from '../assets/suits/diamonds.png';
import clubs from '../assets/suits/clubs.png';

export const suits = [hearts, spades, diamonds, clubs];
export const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

export const shuffleArray = (array: any[]) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};

export const initializeDeck = () => {
	const deck = [];
	for (let i = 0; i < 2; i++) {
		for (const suit of suits) {
			for (const value of values) {
				deck.push({suit, value});
			}
		}
	}
	return shuffleArray(deck);
};

export const handleMoveCard = (fromCol: number, fromRow: number, toCol: number) => {};

export const checkWinCondition = () => {};
