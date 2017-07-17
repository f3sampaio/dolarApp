dollarApp.constant('REST_URL', 'http://api.fixer.io/');
dollarApp.factory("QuotationSrvc", ["REST_URL", "$http" ,function(REST_URL, $http){
  var service = {};

  service.getQuotationFromDay = function(day) {
    const requestUrl = REST_URL + day;
    requestData = {
      url: REST_URL + day,
      method: 'GET',
      params:{
        base: 'USD',
      },
      headers: {
      },
    };
    return $http.get(requestUrl, requestData).then(function successCallback(response) {
      return response;
    }, function errorCallback(response) {
      console.assert(true);
    });
  }

  return service;
}])
