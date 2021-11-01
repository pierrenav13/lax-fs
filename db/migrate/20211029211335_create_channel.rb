class CreateChannel < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.text :description
      t.integer :admin_id, null: false
      t.boolean :public, default: true
      t.timestamps
    end
    add_index :channels, :name
    add_index :channels, :admin_id
  end
end
