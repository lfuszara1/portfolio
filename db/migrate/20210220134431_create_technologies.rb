class CreateTechnologies < ActiveRecord::Migration[6.1]
  def change
    create_table :technologies do |t|
      t.string :name
      t.text :description
      t.integer :level

      t.timestamps
    end
  end
end
