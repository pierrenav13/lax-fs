export const createSubscription = (chainableId, chainableType, subscription) => {
    return $.ajax({
        method: "POST",
        url: `/api/${chainableType.toLowerCase()}s/${chainableId}/subscriptions`,
        data: { subscription }
    })
}

export const fetchSubscriptions = (channelId) => {
    return $.ajax({
        method: "GET",
        url: `/api/channels/${channelId}/subscriptions`
    })
}