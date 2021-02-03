import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Vasya'},
        {id: 2, name: 'Den'},
        {id: 3, name: 'Michael'},
        {id: 4, name: 'Koska'},
        {id: 5, name: 'Moroshka'},
        {id: 6, name: 'Lisiy'},
        {id: 7, name: 'Amelia'}
    ];

    let messages = [
        {id: 1, message: 'Privet'},
        {id: 2, message: 'Usec go home'},
        {id: 3, message: 'Aroza upala na lapu azora'}
    ];

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = messages.map(m => <MessageItem message={m.message}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__inner}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;