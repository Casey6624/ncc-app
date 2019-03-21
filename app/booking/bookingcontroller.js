angular.module("nccBooking").controller("bookingController", function ($scope, $http) {

    $scope.bookings = []

    $scope.bookingAPIUrl = "http://webteach_net.hallam.shu.ac.uk/acesjas/api/booking"

    $scope.init = function () {
        $http.get($scope.bookingAPIUrl)
            .success(function (response) {
                $scope.bookings = response;
                console.log($scope.bookings)
            })
            .error(function (error) {
                $scope.errorMessage = error;
            })
    }

    $scope.init()
})