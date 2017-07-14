dollarApp.controller('PeriodicQuotationCtrl', [
  "$scope",
  "ValidateDateFieldSrvc",
  "QuotationSrvc",
  function($scope, ValidateDateFieldSrvc, QuotationSrvc){

  /* Atomic function to return a date with the yesterday timestamp
  params: none
  return: Date
  */
  const createYesterdayDate = function() {
    var date = new Date();
    date.setDate(date.getDate() -1);

    return date;
  }


  /*--------------------------------------------------------------------------*/

  const getAllQuotationsFromPeriod = function(start, end) {
    var quotationsPerDay = [];
    const periodLimit = Math.ceil(Math.abs(end.getTime() - start.getTime())/(1000 * 3600 * 24));

    for(var i = 0 ; i< periodLimit ; i++){
      QuotationSrvc.getQuotationFromDay('2017-07-13').then(function(result){
        quotationsPerDay.push({
          day: i,
          quotation: result.data.rates.USD,
        })
        console.log(quotationsPerDay);
      });

    }


  }
  /*
  ### Scope definitions
  */
  $scope.period = {
    start: createYesterdayDate(),
    end: new Date(),
  };

  $scope.submitPeriods = function() {
    const isStartPeriodValid = ValidateDateFieldSrvc.validate($scope.period.start);
    const isEndPeriodValid = ValidateDateFieldSrvc.validate($scope.period.end);

    if(isStartPeriodValid && isEndPeriodValid) {
        // Trigger function go get each day the dollar quotation in BRL.
      const quotationsPerDay = getAllQuotationsFromPeriod($scope.period.start, $scope.period.end);
    } else {
        // Trigger function to alert user about the invalid period
    }
  };

  /*--------------------------------------------------------------------------*/
}]);
