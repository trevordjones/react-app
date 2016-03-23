json.companies @companies.limit(@limit).each do |company|
  json.id company.id
  json.name company.name
  json.city company.city
  json.state company.state
end
json.search_size @companies.size
