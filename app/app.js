'use strict';

var dollarApp = angular.module('dollarApp', [

  // External Dependencies
  'ui.router',

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
}]);
