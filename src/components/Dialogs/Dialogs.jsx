import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import AddMessageForm from "./AddMessageForm/AddMessageForm";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
    .map(d => <DialogItem name={d.name} key={d.id} id={d.id} ava={d.ava}/>);
    let messagesElements = state.messages
    .map(m => <Message message={m.message} key={m.id} id={m.id}/>)

    const addNewMessage = (e) => {
        props.sendMessage(e.newMessageBody);
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div className={classes.addMessage}>
                    <AddMessageForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;