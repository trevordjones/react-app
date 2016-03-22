class Company < ActiveRecord::Base
  has_many :company_industries
  has_many :industries, through: :company_industries
end
