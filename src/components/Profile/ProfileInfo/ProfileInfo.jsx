import React, {useState} from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "./../../../assets/images/user.png"
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = async (formData) => {
        props.saveProfile(formData);
        setEditMode(false)
    }

    return <div>
        <div className={classes.descriptionBlock}>
            <img src={props.profile.photos.large || userPhoto}/>
            {props.isOwner && <div className={classes.file_upload}>
                <label for="input__file">
                    <input id="input__file" type="file" name="file" onChange={onMainPhotoSelected}/>
                    Обновить фотографию</label>
            </div>}
            <h3>ABOUT ME</h3>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

            {editMode ? <ProfileDataForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile}/> :
                <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => {
                    setEditMode(true)
                }}/>}
        </div>
    </div>
}

const ProfileData = (props) => {
    return <div>
                <div>
            <b>Full name</b>: {props.profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {props.profile.lookingForAJob ? "yes" : "no"}
        </div>
        {props.profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
        </div>}
        <div>
            {props.profile.aboutMe &&
            <div>
                <b>About me</b>: {props.profile.aboutMe}
            </div>
            }
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
        })}
        </div>
        {props.isOwner && <div>
            <button onClick={props.goToEditMode}>edit</button>
        </div>}
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={classes.contact}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}


export default ProfileInfo;


