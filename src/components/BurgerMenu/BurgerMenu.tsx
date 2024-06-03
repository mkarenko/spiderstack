import {Fragment, useState} from 'react';
import {IonContent, IonMenu, IonList, IonItem, IonLabel, IonIcon} from '@ionic/react';
import {gameController, settings, statsChart, helpCircle, exit, arrowBack} from 'ionicons/icons';

import hearts from '../../assets/suits/hearts.png';
import spades from '../../assets/suits/spades.png';
import diamonds from '../../assets/suits/diamonds.png';
import clubs from '../../assets/suits/clubs.png';
import './burgerMenu.css';
import {useRecoilState} from 'recoil';
import {colorsOfSuitsAtom} from '../../atoms/gameSettings.atom';

const BurgerMenu: React.FC = () => {
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [colorsOfSuits, setcolorsOfSuits] = useRecoilState(colorsOfSuitsAtom);

	const toggleMenu = () => {
		setIsCollapsed(!isCollapsed);
	};

	return (
		<IonMenu
			contentId='main'
			type='overlay'
			swipeGesture
			style={{width: isCollapsed ? '60px' : '200px'}}
		>
			<IonContent>
				<IonList>
					<IonItem button onClick={toggleMenu}>
						<IonIcon icon={isCollapsed ? arrowBack : arrowBack} slot='start' />
						{!isCollapsed && <IonLabel className='menu-label'>Hide Menu</IonLabel>}
					</IonItem>
					<IonItem button>
						<IonIcon icon={gameController} slot='start' />
						{!isCollapsed && <IonLabel className='menu-label'>New Game</IonLabel>}
					</IonItem>
					{!isCollapsed && (
						<Fragment>
							<IonItem button onClick={() => setcolorsOfSuits(1)}>
								<img className='w-4' src={spades} />
								<IonLabel>1 Color</IonLabel>
							</IonItem>
							<IonItem button onClick={() => setcolorsOfSuits(2)}>
								<div className='flex '>
									<img className='w-4' src={spades} />
									<img className='w-4' src={hearts} />
								</div>
								<IonLabel>2 Colors</IonLabel>
							</IonItem>
							<IonItem button onClick={() => setcolorsOfSuits(4)}>
								<div className='flex'>
									<img className='w-4' src={spades} />
									<img className='w-4' src={hearts} />
									<img className='w-4' src={diamonds} />
									<img className='w-4' src={clubs} />
								</div>
								<IonLabel>4 Colors</IonLabel>
							</IonItem>
						</Fragment>
					)}
					<IonItem button>
						<IonIcon icon={settings} slot='start' />
						{!isCollapsed && <IonLabel className='menu-label'>Settings</IonLabel>}
					</IonItem>
					<IonItem button>
						<IonIcon icon={statsChart} slot='start' />
						{!isCollapsed && <IonLabel className='menu-label'>Statistics</IonLabel>}
					</IonItem>
					<IonItem button>
						<IonIcon icon={helpCircle} slot='start' />
						{!isCollapsed && <IonLabel className='menu-label'>Help</IonLabel>}
					</IonItem>
					<IonItem button>
						<IonIcon icon={exit} slot='start' />
						{!isCollapsed && <IonLabel className='menu-label'>Exit</IonLabel>}
					</IonItem>
				</IonList>
			</IonContent>
		</IonMenu>
	);
};

export default BurgerMenu;
