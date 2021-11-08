import { RECEIVE_CHANNEL, RECEIVE_CHANNELS, REMOVE_CHANNEL} from "../actions/channel_actions";

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    
    switch (action.type) {
        case RECEIVE_CHANNELS:
            return Object.assign({}, state, action.channels)
        case RECEIVE_CHANNEL:
            const channel = {[action.channel.id]: action.channel}
            return Object.assign({}, state, channel)
        case REMOVE_CHANNEL:
            delete nextState[action.channel.id];
            return nextState;
        default:
            return state;
    }
}

export default channelsReducer;