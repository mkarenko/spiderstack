import {IonGrid, IonRow, IonCol, IonPage} from '@ionic/react';
import {useEffect, useState} from 'react';
import {useRecoilValue} from 'recoil';

import {colorsOfSuitsAtom} from '../atoms/gameSettings.atom';
import PlayingCard from '../components/PlayingCard';

import hearts from '../assets/suits/hearts.png';
import spades from '../assets/suits/spades.png';
import diamonds from '../assets/suits/diamonds.png';
import clubs from '../assets/suits/clubs.png';
import cardBack from '../assets/suits/card_back.svg';
import background from '../assets/background_1.jpg';

const suits = [hearts, spades, diamonds, clubs];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

const GameBoard: React.FC = () => {
	const columns = 10;
	const colorsOfSuits = useRecoilValue(colorsOfSuitsAtom);

	const [cards, setCards] = useState<{suit: string; value: string}[][]>([]);
	const [stock, setStock] = useState<{suit: string; value: string}[]>([]);
	const [isAnyCardDragged, setIsAnyCardDragged] = useState(false);

	useEffect(() => {
		const deck = initializeDeck();
		const initialTableau = [];
		for (let i = 0; i < columns; i++) {
			initialTableau.push(deck.splice(0, i < 4 ? 6 : 5));
		}
		setCards(initialTableau);
		setStock(deck);
	}, [colorsOfSuits]);

	const coverColumns = () => {
		if (stock.length === 0) {
			const newCards = [...cards];
			for (let i = 0; i < newCards.length; i++) {
				newCards[i] = newCards[i].concat(stock.splice(0, 1));
			}
			setCards(newCards);
		}
	};

	const shuffleArray = (array: any[]) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};

	const initializeDeck = () => {
		const deck = [];
		const numColors = colorsOfSuits > 1 ? colorsOfSuits : 1;

		for (let i = 0; i < numColors; i++) {
			for (const suit of suits) {
				for (const value of values) {
					deck.push({suit, value});
				}
			}
		}
		return shuffleArray(deck);
	};

	// Function to handle when a card starts dragging
	const handleCardDragStart = () => {
		setIsAnyCardDragged(true);
	};

	// Function to handle when a card stops dragging
	const handleCardDragStop = () => {
		setIsAnyCardDragged(false);
	};

	return (
		<IonPage className='w-full' style={{background: `url(${background})`, backgroundSize: 'cover'}}>
			<IonGrid className='w-full'>
				<IonRow className='flex w-full justify-around items-center'>
					<img
						alt='card_back'
						src={cardBack}
						onClick={coverColumns}
						className='w-28 h-auto rounded-lg shadow-md cursor-pointer'
					/>
					{[...Array(8)].map((_, index) => (
						<IonCol key={index} className=''>
							<div className='w-28 h-40 border-2 border-dashed border-gray-400'></div>{' '}
						</IonCol>
					))}
				</IonRow>
				<div id='grid-boundries' className='h-full'>
					<IonRow>
						{cards.map((col, colIndex) => (
							<IonCol key={colIndex} style={{display: 'flex', flexDirection: 'column'}}>
								{col.map((card, rowIndex) => (
									<PlayingCard
										key={rowIndex}
										name={card.value}
										suit={card.suit}
										isDraggingDisabled={false}
										zIndex={10 - rowIndex}
										marginTop={rowIndex * -20}
										disableDragBeneath={isAnyCardDragged}
										onDragStart={handleCardDragStart}
										onDragStop={handleCardDragStop}
									/>
								))}
							</IonCol>
						))}
					</IonRow>
				</div>
			</IonGrid>
		</IonPage>
	);
};

export default GameBoard;
