import React from 'react'
import s from './gamehistory.module.scss'
import HistoryLine from "./HistoryLine/HistoryLine";
import {useSelector} from "react-redux";

const GameHistory = () => {

    const historyGame = useSelector(state => state.game.history);
    let arrHistory = [];
    if (historyGame.length) {
        arrHistory = historyGame.map(v => <HistoryLine name={v.name}
                                                       team={v.team}
                                                       lastStep={v.move}
                                                       key={v.team + v.move}/>);
    }

    return (
        <div className={s.block}>
            <h3 className={s.title}>History:</h3>
            <ol className={s.list}>
                {arrHistory || null}
            </ol>
        </div>
    )
};

export default GameHistory;