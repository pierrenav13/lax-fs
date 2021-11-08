
export const fetchAllMessages = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/messages'
    })
}

export const fetchMessage = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/messages/${id}`
    })
}