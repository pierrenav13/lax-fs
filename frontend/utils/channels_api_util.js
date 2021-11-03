

export const fetchAllChannels = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/channels'
    })
}

export const fetchChannel = (channel) => {
    return $.ajax({
        method: 'GET',
        url: `/api/channels/${channel.id}`
    })
}