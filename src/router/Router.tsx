import {IonRouterOutlet} from '@ionic/react';
import {FC} from 'react';
import {Route} from 'react-router';
import HomePage from '../pages/HomePage';

const Router: FC = () => {
	return (
		<IonRouterOutlet id='main'>
			<Route path='/' exact={true} component={HomePage} />
		</IonRouterOutlet>
	);
};

export default Router;
