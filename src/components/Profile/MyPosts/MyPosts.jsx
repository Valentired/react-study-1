import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hello there!', likesCount: 2},
        {id: 2, message: 'It\'s first post', likesCount: 11},
    ];

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
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
            </div>
        </div>
    );
};

export default MyPosts;
