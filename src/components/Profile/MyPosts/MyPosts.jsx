import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>

            <div className={s.newPost}>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add new</button>
            </div>

            <div className={s.posts}>
                <Post message='Hello there!' likesCount='12'/>
                <Post message="It's first post" likesCount='15'/>
            </div>
        </div>
    );
};

export default MyPosts;
