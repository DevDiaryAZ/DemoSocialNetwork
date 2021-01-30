import React from "react";
import styles from "./FormsControls.module.css";

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = (meta.error && meta.submitError);
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>{props.children}</div>
            {hasError && meta.touched && <span>{hasError}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}>
        <textarea  {...input} {...restProps}/>
    </FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}>
        <input  {...input} {...restProps}/>
    </FormControl>
}

