import React from "react";
import s from './Profile.module.css';

const Profile = () => {
	return (
		<div className="content">
			<div>
				<img src="https://belltur.ru/images/STRANI/Velicobritania/33f6d3aa44546327af48628f7df10cb4.jpg" />
			</div>
			<div>ava + desc</div>
			<div>
				My posts
				<div>New post</div>
				<div className={s.posts}>
					<div className={s.item}>Post 1</div>
					<div className={s.item}>Post 2</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
