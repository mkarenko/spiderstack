import {IonContent, IonMenu} from '@ionic/react';

import './BurgerMenu.css';

const BurgerMenu: React.FC = () => {
	return (
		<IonMenu contentId='main' type='reveal'>
			<IonContent></IonContent>
		</IonMenu>
	);
};

export default BurgerMenu;
