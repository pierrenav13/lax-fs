class AddColumnToMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :recipient_id, :integer
    add_index :messages, :recipient_id
  end
end
