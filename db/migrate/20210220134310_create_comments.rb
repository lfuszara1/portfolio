class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :name
      t.text :description
      t.integer :stars
      t.integer :priority
      t.boolean :accepted?

      t.timestamps
    end
  end
end
