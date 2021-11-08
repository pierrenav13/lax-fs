class ChangeMessageColumns < ActiveRecord::Migration[5.2]
  def change
    rename_column :messages, :user_id, :author_id
  end
end
