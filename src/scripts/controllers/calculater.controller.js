app.controller('testController', function($scope) {
  $scope.result = '';

  $scope.obj = [
    { text: 7, value: 7, size: 'normal' },
    { text: 8, value: 8, size: 'normal' },
    { text: 9, value: 9, size: 'normal' },
    { text: '+', value: '+', size: 'normal' },
    { text: '-', value: '-', size: 'normal' },

    { text: 6, value: 6, size: 'normal' },
    { text: 5, value: 5, size: 'normal' },
    { text: 4, value: 4, size: 'normal' },
    { text: '/', value: '/', size: 'normal' },
    { text: '*', value: '*', size: 'normal' },
    { text: 3, value: 3, size: 'normal' },
    { text: 2, value: 2, size: 'normal' },
    { text: 1, value: 1, size: 'normal' },
    { text: '(', value: '(', size: 'normal' },
    { text: ')', value: ')', size: 'normal' },

    { text: 0, value: 0, size: 'normal' },
    { text: '.', value: '.', size: 'normal' },
    { text: '%', value: '%', size: 'normal' }
  ];

  $scope.appendKey = function(key) {

if($scope.result=='Infinity' ||$scope.result=='-Infinity' || $scope.result=='undefined' || $scope.result=='Invalid Expression'  )
$scope.result=''

    $scope.result += key.toString();
  };

  $scope.clear = function() {
    $scope.result = '';
  };

  $scope.calResult = function() {
    var isValid = true;
    try {
      $scope.$eval($scope.result);
    } catch (e) {
      isValid = false;
    }
    
    if (isValid) $scope.result = $scope.$eval($scope.result);
    else $scope.result = 'Invalid Expression';
  };

  $scope.test = function(value) {
    console.log(value);
  };



$scope.lightIn = function(){

  var element = document.getElementById("light");
  element.classList.add("light");


}

$scope.lightOut = function(){

  var element = document.getElementById("light");
  element.classList.remove("light");
  
  
  }
  



});
