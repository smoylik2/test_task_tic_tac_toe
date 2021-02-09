import {initGameState} from "./initState";
import {
    UPDATE_GAME_RESULT,
    RESET_GAME_FIELD,
    ERROR_MESSAGE
} from './types'

const GameReducer = (state = initGameState, action) => {
    switch (action.type) {
        case ERROR_MESSAGE:
            return {
                ...state,
                message: action.message
            };
        case UPDATE_GAME_RESULT :
            let message = action.newField.result.end
                ? createWinnerMessage(action.newField.result.winner)
                : state.message;
            return {
                ...state,
                history: [...state.history, ...createHistoryLog(state.result, action.newField.result)],
                result: {...action.newField.result},
                message: message
            };
        case RESET_GAME_FIELD:
            return {
                ...state,
                history: createHistoryLogAtStart(action.newField.result.board, action.newField.result.ai),
                result: {...action.newField.result},
                message: 'Start a next game!'
            };
        default:
            return state;
    }
};

const createWinnerMessage = (winner) => {
    if (winner) {
        return `${winner === 'ai' ? 'Bot' : "Player"} is win!`
    } else {
        return `Nobody won!`
    }
};

const createHistoryLog = (objOld, objNew) => {
    let arrOld = objOld.board.flat();
    let arrNew = objNew.board.flat();

    let indexes = arrNew.reduce((t, v, i) => {
        if (v !== arrOld[i]) {
            return t.concat([{
                name: objNew.player === v
                    ? 'Player'
                    : 'Bot',
                team: v,
                move: (i + 1)
            }])
        } else {
            return t
        }
    }, []);

    let firstStep = arrOld.filter(v => typeof v !== 'number').length % 2;

    let result = firstStep
        ? [indexes.find(v => v.name === "Player"), indexes.find(v => v.name === "Bot")]
        : [indexes.find(v => v.name === "Bot"), indexes.find(v => v.name === "Player")];

    result = result.filter(v => typeof v !== 'undefined');

    return result;
};

const createHistoryLogAtStart = (arr, aiTeam) => {
    let found = arr.flat().findIndex(v => typeof v === 'string');
    return found >= 0 ? [{name: 'Bot', team: aiTeam, move: (found + 1)}] : []
};

export default GameReducer;