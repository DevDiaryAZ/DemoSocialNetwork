import Emma from './../assets/images/Emma.jpg'
import Leo from './../assets/images/Leo.jpeg'
import Will from './../assets/images/Will.jpeg'
import Jennifer from './../assets/images/Jennifer.jpg'
import Brad from './../assets/images/Brad.jpg'


const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: 'Emma', ava: Emma},
        {id: 2, name: 'Leo', ava: Leo},
        {id: 3, name: 'Will', ava: Will},
        {id: 4, name: 'Jenifer', ava: Jennifer},
        {id: 5, name: 'Brad', ava:Brad}
    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Hello!)'},
        {id: 3, message: 'How are you?!'},
        {id: 4, message: 'Thank you, I am grate!'},
        {id: 5, message: 'What are you doing right now?!'}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;
