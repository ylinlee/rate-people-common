(function() {
    'use strict';

  angular.module('rateApp.rate-people-common')
      .directive('rateAlert', RateAlert);

  function RateAlert() {
      return {
          restrict: 'E',
          controller: 'RateAlertController',
          controllerAs: 'RateAlertCtrl',
          templateUrl: 'src/rate-people-common/template/rate-alert.template.html'
      };
  }
})();
