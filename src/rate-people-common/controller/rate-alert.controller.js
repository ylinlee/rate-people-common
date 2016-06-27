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
