dollarApp.factory("dateStringParserSrvc", [function() {

  service = {};

  service.parseDateToString = function(date) {
      var parsedDateToString = "";

      parsedDateToString = parsedDateToString + date.getUTCFullYear();

      if(date.getUTCMonth() < 9){
          parsedDateToString = parsedDateToString + "-0" + (date.getMonth()+1);
      } else {
          parsedDateToString = parsedDateToString + "-" + (date.getMonth()+1);
      }

      if(date.getUTCDate() < 10){
        parsedDateToString = parsedDateToString + "-0" + date.getDate();
      } else {
        parsedDateToString = parsedDateToString + "-" + date.getDate();
      }

      return parsedDateToString;
  }

  return service;
}])
