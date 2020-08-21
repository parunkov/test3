import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import loginReducer from './login-reducer';
import terminalsReducer from './terminals-reducer';
import buyersReducer from './buyers-reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

const reducers = combineReducers({
	login: loginReducer,
	terminals: terminalsReducer,
	buyers: buyersReducer,
	form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));
// window.store = store;

export default store;