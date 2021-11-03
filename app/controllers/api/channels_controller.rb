class Api::ChannelsController < ApplicationController
    def create
        @channel = Channel.new(channel_params)
        @channel.admin_id = current_user.id
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

     def update
        @channel = Channel.find(params[:id])
        if @channel.update(channel_params)
        render :show
        else
        render json: @channel.errors.full_messages, status: 401
        end
    end

    def destroy
        @channel = Channel.find_by(id: params[:id])
        if @channel && current_user.id === @channel.admin_id
            Channel.destroy(@channel.id)
            render :show
        else
            render json: ['Not the admin of the Channel'], status: 401
        end
    end

    private

    def channel_params
        params.require(:channel).permit(:name, :description, :public)
    end

end