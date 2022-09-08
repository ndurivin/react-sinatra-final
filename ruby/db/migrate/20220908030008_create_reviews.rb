class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string  :review_title
      t.string  :review_desc
      t.integer :rating
      t.integer :user_id
      t.integer :developer_id
      t.timestamps
    end
  end
end
