<<<<<<< HEAD
var myMainModule = angular.module('myMainModule', []);

myMainModule.controller('myMainController', [$scope, 'notify', function ($scope, notify) {

  $scope.callNotify = function (msg) {
    notify(msg);
  };
}]).factory('notify', ['$window', function (win) {
  var msgs = [];
  return function (msg) {
    msgs.push(msg);
    if (msgs.length === 3) {
      win.alert(msgs.join('\n'));
      msgs = [];
    }
  };
}]);
=======
var practiceModule = angular.module('practiceModule', []);

practiceModule.controller('PracticeController', ['$scope', 'notify', function practiceController($scope, notify){
    $scope.message;
    $scope.callNotify = function(msg){
        debugger;
        notify(msg);
        console.log(msg);
    };
    $scope.onchng = function(){
        //debugger;
        console.log($scope.message);
    }
}]).factory('notify', ['$window', function (win){
    var msgs = [];
    return function(msg){
        debugger;
        msgs.push(msg);
        if(msgs.length == 3){
            win.alert(msgs.join('\n'));
            msgs = [];
        }
    }
}]);

/*practiceModule.factory('notify', ['$window', function (win){
    var msgs = [];
    return function(msg){
        debugger;
        msgs.push(msg);
        if(msgs.length == 3){
            win.alert(msgs.join('\n'));
            msgs = [];
        }
    }
}]);*/
>>>>>>> 63ed02898ffd797a6b3ecdac736ba8499350289c
