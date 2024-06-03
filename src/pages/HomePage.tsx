import {FC} from 'react';
import {IonContent, IonPage} from '@ionic/react';
import GameBoard from './GameBoard';

const HomePage: FC = () => {
	return (
		<IonPage>
			<IonContent>
				<GameBoard />
			</IonContent>
		</IonPage>
	);
};

export default HomePage;
