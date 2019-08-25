var app = angular.module('ngApp', []);

app.controller('mainController', function myMainController($scope, $http) {

    //data binding variables
    $scope.searchText = "Narendra Modi";
    $scope.descList = [];
    //$scope.imageList = [];

    //http related variable
    $scope.successDescResp;
    $scope.errorDescResp;
    $scope.successImgResp;
    $scope.errorImgResp;
    $scope.defaultImageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Article_icon_cropped.svg/512px-Article_icon_cropped.svg.png";
    var onSuccess = function (data, status, header, config) {
        debugger;
        $scope.successDescResp = parseDescList(data);
    };

    var onError = function (data, status, header, config) {
        debugger;
        $scope.errorDescResp = status;
    };

    $http({
        method: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + encodeURI($scope.searchText) + "&limit=20&origin=*"
    }).then(onSuccess, onError);

    //parse the data
    function parseDescList(data) {
        debugger;
        $scope.descList = [];
        for (var i = 0; i < data.data[1].length; i++) {
            $scope.descList[i] = data.data[i + 1];
        }
    }

    //to get the image list
    var onImgSuccess = function (data, status, header, config) {
        debugger;
        $scope.imageList = parseImgList(data);
    };

    var onImgError = function (data, status, header, config) {
        debugger;
        $scope.errorResp = status;
    };

    $http({
        method: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages%7Cpageterms&generator=prefixsearch&redirects=1&formatversion=2&piprop=thumbnail&pithumbsize=250&pilimit=20&wbptterms=description&gpssearch=" + encodeURI($scope.searchText) + "&gpslimit=20&origin=*"
    }).then(onImgSuccess, onImgError);

    //parse the image list
    function parseImgList(data) {
        debugger;
        $scope.imageList = [];
        var imgData = data.data.query.pages;
        for (var i = 0; i < imgData.length; i++) {
            if (imgData[i].thumbnail != null && imgData[i].thumbnail.source != undefined && imgData[i].thumbnail.source.trim().length > 0) {
                $scope.imageList[i] = imgData[i].thumbnail.source;
            }else{
                $scope.imageList[i] = $scope.defaultImageUrl;
            }
        }
    };

});