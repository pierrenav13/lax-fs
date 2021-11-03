class Api::ChannelsController < ApplicationController
    def create
        @channel = Channel.new(channel_params)

        if @channel.save
            render :show
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def show
        @channel = Channel.find(params[:id])
        render :show
    end

    def index
        @channels = Channel.all
        render :index
    end

    private

    def channel_params
        params.require(:channel).permit(:name, :admin_id, :presence, :public)
    end

end