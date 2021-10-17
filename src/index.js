import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import authReducer from './store/reducers/authReducer';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import staffReducer from './store/reducers/staffReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = combineReducers({
	auth: authReducer,
	staff: staffReducer,
});

const combinedStores = createStore(
	store,
	composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
	<Provider store={combinedStores}>
		<App />
	</Provider>,
	document.getElementById('root')
);
