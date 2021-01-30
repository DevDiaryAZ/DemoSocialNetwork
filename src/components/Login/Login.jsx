import React from 'react';
import {Form, Field} from 'react-final-form'
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import classes from "./Login.module.css"


const LoginForm = (props) => (
    <Form
        onSubmit={props.onSubmit}
        render={({handleSubmit, submitError}) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name="email" validate={required}>
                        {({input, meta}) => (
                            <Input input={input} meta={meta} type="text" placeholder="Email"/>
                        )}
                    </Field>
                </div>
                <div>
                    <Field name="password" validate={required}>
                        {({input, meta}) => (
                            <Input input={input} meta={meta} type="password" placeholder="Password"/>
                        )}
                    </Field>
                </div>
                <label className={classes.rememberMe}>
                    <Field
                    name="rememberMe"
                    component="input"
                    type="checkbox"
                />remember me {' '}
                </label>
                <div>
                    <button className={classes.button} type="submit">
                        Log in
                    </button>
                </div>
                {submitError && <div>{submitError}</div>}
            </form>)}
    />
)

const Login = (props) => {
    const onSubmit = async (formData) => {
        const res = await props.login(formData.email, formData.password, formData.rememberMe)
        return res;
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div className={classes.loginform}>
        <h1>Log in</h1>
        <LoginForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);
