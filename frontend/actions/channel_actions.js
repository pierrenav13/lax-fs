import * as ChannelAPIUtil from '../utils/channels_api_util'

export const RECEIVE_CHANNEL = 'RECEIVE_CURRENT_CHANNEL';
export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


const receiveChannel = (channel) => {
    return{
        type: RECEIVE_CHANNEL,
        channel
    }
}

const receiveChannels = (channels) => {
    return {
        type: RECEIVE_CHANNELS,
        channels
    }
}

const removeChannel = (channel) => {
    return {
        type: REMOVE_CHANNEL,
        channel
    }
}

const receiveErrors = (errors) => {
    return{
        type: RECEIVE_ERRORS,
        errors: errors.responseJSON,
    }
}

export const requestAllChannels = () => (dispatch) => (
    ChannelAPIUtil.fetchAllChannels().then(
        channels => dispatch(receiveChannels(channels)),
        err => dispatch(receiveErrors(err))
    )
)

export const requestChannel = (id) => (dispatch) => (
    ChannelAPIUtil.fetchChannel(id).then(
        channel => dispatch(receiveChannel(channel)),
        err => dispatch(receiveErrors(err))
    )
)

export const createChannel = (channel) => (dispatch) => (
    ChannelAPIUtil.createChannel(channel).then(
        channel => dispatch(receiveChannel(channel)),
        err => dispatch(receiveErrors(err))
    )
)

export const updateChannel = (channel) => (dispatch) => (
    ChannelAPIUtil.updateChannel(channel).then(
        channel => dispatch(receiveChannel(channel)),
        err => dispatch(receiveErrors(err))
    )
)

export const deleteChannel = (id) => (dispatch) => (
    ChannelAPIUtil.deleteChannel(id).then(
        channelId => dispatch(removeChannel(channelId)),
        err => dispatch(receiveErrors(err))
    )
)