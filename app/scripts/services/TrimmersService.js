'use strict';

/**
 * @ngdoc service
 * @name flipkartApp.TrimmersService
 * @description
 * # TrimmersService
 * Factory in the flipkartApp.
 */
angular.module('flipkartApp')
    .factory('TrimmersService', ['$http',
        function(http) {

            return {
                getTrimmers: function() {
                    return http.get("data/trimmers.json");
                }
            };
        }
    ]);