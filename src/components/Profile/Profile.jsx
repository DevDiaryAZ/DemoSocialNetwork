import React from 'react';
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";

const Profile = (props) => {

    return <div className={classes.profile}>
        <ProfileInfo savePhoto={props.savePhoto}
                     profile={props.profile}
                     status={props.status}
                     updateStatus={props.updateStatus}
                     isOwner={props.isOwner}
                     saveProfile={props.saveProfile}/>
        <MyPostsContainer />
    </div>
}

export default Profile;