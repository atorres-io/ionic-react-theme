import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import './Home.css';

// External component
import Header from '../../components/Header/Header';

const Home: React.FC = () => {
	return (
		<IonPage>
			<Header />
			<IonContent fullscreen className='at-app' />
		</IonPage>
	);
};

export default Home;
