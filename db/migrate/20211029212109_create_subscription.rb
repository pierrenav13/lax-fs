class CreateSubscription < ActiveRecord::Migration[5.2]
  def change
    create_table :subscriptions do |t|
      t.integer :user_id, null:false
      t.integer :chain_id, null:false
      t.string :chain_type, null:false
      t.timestamps
    end
    add_index :subscriptions, :user_id
    add_index :subscriptions, :chain_id
  end
end
