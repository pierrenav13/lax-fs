
json.array! @messages.each do |message|
    json.extract! message, :id, :author_id, :messageable_id, :messageable_type
end