import React from 'react'
import s from './navigation.module.scss'
import {Link, useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {startAgainGameActionCreator, startNewGameActionCreator} from "../../redux/actions";

const Navigation = () => {
    const dispatch = useDispatch();
    let location = useLocation();

    const onNewGameClick = () => dispatch(startAgainGameActionCreator());
    const onNewScoreClick = () => dispatch(startNewGameActionCreator());

    return (
        <div className={s.block}>
            {location.pathname !== '/score'
                ? <>
                    <button type="button" className={s.btnLikeLink} onClick={onNewGameClick}>Restart game</button>
                    <Link to={`/score`} className={s.btnLikeLink}>Score</Link>
                </>
                : <>
                    <button type="button" className={s.btnLikeLink} onClick={onNewScoreClick}>New game</button>
                    <Link to={`/`} className={s.btnLikeLink}>Game</Link>
                </>}
        </div>
    )
};

export default Navigation;