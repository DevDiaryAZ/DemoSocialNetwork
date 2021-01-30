import {Field, Form} from "react-final-form";
import React from "react";
import {composeValidators, maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import classes from "./AddMessageForm.module.css"


const AddMessageForm = (props) => (
    <Form
        onSubmit={props.onSubmit}
        render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field
                        name="newMessageBody"
                        validate={composeValidators(required, maxLengthCreator(100))}>
                        {({input, meta}) => (
                            <Textarea input={input} meta={meta} placeholder="Enter your message"/>
                        )}
                    </Field>
                </div>
                <div>
                    <button className={classes.button}>
                        Send
                    </button>
                </div>
            </form>)}
    />
)

export default AddMessageForm;