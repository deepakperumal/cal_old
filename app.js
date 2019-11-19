var app = angular.module('app', []);

app.controller('testController', function($scope) {
  $scope.result = '';

  $scope.obj = [
    { text: 7, value: 7 },
    { text: 8, value: 8 },
    { text: 9, value: 9 },
    { text: '+', value: '+' },
    { text: '-', value: '-' },
    { text: '/', value: '/' },
    { text: 6, value: 6 },
    { text: 5, value: 5 },
    { text: 4, value: 4 },
    { text: '*', value: '*' },
    { text: '(', value: '(' },
    { text: ')', value: ')' },
    { text: 3, value: 3 },
    { text: 2, value: 2 },
    { text: 1, value: 1 },
    { text: 0, value: 0 },
    { text: '.', value: '.' },
    { text: '%', value: '%' }
  ];

  $scope.appendKey = function(key) {
    $scope.result += key;
    console.log($scope.result);
  };

  $scope.clear = function() {
    $scope.result = '';
  };

  $scope.calResult = function() {
    var isValid = true;
    try {
      eval($scope.result);
    } catch (e) {
      isValid = false;
    }

    if (isValid) $scope.result = eval($scope.result);
    else $scope.result = 'Invalid Expression';
  };

  $scope.test = function(value) {
    console.log(value);
  };
});

app.directive('calculator', function() {
  return {
    restrict: 'AE',
    scope: {},
    templateUrl: './button.html',
    controller: 'testController'
  };
});

app.directive('calculatorBtn', function() {
  return {
    restrict: 'AE',
    scope: {
      value: '=',
      text: '@',
      test: '&callFunc',
      size: '=?'
    },
    template:
      '<button type="button" value="{{value}}" class="cal-btn" ng-click="appendKey(value)" >{{value}}</button>',
    controller: 'testController'
  };
});
