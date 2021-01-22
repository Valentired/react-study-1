import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__inner}>
                <div className={s.dialogs__item}><NavLink to='/dialogs/1'>Vasya</NavLink></div>
                <div className={`${s.dialogs__item} ${s.active}`}><NavLink to='/dialogs/2'>Den</NavLink></div>
                <div className={s.dialogs__item}><NavLink to='/dialogs/3'>Michael</NavLink></div>
                <div className={s.dialogs__item}><NavLink to='/dialogs/4'>Koska</NavLink></div>
                <div className={s.dialogs__item}><NavLink to='/dialogs/5'>Moroshka</NavLink></div>
                <div className={s.dialogs__item}><NavLink to='/dialogs/6'>Lisiy</NavLink></div>
                <div className={s.dialogs__item}><NavLink to='/dialogs/7'>Amelia</NavLink></div>
            </div>
            <div className={s.messages}>
                <div className={s.message__item}>Privet</div>
                <div className={s.message__item}>Usec go home</div>
                <div className={s.message__item}>Aroza upala na lapu azora</div>
            </div>
        </div>
    )
}

export default Dialogs;