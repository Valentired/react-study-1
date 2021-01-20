import React from "react";
import s from "./Post.module.css";

const Post = (props) => {

	console.log(props.message);
	return (
		<div className={s.item}>
			<img className={s.item__avatar} src="https://i.pinimg.com/736x/91/4c/3f/914c3f0822fea2e8e8d02de354be060c.jpg" alt="" />
			{props.message}
			<div>
				<span>likes: {props.likesCount}</span>
			</div>
		</div>
	);
};

export default Post;
