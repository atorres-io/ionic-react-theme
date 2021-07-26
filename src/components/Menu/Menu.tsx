import React from 'react';
import {
	IonContent,
	IonHeader,
	IonMenu,
	IonText,
	IonTitle,
	IonToolbar,
	IonGrid,
	IonRow,
	IonCol,
} from '@ionic/react';
import './Menu.css';

// External components & elements
import ThemeSelector from '../ThemeSelector/ThemeSelector';
import { themeList } from '../../utils/ThemeList';

const Menu: React.FC = () => {
	const [theme, setTheme] = React.useState('light-green');

	return (
		<IonMenu side='end' contentId='main' type='overlay'>
			<IonHeader className='at-no-shadow'>
				<IonToolbar className='at-menu'>
					<IonTitle className='at-settings'>Settings</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className='at-menu'>
				<IonText className='at-subtitle'>
					<h2>Select Theme</h2>
				</IonText>
				<IonGrid className='at-grid-padding'>
					<IonRow>
						{themeList.map(({ code, classname }, i) => (
							<IonCol key={i}>
								<ThemeSelector
									code={code}
									classname={classname}
									theme={theme}
									setTheme={setTheme}
								/>
							</IonCol>
						))}
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonMenu>
	);
};

export default Menu;
