import React from 'react';
import GameTitle from "./GameTitle/GameTitle";
import GameField from "./GameField/GameField";
import GameHistory from "./GameHistory/GameHistory";
import {useDispatch, useSelector} from "react-redux";
import SimpleModal from "./ModalScreen/SimpleModal";
import {nextGameActionCreator} from "../../redux/actions";

const GameScreen = () => {
    const dispatch = useDispatch();

    let endGame = useSelector(state => state.game.result.end);
    let message = useSelector(state => state.game.message);

    return (<>
            {endGame
                ? <SimpleModal message={message}
                               submitAction={() => dispatch(nextGameActionCreator())}/>
                : null}
            <GameTitle messageLine={true}/>
            <GameField/>
            <GameHistory/>
        </>
    )
};

export default GameScreen;