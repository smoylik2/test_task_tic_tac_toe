import React from 'react'
import s from './simplemodal.module.scss'

const SimpleModal = ({message, submitAction}) => {
    return (<div className={s.jacket}>
            <div className={s.block}>
                <p className={s.message}>{message}</p>
                <button onClick={submitAction}
                        className={s.submitBtn}
                        type='button'>OK
                </button>
            </div>
        </div>
    )
};

export default SimpleModal;