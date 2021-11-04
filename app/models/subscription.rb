class Subscription < ApplicationRecord
    validates :user_id, :chainable_type, :chainable_id presence: true

    belongs_to :chainable,
        polymorphic: true

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

end