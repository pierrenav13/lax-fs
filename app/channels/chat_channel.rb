class ChatChannel < ApplicationCable::Channel
  def subscribed
    @chat_type = params[:type]
    @chat = Channel.find_by({id: params[:chatId]})
    # stream_from "chat_channel#{@chat.id}"
    stream_for @chat if @chat
  end

  def speak(data)
    # debugger
    @message = Message.create(
      body: data['message']['body'],
      author_id: data["message"]["authorId"],
      messageable_id: @chat.id,
      messageable_type: @chat_type
    )
    # debugger
    # if @message.save
    #   socket = {message: @message, type: 'message'}
    #   ChatChannel.broadcast_to("chat_channel#{@chat.id}", socket)
    # end
    socket = {message: @message, type: 'message'}
    # debugger
    # ChatChannel.broadcast_to("chat_channel#{@chat.id}", socket)
    ChatChannel.broadcast_to(@chat, socket)
  end

  def load
    messages = Message.all.where(messageable_id: @chat.id).order(:created_at)
    socket = { messages: messages, type: 'messages'}
    # ChatChannel.broadcast_to("chat_channel#{@chat.id}", socket)
    ChatChannel.broadcast_to(@chat, socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
