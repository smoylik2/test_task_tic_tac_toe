import React from 'react'
import s from './playerinfo.module.scss'

const PlayerInfo = ({name, team, score, active, position}) => {
    return (
        <div className={s.block}>
            <h2 className={`${s.playerName} ${active && s.active}`}>{name}</h2>
            <span className={`${s.team} ${position === "right" ? s.forRight : null}`}>
                {`| ${team} |`}
            </span>
            <span className={`${s.score} ${position === "left" ? s.forLeft : null}`}>
                {score}
            </span>
        </div>
    )
};

export default PlayerInfo;