import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './../Dialogs.module.css';


const DialogItem = (props) => {

    let path = "/dialogs" + props.id

    return <div className={classes.dialogsBlock}>
        <NavLink to={path}>{props.name=='Emma' ? <div className={classes.active}><img  src={props.ava}/><b >{props.name}</b></div> : <div className={classes.dialog}><img src={props.ava}/><b >{props.name}</b></div>}
        </NavLink>
    </div>
}

export default DialogItem;