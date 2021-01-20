import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
	return (
		<div>
			My posts
			<div>New post</div>
			<div className={s.posts}>
				<Post message='Hello there!' likesCount='12' />
				<Post message="It's first post"  likesCount='15'/>
			</div>
		</div>
	);
};

export default MyPosts;
