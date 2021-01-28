import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <img className={s.profileBg}
                 src="https://belltur.ru/images/STRANI/Velicobritania/33f6d3aa44546327af48628f7df10cb4.jpg"/>
            <div className={s.descriptionInner}>ava + desc</div>



        </div>
    );
};

export default ProfileInfo;
