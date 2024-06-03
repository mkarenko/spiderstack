import {IonApp, IonContent, IonPage, IonSplitPane, setupIonicReact} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

/* Theme variables of Tailwindcss*/
import './theme/tailwind.css';

import Router from './router/Router';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';

import background1 from './assets/background_1.jpg';
import background2 from './assets/background_2.jpg';
import background3 from './assets/background_3.jpg';
import background4 from './assets/background_4.jpg';
import {useState} from 'react';
import {RecoilRoot} from 'recoil';

setupIonicReact();

const App: React.FC = () => {
	const [background, setBackground] = useState(background1);

	const changeBackground = () => {
		setBackground(background === background1 ? background2 : background1);
	};

	// style={{backgroundImage: `url(${background1})`, backgroundSize: 'cover'}}

	return (
		<RecoilRoot>
			<IonApp>
				<IonReactRouter>
					<IonSplitPane contentId='main'>
						<IonPage id='main'>
							<IonContent>
								<Router />
							</IonContent>
						</IonPage>
						<BurgerMenu />
					</IonSplitPane>
				</IonReactRouter>
			</IonApp>
		</RecoilRoot>
	);
};

export default App;
