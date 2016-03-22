# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160319215931) do

  create_table "companies", force: :cascade do |t|
    t.string "name"
    t.string "city"
    t.string "state"
  end

  create_table "company_industries", force: :cascade do |t|
    t.integer "industry_id"
    t.integer "company_id"
  end

  create_table "industries", force: :cascade do |t|
    t.string  "name"
    t.boolean "sell_for", default: false
    t.boolean "focus_on", default: false
  end

end
