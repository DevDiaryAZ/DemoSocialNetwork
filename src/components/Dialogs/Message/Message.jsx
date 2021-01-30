import React from 'react';
import classes from './../Dialogs.module.css';


const Message = (props) => {
    return <div className={classes.message}>
        {(props.id % 2) ? <div className={classes.left}>{props.message}</div> :  <div className={classes.right}>{props.message}</div>}
            </div>
}

export default Message;