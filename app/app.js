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
    templateUrl: '../templates/index.tpl.html',
    // template: "<h1>Hello World!<h1>"
  });
}]);
