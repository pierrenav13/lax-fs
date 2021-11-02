class AddColumnsToMessage < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :message_type, :string
    add_column :messages, :chain_id, :integer
    add_index :messages, :chain_id
  end
end
