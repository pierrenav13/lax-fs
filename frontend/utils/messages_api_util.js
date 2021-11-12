
export const fetchMessages = (channelId) => {
    return $.ajax({
        method: "GET",
        url: `/api/channels/${channelId}/messages`
    })
}

export const addMessage = (channelId, message) => {
    return $.ajax({
        method: "POST",
        url: `/api/channels/${channelId}/messages`,
        data: {message: message}
    })
}


