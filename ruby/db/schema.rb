# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_09_08_030027) do

  create_table "categories", force: :cascade do |t|
    t.string "category_name"
  end

  create_table "developers", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "image_url"
    t.integer "experience"
    t.string "language_1"
    t.string "language_2"
    t.integer "category_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "review_title"
    t.string "review_desc"
    t.integer "rating"
    t.integer "user_id"
    t.integer "developer_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password"
    t.datetime "last_logged_in"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
