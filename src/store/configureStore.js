import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import contactsReducer from '../reducers/contacts';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            contacts: contactsReducer,
            filters: filtersReducer
        }),
        composeEnhancer(applyMiddleware(thunk))
    );
    
    return store;
};