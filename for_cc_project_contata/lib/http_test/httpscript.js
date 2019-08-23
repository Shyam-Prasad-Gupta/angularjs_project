var httpApp = angular.module("httpApp", []);

httpApp.controller("httpController", function ($scope, $http) {

    $scope.data = [];
    $scope.error;
    $scope.searchText = '';

    //http success function
    var onSuccess = function (data, status, headers, config) {
        //debugger;
        parseJsonResponse(data);
    };

    //http error function
    var onError = function (data, status, headers, config) {
        //debugger;
        $scope.error = status;
    };

    //this function parses the json response and push the data into an array to display
    var parseJsonResponse = function (jsonResp) {
        debugger;
        $scope.data = [];
        var dataJson = jsonResp.data.query.pages;
        if (dataJson != null && dataJson != undefined) {
            for (key in dataJson) {
                var singleObj = dataJson[key];
                $scope.data.push({ 'title': singleObj['title'], 'description': singleObj['extract'] });
            }
        }
        //debugger;
    };

    $scope.searchWiki = function(){
        $http({
            method: 'GET',
            url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=' + encodeURI($scope.searchText) + '&origin=*'
        }).then(onSuccess, onError);
    }

});
