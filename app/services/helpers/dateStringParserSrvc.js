dollarApp.factory("dateStringParserSrvc", [function() {

  service = {};

  service.parseDateToString = function(date) {
      var parsedDateToString = "";

      parsedDateToString = parsedDateToString + date.getUTCFullYear();

      if(date.getUTCMonth() < 9){
          parsedDateToString = parsedDateToString + "-0" + (date.getUTCMonth()+1);
      } else {
          parsedDateToString = parsedDateToString + "-" + (date.getUTCMonth()+1);
      }

      if(date.getUTCDate() < 10){
        parsedDateToString = parsedDateToString + "-0" + date.getUTCDate();
      } else {
        parsedDateToString = parsedDateToString + "-" + date.getUTCDate();
      }
      
      console.log(parsedDateToString);
      return parsedDateToString;
  }

  return service;
}])
