import React, {useState, useEffect} from 'react'
import s from './warnmessage.module.scss'
import {useSelector} from "react-redux";

const WarnMessage = ({message}) => {
    let text = useSelector(state => state.game.message);
    let [viewMessage, setViewMessage] = useState(true);

    useEffect(() => {
        setTimeout(() => setViewMessage(false), 2000);
        //return clearTimeout(hideMessage);
    }, [viewMessage]);
    useEffect(() => {
        setViewMessage(true)
    }, [text]);

    return (<>
            {viewMessage
                ? <div className={s.block}>
                    <h2 className={s.message}>{message}</h2>
                </div>
                : null
            }
        </>
    )
};

export default WarnMessage;