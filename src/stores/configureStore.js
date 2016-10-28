import { createStore , applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import marketHomeReducer  from '../reducers/marketHome'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export default function configureStore (initialState) {
	
	const store = createStoreWithMiddleware(marketHomeReducer, initialState);

	return store;

}