json.set! 'subscription' do
    json.partial! 'subscription', subscription: @subscription
end

json.set! 'user' do
    json.partial! '/api/users/user', user: @user
end

