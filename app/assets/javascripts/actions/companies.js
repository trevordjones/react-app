var Companies = (function() {
  var industryIds = [];
  
  var getCompanies = function(company_response) {
    $.ajax({
      url: 'api/v1/companies.json',
      type: 'get',
      dataType: 'json',
      data: {
        industries: industryIds
      },
      success: function(data){
        company_response(data)
      },
      error: function(xhr){
        console.log(xhr)
      }
    })
  }
  
  return {
    industryIds: industryIds,
    getCompanies: getCompanies
  }
})();
