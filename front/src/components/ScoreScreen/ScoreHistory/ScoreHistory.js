import React from 'react'
import s from './scorehistory.module.scss'
import {useSelector} from "react-redux";
import HistoryLine from "../../GameScreen/GameHistory/HistoryLine/HistoryLine";

const ScoreHistory = () => {

    const historyScore = useSelector(state => state.score.list);
    let arrHistory = [];
    if (historyScore.length) {
        arrHistory = historyScore.map(v => <HistoryLine name={v.winner || 'Nobody'}
                                                        team={v.team || '-'}
                                                        lastStep={_timeConverter(v.ts)}
                                                        key={v.ts}/>);
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

function _timeConverter(timestamp) {
    const a = new Date(timestamp);
    const hour = a.getHours();
    const min = a.getMinutes();
    const sec = a.getSeconds();
    return hour + ':' + min + ':' + sec
}

export default ScoreHistory;