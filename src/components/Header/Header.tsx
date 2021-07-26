import React from 'react';
import {
	IonHeader,
	IonToolbar,
	IonMenuButton,
	IonTitle,
	IonButtons,
} from '@ionic/react';
import './Header.css';

const Header: React.FC = () => {
	return (
		<IonHeader className='at-no-shadow'>
			<IonToolbar className='at-background'>
				<IonTitle size='large' className='at-title'>
					Ionic React Theme Selector
				</IonTitle>
				<IonButtons slot='end' className='at-button'>
					<IonMenuButton />
				</IonButtons>
			</IonToolbar>
		</IonHeader>
	);
};

export default Header;
