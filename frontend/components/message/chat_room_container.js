import { requestAllMessages, receiveMessage, receiveMessages } from "../../actions/message_actions"
import ChatRoom from "./chat_room"
import { connect } from "react-redux"

const mSTP = (state, ownProps) => {
    //console.log(ownProps)
    return {
        currentUser: state.entities.users[state.session.id],
        //change for multiple
        channelId: parseInt(ownProps.channelId),
        messages: Object.values(state.entities.messages)
    }
}

const mDTP = (dispatch, ownProps) => {
    return {
        requestAllMessages: (channelId) => dispatch(requestAllMessages(channelId)),
        receiveMessage: (message) => dispatch(receiveMessage(message)),
        receiveMessages: (messages) => dispatch(receiveMessages(messages))
    }
}


export default connect(mSTP, mDTP)(ChatRoom)