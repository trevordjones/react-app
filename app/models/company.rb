class Company < ActiveRecord::Base
  has_many :company_industries
  has_many :industries, through: :company_industries
  
  scope :by_city, -> (city){where("lower(city) LIKE ?", "%#{city.downcase}%")}
  
  def self.by_industry(ids)
    Company.joins(:company_industries).where(company_industries: {industry_id: ids})
  end
end
