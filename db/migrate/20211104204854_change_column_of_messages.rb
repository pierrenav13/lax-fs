class ChangeColumnOfMessages < ActiveRecord::Migration[5.2]
  def change
    remove_index :messages, :chain_id
    rename_column :messages, :message_type, :messageable_type
    rename_column :messages, :chain_id, :messageable_id
    add_index :messages, [:messageable_type, :messageable_id]
  end
end
