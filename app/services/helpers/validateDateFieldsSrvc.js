dollarApp.factory('ValidateDateFieldSrvc', function(){
  var service = {};

  service.validate = function(date) {
    var isDateValid;
    if(date !== undefined){
      isDateValid = true;
    } else {
      isDateValid = false;
    }

    return isDateValid;
  }
  return service;
})
