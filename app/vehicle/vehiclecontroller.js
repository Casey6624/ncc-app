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

    $scope.addVehicle = function () {

        let vehicleDetails = {
            Capacity: $scope.vehicleCapacity,
            Driver: $scope.vehicleDriver,
            Make: $scope.vehicleMake,
            Model: $scope.vehicleModel,
            Registration: $scope.vehicleRegistration
        }

        $http.post($scope.vehicleAPIUrl, vehicleDetails)
            .success(function (res) {
                console.log(res)
                $scope.isAdding = false;
                $scope.init()
            })
            .error(function (error) {
                $scope.errorMessage = error;
            })
    }

    $scope.showAddVehicle = function () {
        $scope.isAdding = true
    }

    $scope.cancelAddVehicle = function () {
        $scope.isAdding = false
    }



    $scope.editVehicle = function (Id) {
        console.log(`Edit vehicle with ID ${Id}`)
    }

    $scope.delVehicle = function (Id) {
        console.log(`Delete vehicle with ID ${Id}`)
    }

    $scope.init()
})