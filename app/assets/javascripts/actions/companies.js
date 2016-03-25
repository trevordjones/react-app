var Companies = (function() {
  var company = {
    industryIds: [],
    city: '',
    limit: 20
  }
  
  var getCompanies = function(company_response) {
    $.ajax({
      url: 'api/v1/companies.json',
      type: 'get',
      dataType: 'json',
      data: {
        industry_ids: company.industryIds,
        city: company.city,
        limit: company.limit
      },
      success: function(data){
        company_response(data)
      },
      error: function(xhr){
        console.log(xhr)
      }
    })
  }
  
  var getCityCompanies = function(text, city_response) {
    $.ajax({
      url: 'api/v1/company_cities.json',
      type: 'get',
      dataType: 'json',
      data: {
        text: text
      },
      success: function(data) {
        city_response(data)
      },
      error: function(xhr) {
        console.log(xhr)
      }
    })
  }
  
  return {
    company: company,
    getCompanies: getCompanies,
    getCityCompanies: getCityCompanies,
  }
})();
