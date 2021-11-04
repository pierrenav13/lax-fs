json.array! @subscriptions.each do |subscription|
    json.partial! 'subscription', subscription: subscription
end