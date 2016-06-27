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

  function InputStarLink($scope, element, attr) {
    $(element).rating({ size: 'xs' });
    $(element).rating('update', attr.stars);

    $scope.$watch('stars', watchRatingStar);
    /*$(element).on('rating.change', function(event, value) {
        vm.review.stars = value;
        $('#input-star-readonly').rating('update', value);
    });*/
    $scope.$on('updateRatingStar', updateRatingStar);
    $scope.$on('resetRatingStar', resetRatingStar);
    
    function watchRatingStar(newVal, oldVal) {
      if(newVal === oldVal) {
        return;
      }

      attr.stars = newVal;
      $(element).rating('update', newVal);
    }

    function updateRatingStar(event, info) {
      if(info.id === attr.id) {
        attr.stars = info.stars;
        $(element).rating('update', info.stars);
      }
    }

    function resetRatingStar() {
      attr.stars = 0;
      $(element).rating('reset');
    }

  }
})();
