import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { setUpStore } from '@store/store';

import App from './App';

const root = document.getElementById('root');

if (!root) {
	throw new Error('Root not found!');
}

const store = setUpStore();

let persistor = persistStore(store);

ReactDOM.createRoot(root).render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>
);
