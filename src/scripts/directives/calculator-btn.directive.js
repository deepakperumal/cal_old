app.directive('calculator', function() {
  return {
    restrict: 'AE',
    templateUrl: '../src/partials/templates/button.html',
    controller: 'testController'
  };
});

app.directive('calculatorBtn', function() {
  return {
    restrict: 'AE',
    scope: {
      value: '=',
      text: '@',
      test: '&',
      size: '=?'
    },
    template: '<div class="cal-btn {{size}}" ng-click="test()" >{{value}}</div>'
  };
});
