import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import AddPostForm from "./AddPostForm/AddPostForm";


const MyPosts = React.memo(props => {
        let postsElements = [...props.posts]
        .reverse()
        .map(p => <Post message={p.message} id={p.id} likesCount={p.likesCount}/>)

        let onAddPost = (e) => {
            props.addPost(e.newPostText);
        }

        return (
            <div className={classes.postsBlocks}>
                <h3>MY POSTS</h3>
                <AddPostForm onSubmit={onAddPost}/>
                <div className={classes.posts}>
                    {postsElements}
                </div>
            </div>)
    }
);


export default MyPosts;