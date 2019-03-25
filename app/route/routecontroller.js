angular.module("nccRoutes").controller("routesController", function ($scope, $http) {

    $scope.routes = []

    $scope.routesAPIUrl = "http://webteach_net.hallam.shu.ac.uk/acesjas/api/route"

    $scope.init = function () {
        $http.get($scope.routesAPIUrl)
            .success(function (response) {
                $scope.routes = response;
            })
            .error(function (error) {
                $scope.errorMessage = error;
            })
    }

    $scope.init()
})