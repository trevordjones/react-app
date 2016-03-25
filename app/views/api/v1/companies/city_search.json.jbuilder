json.companies @companies.each do |company|
  json.id company.id
  json.city company.city
end