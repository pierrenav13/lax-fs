class Api::SubscriptionsController < ApplicationController
    def index
        channel = Channel.find(params[:channel_id])
        @subscriptions = Subscription.all.where(
            chainable_id: channel.id,
            chainable_type:'Channel'
        )
        render :index
    end

    def create
        channel = Channel.find(params[:channel_id])
        @subscription = Subscription.new(subscription_params)
        @subscription.chainable_id = channel.id
        @subscription.chainable_type = 'Channel'
        @user = User.find(params[:subscription][:user_id])

        if @subscription.save
            render :show
        else
            render json: @subscription.errors.full_messages, status: 401
        end
    end


    private
    def subscription_params
        params.require(:subscription).permit(:user_id, :chainable_type, :chainable_id)
    end

end