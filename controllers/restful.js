app.controller('ctrlr', function($scope, $http){
    $http.get('http://localhost:3000').success(function(data) {
        $scope.stuff = data;
    });
});