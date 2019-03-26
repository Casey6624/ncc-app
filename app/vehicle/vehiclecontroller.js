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
            id: $scope.vehicles.length,
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
        $scope.isAdding = !$scope.isAdding
        $scope.isUpdating = false
    }

    $scope.cancelAddVehicle = function () {
        $scope.isAdding = false
    }



    $scope.editVehicle = function (Id) {
        console.log(`Edit vehicle with ID ${Id}`)

        $http.get(`${$scope.vehicleAPIUrl}/${Id}`)
            .success(function (res) {
                $scope.editVehicleCapacity = res.Id
                $scope.editVehicleDriver = res.Capacity
                $scope.editVehicleMake = res.Make
                $scope.editVehicleModel = res.Model
                $scope.editVehicleRegistration = res.Registration
            })
            .error(function (error) {
                $scope.errorMessage = error;
            })
        $scope.isAdding = false
        $scope.isUpdating = true

    }

    $scope.delVehicle = function (Id) {
        console.log(`Delete vehicle with ID ${Id}`)
    }

    $scope.init()
})