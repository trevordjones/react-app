var Companies = (function() {
  var company_parameters = {
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
        industry_ids: company_parameters.industryIds,
        city: company_parameters.city,
        limit: company_parameters.limit
      },
      success: function(data){
        company_response(data)
      },
      error: function(xhr){
        console.log(xhr)
      }
    })
  }
  
  var getCompaniesByCity = function(text, city_response) {
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
    company_parameters: company_parameters,
    getCompanies: getCompanies,
    getCompaniesByCity: getCompaniesByCity
  }
})();
