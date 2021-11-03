class RenameSubscriptionColumns < ActiveRecord::Migration[5.2]
  def change
    remove_index :subscriptions, :chain_id
    rename_column :subscriptions, :chain_id, :chainable_id
    rename_column :subscriptions, :chain_type, :chainable_type
    add_index :subscriptions, [:chainable_id, :chainable_type]
  end
end
