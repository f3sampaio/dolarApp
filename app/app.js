'use strict';

var dollarApp = angular.module('dollarApp', [

  // External Dependencies
  'ui.router',
  'chart.js',

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
    chartColors: ['#FF5252', '#FF8A80'],
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
;
