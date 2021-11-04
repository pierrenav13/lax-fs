import * as APIUtils from '../utils/subscription_api_util';


export const RECEIVE_SUBSCRIPTIONS = "RECEIVE_SUBSCRIPTIONS";
export const RECEIVE_SUBSCRIPTION = "RECEIVE_SUBSCRIPTION";

const recieveSubscriptions = (subscriptions) => {
    return {
        type: RECEIVE_SUBSCRIPTIONS,
        subscriptions
    }
}

export const recieveSubscription = (subscription) => {
    return {
        type: RECEIVE_SUBSCRIPTION,
        subscription
    }
}

export const createSubscription = (chainableId, chainableType, subscription) => (dispatch) => {
    return (
        APIUtils.createSubscription(chainableId, chainableType, subscription)
            .then((subscription) => dispatch(recieveSubscription(subscription)))
    )
}


export const requestSubscriptions = (channelId) => (dispatch) => {
    return (
        APIUtils.fetchSubscriptions(channelId)
            .then((subscriptions) => dispatch(recieveSubscriptions(subscriptions)))
    )
}