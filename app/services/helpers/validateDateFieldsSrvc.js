dollarApp.factory('ValidateDateFieldSrvc', function(){
  var service = {};

  service.validate = function(date) {

    const isDateNotUndefined = (date !== undefined);
    const isDateIntoValidPeriod = !(date.getTime() > (new Date()).getTime()) &&
    !(date.getTime() < (new Date("1999-01-01 00:00:00")));

    return isDateNotUndefined && isDateIntoValidPeriod;
  }

  service.createErrorMessage = function(error) {
    var message = "";

    switch(error){
      case 1: message = message + "Data Inicial inválida."
      break;
      case 2: message = message + "Data Final inválida."
      case 3: message = message + "O período informado é inválido."
    }

    return message;
  }
  return service;
})
