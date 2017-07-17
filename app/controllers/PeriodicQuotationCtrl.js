dollarApp.controller('PeriodicQuotationCtrl', [
  "$scope",
  "ValidateDateFieldSrvc",
  "dateStringParserSrvc",
  "QuotationSrvc",
  "$timeout",
  function($scope, ValidateDateFieldSrvc, dateStringParserSrvc ,QuotationSrvc, $timeout){
    const DAY_IN_MILLISECONDS = (1000 * 3600 * 24);
  /*
  Atomic function to return a date with the yesterday timestamp
  params: none
  return: Date
  */
  const createYesterdayDate = function() {
    var date = new Date();
    date.setDate(date.getDate() -1);

    return date;
  }


  /*--------------------------------------------------------------------------*/
  const periodIterator = function(i, periodLimit, start, end, quotationsPerDay, quotationDates) {
    setTimeout(function() {
      if(i<=periodLimit){
        dateToGetQuotation = dateStringParserSrvc.parseDateToString(new Date(start.getTime()+i*DAY_IN_MILLISECONDS));
        QuotationSrvc.getQuotationFromDay(dateToGetQuotation).then(function(result){
            // quotationsPerDay.push({
            //   day: result.data.date,
            //   quotation: result.data.rates.BRL,
            // });
            quotationsPerDay.push(result.data.rates.BRL);
            quotationDates.push(result.data.date);
        });
        periodIterator(i+1,periodLimit,start,end,quotationsPerDay, quotationDates);
      } else {
        return 0;
      }
    }, 200);

  }
  /*
    Given a period, this function request for the quotation of a day and get the
    response data into an array of values
    params:
    - start: It's the first date of the period
    - end: It's the last date of the period
    return: Doesn't have a return, but sets the $scope.daysQuotations with the acquired array
  */
  const getAllQuotationsFromPeriod = function(start, end) {
    var quotationsPerDay = [];
    var quotationDates = [];
    const periodLimit = Math.ceil(Math.abs(end.getTime() - start.getTime())/DAY_IN_MILLISECONDS);

    var dateToGetQuotation;

    periodIterator(0,periodLimit,start,end, quotationsPerDay, quotationDates)

    var elements = [];

    // for(var i = 0 ; i < quotationsPerDay.length ; i++) {
    //     quotationsPerDay[i]
    // }

    $scope.data = quotationsPerDay;
    $scope.labels = quotationDates;

  }

  /*--------------------------------------------------------------------------*/
  /*
  ### Scope definitions
  */
  $scope.period = {
    start: new Date("2009-08-07 00:00:00"),
    end: new Date("2011-11-17 00:00:00"),
  };

  $scope.submitPeriods = function() {
    const isStartPeriodValid = ValidateDateFieldSrvc.validate($scope.period.start);
    const isEndPeriodValid = ValidateDateFieldSrvc.validate($scope.period.end);

    if(isStartPeriodValid && isEndPeriodValid) {
      // Trigger function go get each day the dollar quotation in BRL.
      getAllQuotationsFromPeriod($scope.period.start, $scope.period.end);
    } else {
        // Trigger function to alert user about the invalid period
    }
  };

  $scope.showStats = function() {
    var elements = [];

    for (i = 0 ; i < $scope.data.length ; i++) {
      elements.push({
        day: $scope.labels[i],
        quotation: $scope.data[i],
      })
    }

    elements.sort(function(a,b) {
      return a.quotation - b.quotation;
    })
    console.log(elements);


  }
  // Chart Scope Declaration
  $scope.data = [];
  $scope.labels = [];



  /*--------------------------------------------------------------------------*/
}]);
