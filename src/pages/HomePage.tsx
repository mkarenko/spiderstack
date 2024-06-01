import {FC} from 'react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import PlayingCard from '../components/PlayingCard';

const HomePage: FC = () => {
	return (
		<IonPage>
			<IonContent fullscreen>
				{Array.from({length: 53}, (_, index) => (
					<div className='grid grid-cols-10'>
						<PlayingCard key={index} />
					</div>
				))}
			</IonContent>
		</IonPage>
	);
};

export default HomePage;
