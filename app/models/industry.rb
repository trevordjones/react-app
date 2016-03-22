class Industry < ActiveRecord::Base
  has_many :company_industries
  has_many :companies, through: :company_industries
end
