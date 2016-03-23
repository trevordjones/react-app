var Industries = (function(){
  var getIndustries = function(industry_response) {
    $.ajax({
      url: '/api/v1/industries.json',
      type: 'get',
      dataType: 'json',
      cache: false,
      success: function(data){
        industry_response(data)
      },
      error: function(xhr){
        console.log(xhr)
      }
    })
  }
  
  return {
    getIndustries: getIndustries
  }
})();