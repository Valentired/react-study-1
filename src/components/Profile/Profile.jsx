import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';

const Profile = () => {
	return (
		<div>
			<div>
				<img src="https://belltur.ru/images/STRANI/Velicobritania/33f6d3aa44546327af48628f7df10cb4.jpg" />
			</div>
			<div>ava + desc</div>
			<MyPosts />
		</div>
	);
};

export default Profile;
