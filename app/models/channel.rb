class Channel < ApplicationRecord
    validates :name, :admin_id, presence: true
    validates :public, inclusion: { in: [true, false] }

    belongs_to :admin,
        foreign_key: :admin_id,
        class_name: :User
    
    has_many :channel_members,
        foreign_key: :chainable_id,
        class_name: :Subscription,
        dependent: :destroy

    has_many :members,
        through: :channel_members,
        source: :user,
        dependent: :destroy


    def self.get_channels_by_user(user)
        Channel.joins(:members).where('channel_members.user_id = ?', user.id)
    end 



end