dollarApp.controller('PeriodicQuotationCtrl', ["$scope", "ValidateDateFieldSrvc", function($scope, ValidateDateFieldSrvc){

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
    } else {
        // Trigger function to alert user about the invalid period
    }
  };

  /*--------------------------------------------------------------------------*/
}]);
