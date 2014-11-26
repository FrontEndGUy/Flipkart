'use strict';

/**
 * @ngdoc function
 * @name flipkartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flipkartApp
 */
angular.module('flipkartApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
