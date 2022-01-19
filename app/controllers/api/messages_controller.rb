class Api::MessagesController < ApplicationController
    def index
        if params[:channel_id]
            channel = Channel.find(params[:channel_id])
            @messages= Message.all.where(
                messageable_type: 'Channel',
                messageable_id: channel.id
            )
        end
        render :index
    end

    

end
