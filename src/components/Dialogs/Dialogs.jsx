import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__inner}>
                <DialogItem name="Vasya" id="1"/>
                <DialogItem name="Den" id="2"/>
                <DialogItem name="Michael" id="3"/>
                <DialogItem name="Koska" id="4"/>
                <DialogItem name="Moroshka" id="5"/>
                <DialogItem name="Lisiy" id="6"/>
                <DialogItem name="Amelia" id="7"/>
            </div>
            <div className={s.messages}>
                <MessageItem message="Privet"/>
                <MessageItem message="Usec go home"/>
                <MessageItem message="Aroza upala na lapu azora"/>
            </div>
        </div>
    )
}

export default Dialogs;