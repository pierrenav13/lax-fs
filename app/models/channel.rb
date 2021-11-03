class Channel < ApplicationRecord
    validates :name, :admin_id, presence: true
    validates :public, inclusion: { in: [true, false] }

    belongs_to :admin,
        foreign_key: :admin_id,
        class_name: :User



end