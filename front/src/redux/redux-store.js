import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import {sagaWatcher} from './saga'
import ScoreReducer from "./ScoreReducer";
import GameReducer from "./GameReducer";

const saga = createSagaMiddleware();

let reducers = combineReducers({
    score: ScoreReducer,
    game: GameReducer
});

let store = createStore(reducers, applyMiddleware(saga));

saga.run(sagaWatcher);

export default store;