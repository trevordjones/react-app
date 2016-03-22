require 'csv'
namespace :industry_focus_on do
  desc 'load industries'
  task :load => :environment do
    texts = File.read("#{Rails.root}/public/PN_industries_focus_on.csv")
    csv = CSV.parse(texts, :headers => true)
    csv.each do |row|
      unless row[0].nil?
        name = row[0]
        industry = Industry.find_by(name: name)
        if industry
          industry.update(focus_on: true)
        else
          Industry.create(name: name, focus_on: true)
        end
      end
    end
  end
end

namespace :industry_sell_for do
  desc 'load industries sell for'
  task :load => :environment do
    texts = File.read("#{Rails.root}/public/PN_industries_sell_for.csv")
    csv = CSV.parse(texts, :headers => true)
    csv.each do |row|
      unless row[0].nil?
        name = row[0]
        industry = Industry.find_by(name: name)
        if industry
          industry.update(sell_for: true)
        else
          Industry.create(name: name, sell_for: true)
        end
      end
    end
  end
end

namespace :companies do
  desc 'load departments'
  task :load => :environment do
    texts = File.read("#{Rails.root}/public/PN_companies.csv")
    csv = CSV.parse(texts, :headers => true)
    csv.each do |row|
      company_name = row[0].sub(/\s+\Z/, "")
      city = row[1].sub(" ", "") if row[1][0] == " "
      state = row[2].sub(" ", "") if row[2][0] == " "
      industries = []
      first_industry = row[3].sub(" ", "").sub(/\s+\Z/, "")
      second_industry = row[4].sub(" ", "").sub(/\s+\Z/, "") unless row[4].nil?
      industries << first_industry
      industries << second_industry unless second_industry.nil?
      company = Company.create(name: company_name, state: state, city: city)
      industries.each do |ind|
        industry = Industry.find_by(name: ind)
        if industry.nil?
          industry = Industry.create(name: ind)
        end
        CompanyIndustry.create(company_id: company.id, industry_id: industry.id)
      end
    end
  end
end
