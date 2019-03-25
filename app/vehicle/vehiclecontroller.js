angular.module("nccVehicle").controller("vehicleController", function ($scope, $http) {

    $scope.vehicles = []

    $scope.vehicleAPIUrl = "http://webteach_net.hallam.shu.ac.uk/acesjas/api/vehicle"

    $scope.init = function () {
        $http.get($scope.vehicleAPIUrl)
            .success(function (response) {
                $scope.vehicles = response;
                console.log($scope.vehicles)
            })
            .error(function (error) {
                $scope.errorMessage = error;
            })
    }


    $scope.editVehicle = function (Id) {
        console.log(`Edit vehicle with ID ${Id}`)
    }

    $scope.delVehicle = function (Id) {
        console.log(`Delete vehicle with ID ${Id}`)
    }

    $scope.init()
})