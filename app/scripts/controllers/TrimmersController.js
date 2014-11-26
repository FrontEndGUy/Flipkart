'use strict';

/**
 * @ngdoc function
 * @name flipkartApp.controller:TrimmersController
 * @description
 * # TrimmersController
 * Controller of the flipkartApp
 */
angular.module('flipkartApp')
    .controller('TrimmersController', ['$scope', 'TrimmersService',
        function(scope, TrimmersService) {
            TrimmersService
                .getTrimmers()
                .success(function(data, status, headers, config) {
                    console.log(data[0]);
                    scope.trimmers = data.slice(0, 2);
                })
                .error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log(data);
                });
        }
    ]);