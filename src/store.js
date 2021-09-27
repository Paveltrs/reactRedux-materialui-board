import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import apiReducer from 'modules/api/reducer'
import appReducer from 'modules/app/reducer'
import createSagaMiddleware from '@redux-saga/core';

import apiSaga from 'modules/api/saga'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__
    : compose;

const reducers = combineReducers({
    api: apiReducer,
    app: appReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));


sagaMiddleware.run(apiSaga)

export default store;