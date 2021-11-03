class Channel < ApplicationRecord
    validates :name, :admin_id, presence: true
    validates :public, inclusion: { in: [true, false] }
    



end