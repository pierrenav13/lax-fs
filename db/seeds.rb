# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Channel.destroy_all
Subscription.destroy_all

demoUser = User.create!({email: 'demo@email.com', username: 'demo', password: '123456'})
user1 = User.create!({email: 'pnavarin@gmail.com', username: 'pierrenav', password: '123456'})

channel1 = Channel.create!({name: 'general', admin_id: user1.id, public: true})
channel2 = Channel.create!({name: 'homework', description: 'For help with homework', admin_id: demoUser.id, public: true})


subscription1 = Subscription.create!({user_id: user1.id, chainable_id: channel1.id, chainable_type: 'Channel' })


