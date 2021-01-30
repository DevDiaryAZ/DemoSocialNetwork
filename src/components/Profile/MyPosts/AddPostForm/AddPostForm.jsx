import {Field, Form} from "react-final-form";
import {composeValidators, maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";
import React from "react";
import classes from './AddPostForm.module.css'


const AddPostForm = (props) => (
    <Form
        onSubmit={props.onSubmit}
        render={({handleSubmit, form, submitting, pristine, values}) => (
            <form onSubmit={handleSubmit}>
                <Field
                    name="newPostText"
                    validate={composeValidators(required, maxLengthCreator(10))}>
                    {({input, meta}) => (
                        <Textarea className={classes.input} input={input} meta={meta} placeholder="Post message..."/>
                    )}
                </Field>
                <div>
                    <button className={classes.button}>Add post</button>
                </div>
            </form>
        )}
    />
)

export default AddPostForm;