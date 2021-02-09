import {initScoreState} from "./initState";
import {NEW_GAME} from "./types";

const ScoreReducer = (state = initScoreState, action) => {
    switch (action.type) {
        case NEW_GAME:
            return {...state, ...action.newScore.result};
        default:
            return state;
    }
};

export default ScoreReducer;