(function() {
    'use strict';

  angular
    .module('rateApp.rate-common', [
    ]);
})();

(function() {
    'use strict';

  angular.module('rateApp.rate-people-common')
    .controller('RateAlertController', RateAlertController);

  RateAlertController.$inject = ['$scope'];

  function RateAlertController($scope) {
    var vm = this;
    vm.success = false;
    vm.error = false;
    vm.validation = {
      state: '',
      message: ''
    };
    addValidationListener();

    function addValidationListener() {
      $scope.$on('validation', function(event, data) {
        if(data.status === 'OK') {
          onSuccess(data);
        } else if(data.status === 'ERROR') {
          onError(data);
        }
      });
    }

    function onSuccess(data) {
      vm.success = true;
      vm.error = false;
      vm.validation.state = data.state;
      vm.validation.message = data.message;
      $('.alert').removeClass('hide');
      $('.alert').addClass('show');
      setTimeout(function() {
          $('.alert').addClass('hide');
          resetValues();
      }, 3000);
    }

    function onError(data) {
      vm.success = false;
      vm.error = true;
      vm.validation.state = data.state;
      vm.validation.message = data.message;
      $('.alert').removeClass('hide');
      $('.alert').addClass('show');
      setTimeout(function() {
          $('.alert').addClass('hide');
          resetValues();
      }, 3000);
    }

    function resetValues() {
      vm.validation.state = '';
      vm.validation.message = '';
      vm.success = false;
      vm.error = false;
    }
  }

})();

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

(function() {
    'use strict';

  angular.module('rateApp.rate-people-common')
      .directive('inputStar', InputStar);

  function InputStar() {
      return {
          restrict: 'A',
          link: InputStarLink
      };
  }

  InputStarLink.$inject = ['$scope', '$element'];

  function InputStarLink(scope, element) {
    $(element).rating('update', scope.revw.stars);
  }
})();

(function() {'use strict';angular.module('rateApp.rate-people-common').run(['$templateCache', function($templateCache) {$templateCache.put('src/rate-people-common/template/rate-alert.template.html','<style type="text/css">.alert {\r\n        z-index: 1;\r\n        position: fixed;\r\n        top: 50px;\r\n        width: calc(100% - 40px);\r\n        margin: 0 20px;\r\n    }\r\n\r\n    .alert.show {\r\n        visibility: visible;\r\n        opacity: 1;\r\n    }\r\n\r\n    .alert.hide {\r\n        visibility: hidden;\r\n        opacity: 0;\r\n        transition: visibility 0s 2s, opacity 2s linear;\r\n    }</style><div class="alert alert-dismissible" ng-class="{\'alert-success\': RateAlertCtrl.success, \'alert-danger\': RateAlertCtrl.error }" role="alert" class=""><strong>{{RateAlertCtrl.validation.state}}</strong> {{RateAlertCtrl.validation.message}}</div>');}]);})();