'use strict';

import { AsyncStorage } from 'react-native';

import { applyMiddleware, createStore } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunkMiddleware from 'redux-thunk'; // TODO look here how to properly handle Promises
import createLogger from 'redux-logger'
import reducers from '../reducers';


// Config
const loggerMiddleware = createLogger({
	collapsed: true
});

const createAppStore = applyMiddleware(
	thunkMiddleware, // lets us dispatch() functions
	loggerMiddleware // neat middleware that logs actions TODO only dev
)(createStore);

const persistConfig = {
	blacklist: ['navigation'],
	storage: AsyncStorage
};


// Create Store
export default function configureStore(onComplete: ?() => void) {
	const store = autoRehydrate()(createAppStore)(reducers);
	persistStore(store, persistConfig, onComplete);
	// persistStore(store, {storage: AsyncStorage}, onComplete).purgeAll();
	
	if (__DEV__ && module.hot) {
		module.hot.accept(() => {
			const nextRootReducer = require('../reducers/index').default;
			store.replaceReducer(nextRootReducer);
		});
	}
	
	return store;
}
