import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import loginReducer from './login-reducer';
import terminalsReducer from './terminals-reducer';
import buyersReducer from './buyers-reducer';
import buyerReducer from './buyer-reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

const reducers = combineReducers({
	login: loginReducer,
	terminals: terminalsReducer,
	buyers: buyersReducer,
	buyer: buyerReducer,
	form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

export default store;