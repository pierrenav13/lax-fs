import * as ChannelApiUtil from '../utils/channels_api_util'

export const RECEIVE_CURRENT_CHANNEL = 'RECEIVE_CURRENT_CHANNEL';
export const RECEIVE_ALL_CHANNELS = 'RECEIVE_ALL_CHANNELS';
export const DELETE_CHANNEL = 'DELETE_CHANNEL';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


const receiveCurrentChannel = (channel) => {
    type: RECEIVE_CURRENT_CHANNEL,
    channel
}

const receiveAllChannels = (channels) => {
    type: RECEIVE_ALL_CHANNELS,
    channels
}

const deleteChannel = (channel) => {
    type: DELETE_CHANNEL,
    channel
}