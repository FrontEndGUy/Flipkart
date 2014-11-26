'use strict';

/**
 * @ngdoc function
 * @name flipkartApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the flipkartApp
 */
angular.module('flipkartApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
