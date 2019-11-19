app.directive('calculatorBtn', function() {
  return {
    restrict: 'AE',
    scope: {
      value: '=',
      text: '@',
      onClick: '&',
      size: '=?'
    },
    template:
      '<button type="button" value="{{data.value}}" class="cal-btn" ng-click="appendKey(data.value)">{{text}}</button>'
  };
});
