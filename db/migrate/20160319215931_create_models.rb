class CreateModels < ActiveRecord::Migration
  def change
    create_table :companies do |t|
      t.string :name
      t.string :city
      t.string :state
    end
    
    create_table :industries do |t|
      t.string :name
      t.boolean :sell_for, default: false
      t.boolean :focus_on, default: false
    end
    
    create_table :company_industries do |t|
      t.integer :industry_id
      t.integer :company_id
    end
  end
end
