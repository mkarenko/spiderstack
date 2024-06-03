import {IonCard} from '@ionic/react';
import {useState} from 'react';
import {Rnd} from 'react-rnd';

type PlayingCardProps = {
	name: string | number;
	suit: string;
	isDraggingDisabled: boolean;
	zIndex: number;
	marginTop: number;
	disableDragBeneath: boolean;
	onDragStart: () => void; // Function to handle drag start
	onDragStop: () => void; // Function to handle drag stop
};

const PlayingCard: React.FC<PlayingCardProps> = ({
	name,
	suit,
	isDraggingDisabled,
	zIndex,
	marginTop,
	disableDragBeneath,
	onDragStart,
	onDragStop,
}) => {
	const [isDragged, setIsDragged] = useState<boolean>(false);

	console.log(isDragged);

	return (
		<Rnd
			style={{cursor: isDragged ? 'grabbing' : 'grab', zIndex: zIndex}}
			enableResizing={false}
			disableDragging={isDraggingDisabled || disableDragBeneath} // Disable dragging only if any card is currently being dragged
			onDragStart={() => {
				setIsDragged(true);
				onDragStart(); // Call the provided function to handle drag start
			}}
			onDragStop={() => {
				setIsDragged(false);
				onDragStop(); // Call the provided function to handle drag stop
			}}
		>
			<IonCard
				style={{opacity: isDraggingDisabled ? '50' : '100', marginTop: `${marginTop}px`}}
				className='relative w-28 aspect-[2/3] flex justify-center items-center
				bg-white text-black font-bold text-lg rounded-lg border-2 shadow-md'
			>
				<div className='absolute top-1 left-1'>{name}</div>
				<img className='w-16' src={suit} />
				<div className='absolute bottom-1 right-1'>
					<div className='rotate-180'>{name}</div>
				</div>
			</IonCard>
		</Rnd>
	);
};

export default PlayingCard;
