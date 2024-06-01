import {IonCard} from '@ionic/react';
import {FC} from 'react';
import Draggable from 'react-draggable';

const PlayingCard: FC = () => {
	return (
		<Draggable>
			<IonCard className='w-56 h-32 bg-white text-center text-white'>Ace of Spades</IonCard>
		</Draggable>
	);
};

export default PlayingCard;
