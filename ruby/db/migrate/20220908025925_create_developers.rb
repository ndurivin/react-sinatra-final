class CreateDevelopers < ActiveRecord::Migration[6.1]
  def change
    create_table :developers do |t|
      t.string  :first_name
      t.string  :last_name
      t.string  :image_url
      t.integer :experience
      t.string  :language_1
      t.string  :language_2
      t.integer :category_id
    end
  end
end
