import React from 'react'
import s from './historyline.module.scss'

const HistoryLine = ({name, team, lastStep}) => {
    return (
        <li>
            <div className={s.block}>
                <span>{`${name} ( ${team} )`}</span>
                <span>{lastStep}</span>
            </div>
        </li>
    )
};

export default HistoryLine;