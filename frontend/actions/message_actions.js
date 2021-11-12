import * as APIUtils from '../utils/messages_api_util'
export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";


const receiveMessages = (messages) => {
    return {
        type: RECEIVE_MESSAGES,
        messages
    }
}

export const receiveMessage = (message) => {
    return {
        type: RECEIVE_MESSAGE,
        message
    }
}


export const requestAllMessages = (channelId) => (dispatch) => {
    return (
        APIUtils.fetchMessages(channelId)
            .then((messages) => dispatch(receiveMessages(messages)))
    )
}
