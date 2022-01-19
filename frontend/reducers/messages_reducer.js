import { RECEIVE_MESSAGE, RECEIVE_MESSAGES } from "../actions/message_actions";


const messagesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;
    switch(action.type) {
        case RECEIVE_MESSAGES:
            nextState = {};
            action.messages.forEach(message => {
                nextState[message.id] = message
            })
            return nextState;
        case RECEIVE_MESSAGE:
            
            nextState = Object.assign({}, state, action.message)
            return nextState;
        default:
            return state;
    }
}

export default messagesReducer;