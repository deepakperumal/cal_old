var app = angular.module('app', []);

app.controller('testController', function($scope) {
  $scope.result = '';

  $scope.obj = [
    { key: 7, value: 7 },
    { key: 8, value: 8 },
    { key: 9, value: 9 },
    { key: '+', value: '+' },
    { key: '-', value: '-' },
    { key: '/', value: '/' },
    { key: 6, value: 6 },
    { key: 5, value: 5 },
    { key: 4, value: 4 },
    { key: '*', value: '*' },
    { key: '(', value: '(' },
    { key: ')', value: ')' },
    { key: 3, value: 3 },
    { key: 2, value: 2 },
    { key: 1, value: 1 },
    { key: 0, value: 0 },
    { key: '.', value: '.' },
    { key: '%', value: '%' }
  ];

  $scope.appendKey = function(key) {
    $scope.result += key;
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
});

app.directive('calculator', function() {
  return {
    restrict: 'AE',
    templateUrl: './button.html',
    controller: 'testController'
  };
});
