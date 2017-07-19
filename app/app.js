'use strict';

var dollarApp = angular.module('dollarApp', [

  // External Dependencies
  'ui.router',
  'chart.js',
  'angular-loading-bar',
  'ui.bootstrap',

  // Internal Dependencies
  'dollarApp.version'
])

.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.when('', 'main');
  $urlRouterProvider.otherwise('dollar');
  $stateProvider.state({
    name: 'main',
    controller: 'PeriodicQuotationCtrl',
    url: '/main',
    templateUrl: '../templates/periodicQuotation.tpl.html',
  });
}])

.config(["ChartJsProvider", function(ChartJSProvider) {
  ChartJSProvider.setOptions({
    chartColors: ['#59d89e', '#134a31'],
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
      ]
    }
  })
}])

.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
    cfpLoadingBarProvider.includeBar = false;
    cfpLoadingBarProvider.latencyThreshold = 50;
  }])
;
