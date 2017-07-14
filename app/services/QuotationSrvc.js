dollarApp.constant('REST_URL', 'http://api.fixer.io/');
dollarApp.factory("QuotationSrvc", ["REST_URL", "$http" ,function(REST_URL, $http){
  var service = {};

  service.getQuotationFromDay = function(day) {
    var result =
    $http.get(REST_URL + day, {
      url: REST_URL + day,
      method: 'GET',
      headers: {
      },
    });
    return result;
  }

  return service;
}])
