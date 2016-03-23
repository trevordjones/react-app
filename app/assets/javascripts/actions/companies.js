var Companies = (function() {
  var industryIds = [];
  var limit = 20;
  
  var resetLimit = function() {
    limit += 20;
  }
  
  var getCompanies = function(company_response) {
    $.ajax({
      url: 'api/v1/companies.json',
      type: 'get',
      dataType: 'json',
      data: {
        industry_ids: industryIds,
        limit: limit
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
    resetLimit: resetLimit,
    getCompanies: getCompanies
  }
})();
