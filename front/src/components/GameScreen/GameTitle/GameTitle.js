import React from 'react'
import s from './gametitle.module.scss'
import PlayerInfo from "./PlayerInfo/PlayerInfo";
import WarnMessage from "./WarnMessage/WarnMessage";
import {useSelector} from "react-redux";

const GameTitle = ({messageLine}) => {
    let message = useSelector(state => state.game.message);
    let score = useSelector(state => state.score);
    let team = useSelector(state => state.game.result);

    return (
        <div className={s.block}>
            <PlayerInfo name={`Bot`} score={score.ai} team={team.ai} active={false} position={`left`}/>
            <PlayerInfo name={`Player`} score={score.player} team={team.player} active={true} position={`right`}/>
            {messageLine ? <WarnMessage message={message}/> : null}
        </div>
    )
};

export default GameTitle;