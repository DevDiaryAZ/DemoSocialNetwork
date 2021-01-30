import React from "react";
import {Field, Form} from "react-final-form";
import {Input, Textarea} from "../../common/FormsControls/FormsControls";
import classes from "./ProfileDataForm.module.css"

const ProfileDataForm = (props) => {
    return <Form
        onSubmit={props.onSubmit}
        initialValues={props.initialValues}
        render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <div className={classes.body}>
                    <div>
                        <label>Full name: </label>
                        <Field name="fullName">
                            {({input, meta}) => (<Input input={input} meta={meta} type="text"/>
                            )}
                        </Field>
                    </div>
                    <div>
                        <label for="checkid">Looking for a job:
                            <Field name="lookingForAJob"
                                   component="input"
                                   type="checkbox"
                                   id="checkid"/>
                        </label>
                    </div>
                    <div>
                        <label>My professional skills: </label>
                        <Field name="lookingForAJobDescription">
                            {({input, meta}) => (
                                <Textarea input={input} meta={meta} type="text"/>
                            )}
                        </Field>
                    </div>
                    <div>
                        <label>About me: </label>
                        <Field name="aboutMe">
                            {({input, meta}) => (
                                <Textarea input={input} meta={meta} type="text"/>
                            )}
                        </Field>
                    </div>
                    <div>
                        <label>Contacts: </label> {Object.keys(props.profile.contacts).map(key => {
                        return <div>
                            <label>{key}: <Field name={"contacts." + key}>
                                {({input, meta}) => (<Input input={input} meta={meta} type="text"/>
                                )}
                            </Field></label>
                        </div>
                    })}
                    </div>
                </div>
                <div>
                    <button onClick={() => {
                    }}>save
                    </button>
                </div>
            </form>
        )}
    />
}


/*const ProfileData = (props) => {
    return <div>
        {props.isOwner && <div><button onClick={props.goToEditMode}>edit</button></div>}

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
    </div>
}*/


export default ProfileDataForm