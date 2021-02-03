import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hello there!', likesCount: 2},
        {id: 2, message: 'It\'s first post', likesCount: 11},
        {id: 3, message: 'Nothing fair in love and war', likesCount: 0},

    ];

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

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
                { postsElements }
            </div>
        </div>
    );
};

export default MyPosts;
