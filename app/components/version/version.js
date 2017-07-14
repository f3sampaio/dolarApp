'use strict';

angular.module('dollarApp.version', [
  'dollarApp.version.interpolate-filter',
  'dollarApp.version.version-directive'
])

.value('version', '0.1');
