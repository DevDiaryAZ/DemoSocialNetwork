import React from 'react';
import classes from './Post.module.css'
import myAvatarPhoto from './../../../../assets/images/user.png'


const Post = (props) => {

    return <div className={classes.item}>
        <img src={myAvatarPhoto}></img>
        {props.message}
        <div>
            <span>likes {props.likesCount}</span>

        </div>
    </div>
}

export default Post;