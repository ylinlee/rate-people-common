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

  InputStarLink.$inject = ['$scope', '$element', '$attr'];

  function InputStarLink(scope, element, attr) {
    $(element).rating({ size: 'xs' });
    $(element).rating('update', attr.stars);

    scope.$watch('stars', function(newVal, oldVal) {
      if(newVal === oldVal) {
        return;
      }

      if(newVal === -1){
        attr.stars = 0;
        $(element).rating('reset');
      }
      
      attr.stars = newVal;
        $(element).rating('update', newVal);
      });
    /*$(element).on('rating.change', function(event, value) {
        vm.review.stars = value;
        $('#input-star-readonly').rating('update', value);
    });*/
    
  }
})();
