import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Vasya'},
        {id: 2, name: 'Den'},
        {id: 3, name: 'Michael'},
        {id: 4, name: 'Koska'},
        {id: 5, name: 'Moroshka'},
        {id: 6, name: 'Lisiy'},
        {id: 7, name: 'Amelia'}
    ];

    let messagesData = [
        {id: 1, message: 'Privet'},
        {id: 2, message: 'Usec go home'},
        {id: 3, message: 'Aroza upala na lapu azora'}
    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__inner}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={s.messages}>
                <MessageItem message={messagesData[0].message}/>
                <MessageItem message={messagesData[1].message}/>
                <MessageItem message={messagesData[2].message}/>
            </div>
        </div>
    )
}

export default Dialogs;