angular.module("nccBooking").controller("bookingController", function ($scope, $http) {

    $scope.bookings = []

    $scope.bookingAPIUrl = "http://webteach_net.hallam.shu.ac.uk/acesjas/api/booking"

    $scope.init = function () {
        $http.get($scope.bookingAPIUrl)
            .success(function (response) {
                $scope.bookings = response;
            })
            .error(function (error) {
                $scope.errorMessage = error;
            })
    }
    $scope.init()

    $scope.addBooking = function () {

        let bookingDetails = {
            id: $scope.bookings.length,
            PassengerName: $scope.bookingPassengerName,
            PickupLocation: $scope.bookingPickupLocation,
            DropOffLocation: $scope.bookingDropOffLocation,
            VehicleId: $scope.bookingVehicleId,
            CurrentPassenger: $scope.bookingCurrentPassenger
        }

        $http.post($scope.bookingAPIUrl, bookingDetails)
            .success(function (res) {
                console.log(res)
                $scope.isAdding = false;
                $scope.init()
            })
            .error(function (error) {
                $scope.errorMessage = error;
            })
    }

    $scope.showAddBooking = function () {
        $scope.isAdding = !$scope.isAdding
        $scope.isUpdating = false
    }

    $scope.cancelAddBooking = function () {
        $scope.isAdding = false
    }

    $scope.cancelEdit = function () {
        $scope.isUpdating = false
    }



    $scope.displayEditBooking = function (Id) {
        console.log(`Edit Booking with ID ${Id}`)

        $http.get(`${$scope.bookingAPIUrl}/${Id}`)
            .success(function (res) {
                $scope.editBookingId = Id
                $scope.editBookingPassengerName = res.PassengerName
                $scope.editBookingPickupLocation = res.PickupLocation
                $scope.editBookingDropOffLocation = res.DropOffLocation
                $scope.editBookingVehicleId = res.VehicleId
                $scope.editBookingCurrentPassenger = res.CurrentPassenger
            })
            .error(function (error) {
                $scope.errorMessage = error;
            })
        $scope.isAdding = false
        $scope.isUpdating = true

    }


    $scope.submitEdit = function () {
        let editedBooking = {
            id: $scope.editBookingId,
            PassengerName: $scope.editBookingPassengerName,
            PickupLocation: $scope.editBookingPickupLocation,
            DropOffLocation: $scope.editBookingDropOffLocation,
            VehicleId: $scope.editBookingVehicleId,
            CurrentPassenger: $scope.editBookingCurrentPassenger
        }

        $http.put($scope.bookingAPIUrl, editedBooking)
            .success(function () {
                $scope.isUpdating = false
                $scope.init()
            })
            .error(function (error) {
                $scope.errorMessage = error;
            })
    }

    $scope.delBooking = function (Id) {
        let itemToDelete = $scope.bookings.indexOf(Id)

        $scope.bookings.splice(itemToDelete, 1)

        $http.delete(`${$scope.bookingAPIUrl}/${Id}`)
            .success(function (res) {
                $scope.init()
            })
            .error(function (error) {
                $scope.errorMessage = error;
            })
    }










})