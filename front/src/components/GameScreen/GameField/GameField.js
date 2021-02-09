import React, {useState, useEffect} from 'react'
import s from './gamefield.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setMoveActionCreator} from "../../../redux/actions";

const SingleCell = (value, key) => <div className={s.cell}
                                        key={key}
                                        data-index={key}>{value}</div>;

const GameField = () => {
    const dispatch = useDispatch();
    let board = useSelector(state => state.game.result.board);
    /* when first render -> disable cells */
    let [disabledCells, setDisabledCells] = useState(true);
    /* if board is changed -> activation cells */
    useEffect(() => {
        setDisabledCells(false)
    }, [board]);

    const sendMoveData = index => dispatch(setMoveActionCreator(index));
    const onCellsClick = e => {
        /* if cells is active and have empty content */
        if (!disabledCells && !e.target.innerHTML) {
            /* disable cells and wait while board will been changed */
            setDisabledCells(true);
            /* dispatch action to saga -> query to server -> wait changes */
            sendMoveData(e.target.dataset.index)
        }
    };
    /* create cells for field if board is exist */
    let arrCells = board?.flat()
        .map((v, i) => {
            let content = typeof v !== 'number' ? v : "";
            return SingleCell(content, i + 1)
        });

    return (
        <div className={s.block} onClick={onCellsClick}>
            {arrCells}
        </div>
    )
};

export default GameField;