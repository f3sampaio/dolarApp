"use strict";

dollarApp.controller('PeriodicQuotationCtrl', [
    "$scope",
    "ValidateDateFieldSrvc",
    "dateStringParserSrvc",
    "QuotationSrvc",
    "$uibModal",
    function($scope, ValidateDateFieldSrvc, dateStringParserSrvc, QuotationSrvc, $uibModal) {
        const DAY_IN_MILLISECONDS = (1000 * 3600 * 24);

        const periodIterator = function(i, periodLimit, start, end, quotationsPerDay, quotationDates) {
            setTimeout(function() {
                if (i <= periodLimit) {
                    var dateToGetQuotation = dateStringParserSrvc.parseDateToString(
                        new Date(start.getTime() + i * DAY_IN_MILLISECONDS));
                    QuotationSrvc.getQuotationFromDay(dateToGetQuotation).then(
                        function(result) {
                            quotationsPerDay.push(result.data.rates.BRL);
                            quotationDates.push(result.data.date);
                            showStats();
                        });
                    periodIterator(i + 1, periodLimit, start, end, quotationsPerDay, quotationDates);
                } else {

                }
            }, 200);
        }

        const showStats = function() {
            var elements = [];

            for (i = 0; i < $scope.data.length; i++) {
                elements.push({
                    day: $scope.labels[i],
                    quotation: $scope.data[i],
                })
            }
            var orderedElements = elements.slice();
            orderedElements.sort(function(a, b) {
                return a.quotation - b.quotation;
            })

            $scope.minor = orderedElements[0];
            $scope.major = orderedElements[elements.length - 1];
            var media = 0;
            for (var i = 1; i < $scope.data.length - 1; i++) {
                media = media + orderedElements[i].quotation;
            }

            $scope.media = media / (elements.length - 2);
        }

        const getAllQuotationsFromPeriod = function(start, end) {
            var quotationsPerDay = [];
            var quotationDates = [];
            const periodLimit = Math.ceil(Math.abs(end.getTime() - start.getTime()) / DAY_IN_MILLISECONDS);

            periodIterator(0, periodLimit, start, end, quotationsPerDay, quotationDates);

            var elements = [];

            $scope.data = quotationsPerDay;
            $scope.labels = quotationDates;

        }

        $scope.period = {
            start: new Date("2009-08-07 00:00:00"),
            end: new Date("2011-11-17 00:00:00"),
        };

        $scope.data = [];
        $scope.labels = [];

        $scope.mediaLimit = {
          mediaStart: ($scope.period.start).getTime() + DAY_IN_MILLISECONDS,
          mediaEnd: ($scope.period.end).getTime() - DAY_IN_MILLISECONDS,
        }
        
        $scope.submitPeriods = function() {
            const isStartPeriodValid = ValidateDateFieldSrvc.validate($scope.period.start);
            const isEndPeriodValid = ValidateDateFieldSrvc.validate($scope.period.end);

            if (isStartPeriodValid && isEndPeriodValid) {
                // Trigger function go get each day the dollar quotation in BRL.
                getAllQuotationsFromPeriod($scope.period.start, $scope.period.end);
            } else {
                // Trigger function to alert user about the invalid period
            }
        };


    }
]);
