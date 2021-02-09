import {takeEvery, put, call, all} from 'redux-saga/effects'
import {NEXT_GAME, SET_MOVE_ACT, SET_SERVER_DATA, START_GAME_AGAIN, START_NEW_GAME} from "./types";
import {API} from "../api/Api";
import {errorMessage, resetGameField, setNewGame, updateGameResult} from "./actions";

export function* sagaWatcher() {
    yield all([
        takeEvery(SET_MOVE_ACT, setMove),
        takeEvery(NEXT_GAME, nextGame),
        takeEvery(START_GAME_AGAIN, resetGame),
        takeEvery(START_NEW_GAME, newGame),
        takeEvery(SET_SERVER_DATA, setData),
    ])
}

function* setData() {
    try {
        const newGameData = yield call(API.getGameInfo);
        const newScoreData = yield call(API.getScore);
        yield put(resetGameField(newGameData));
        yield put(setNewGame(newScoreData));
    } catch (e) {
        yield put(errorMessage('Something wrong!'));
    }
}

function* setMove({index}) {
    try {
        if (!index) return;
        const newFieldData = yield call(API.makeMove, index);
        yield put(updateGameResult(newFieldData));
    } catch (e) {
        yield put(errorMessage('Something wrong!'));
    }
}

function* nextGame() {
    try {
        const newField = yield call(API.nextGame);
        const newScore = yield call(API.getScore);
        yield put(resetGameField(newField));
        yield put(setNewGame(newScore));
    } catch (e) {
        yield put(errorMessage('Something wrong!'));
    }
}

function* resetGame() {
    try {
        let newField = yield call(API.gameReset);
        yield put(resetGameField(newField));
    } catch (e) {
        yield put(errorMessage('Something wrong!'));
    }
}

function* newGame() {
    try {
        let newScore = yield call(API.resetScore);
        yield put(setNewGame(newScore));
    } catch (e) {
        yield put(errorMessage('Something wrong!'));
    }
}