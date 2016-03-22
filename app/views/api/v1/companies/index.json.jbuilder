json.companies @companies.each do |company|
  json.id company.id
  json.name company.name
  json.city company.city
  json.state company.state
end
