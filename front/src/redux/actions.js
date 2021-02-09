import {
    ERROR_MESSAGE,
    NEW_GAME,
    NEXT_GAME,
    RESET_GAME_FIELD,
    SET_MOVE_ACT,
    SET_SERVER_DATA,
    START_GAME_AGAIN,
    START_NEW_GAME,
    UPDATE_GAME_RESULT
} from "./types";

export const updateGameResult = (newField) => ({type: UPDATE_GAME_RESULT, newField});
export const resetGameField = (newField) => ({type: RESET_GAME_FIELD, newField});
export const errorMessage = (message) => ({type: ERROR_MESSAGE, message});
export const setNewGame = (newScore) => ({type: NEW_GAME, newScore});

export const setMoveActionCreator = (index) => ({type: SET_MOVE_ACT, index});
export const nextGameActionCreator = () => ({type: NEXT_GAME});
export const startAgainGameActionCreator = () => ({type: START_GAME_AGAIN});
export const startNewGameActionCreator = () => ({type: START_NEW_GAME});


export const setInitServerData = () => ({type: SET_SERVER_DATA});