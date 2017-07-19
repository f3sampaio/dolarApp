dollarApp.factory('ValidateDateFieldSrvc', function(){
  var service = {};

  service.validate = function(date) {

    const isDateNotUndefined = (date !== undefined);
    const isDateIntoValidPeriod = !(date.getTime() > (new Date()).getTime()) &&
    !(date.getTime() < (new Date("1999-01-01 00:00:00")));

    return isDateNotUndefined && isDateIntoValidPeriod;
  }
  return service;
})
