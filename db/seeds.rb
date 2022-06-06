# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Channel.destroy_all
Membership.destroy_all
DirectMessage.destroy_all
Message.destroy_all


pierre, james, adam, tiffany, luke, howard, vicky, caleb, brian, john, demo_user = User.create!([
    { username: "Pierre Navarin", email: "pnav@gmail.com", password: "Pierre34" },
    { username: "James Johnson", email: "jjohn@gmail.com", password: "password" },
    { username: "Adam Locke", email: "alocke@gmail.com", password: "password" },
    { username: "Tiffany Stevens", email: "tiff@gmail.com", password: "password" },
    { username: "Luke", email: "luke@gmail.com", password: "password" },
    { username: "Howard Brown", email: "howardb@gmail.com", password: "password" },
    { username: "Vicky Vale", email: "vvale@gmail.com", password: "password" },
    { username: "Caleb Sam", email: "caleb@gmail.com", password: "password" },
    { username: "Brian Roberts", email: "brianrob@gmail.com", password: "password" },
    { username: "John Smith", email: "johns@gmail.com", password: "password" },
    {username: "Demo User", email: "demouser@demo.com", password: "password"}
])


general, homework, suprise = pierre.admined_channels.create!([
    {
        name: "general",
        topic: "Welcome to Lax! This is the general chat.",
    },
    {
        name: "homework-help",
        topic: "Get help with homework!",
    },
    {
        name: "suprise-party",
        topic: "For planning John's party",
        is_private: true
    }
]).each { |c| c.members = User.all }


james.admined_channels.create!(
    name: "MERN-Group-3",
    topic: "Discuss MERN project and talk to teammates!",
).members = [james, pierre, adam, tiffany]
wiz = Channel.last


caleb.admined_channels.create!(
    name: "marvel",
    topic: "Talk all about Marvel movies and tv shows!"
).members = [luke, howard, pierre, caleb]
crit = Channel.last


demo_user.admined_channels.create!(
    name: "movies",
    topic: "For anyone that wants to talk about movies or plan movie nights!"
).members = [demo_user, pierre]
movies = Channel.last


general.messages.create!([
    {
        body: "Welcome to Lax!",
        author: pierre
    },
    {
        body: "You can search for channels at the top!\nOr you can make your own.",
        author: pierre
    },
])

homework.messages.create!([
    {
        body: "Anyone finish the Asteroids project?",
        author: pierre
    },
    {
        body: "I finished",
        author: james
    },
    {
        body: "Same",
        author: demo_user
    },
    {
        body: "Let me know if you need any help",
        author: pierre
    },
    {
        body: "Actually, I could use help Pierre!",
        author: tiffany
    },
    {
        body: "I'll come to your zoom room",
        author: pierre
    },
    {
        body: "Cool, me and my partner are in Room 7",
        author: tiffany
    }
])


suprise.messages.create!([
    {
        body: "This is the chat for John's suprise party next month",
        author: luke
    },
    {
        body: ".......",
        author: john
    }
])


wiz.messages.create!([
    {
        body: "So who wants what role?",
        author: james
    },
    {
        body: "I'll take Frontend Lead",
        author: james
    },
    {
        body: "Well I can do Backend.",
        author: adam
    },
    {
        body: "Tiff, wanna be Project Lead?",
        author: james
    },
    {
        body: "Sure that works",
        author: tiffany
    },
    {
        body: "Cool, then Pierre can be Flex",
        author: james
    },
    {
        body: "Works for me.",
        author: pierre
    }
])


crit.messages.create!([
    {
        body: "Marvel Chat!",
        author: luke
    },
    {
        body: "Civil War was the best",
        author: caleb
    },
    {
        body: "Winter Soldier!!!",
        author: howard
    },
    {
        body: "Personally, I prefer Thor 2",
        author: pierre
    },
    {
        body: "^ You can leave now. XD ",
        author: luke
    }
])


movies.messages.create!([
    {
        body: "Anyone want to get together and see Spiderman?",
        author: demo_user
    },
    {
        body: "You know I'm there!",
        author: pierre
    }
])


DirectMessage.create!.members = [demo_user, pierre]
d = DirectMessage.last
d.messages.create!([
    {
        body: "Hey just wanted to let you know that you can dm people as well!",
        author: pierre
    },
    {
        body: "You can start a new dm by hitting the plus above the dm channels!",
        author: pierre
    },
    {
        body: "Cool, thanks man!",
        author: demo_user
    },
    
])


DirectMessage.create!.members = [demo_user, howard, adam]
d2 = DirectMessage.last

d2.messages.create!([
    {
        body: "You guys wanna study together?",
        author: demo_user
    },
    {
        body: "Yeah, give me 15 though",
        author: adam
    },
    {
        body: "On the way!",
        author: howard
    },
    {
        body: "Dope, I'm in Room 21",
        author: demo_user
    },
    {
        body: "Be there soon",
        author: adam
    },
    {
        body: "No worries",
        author: demo_user
    }
])
