(function(){
	var CtrlFactoria = function($scope, firstFactory){
		//$scope.titulo = " $routeProvider - ng-view - firstFactory";
        $scope.data = firstFactory.getData();

        $scope.muestraEdad= function(){
        	var text = null;
            text = firstFactory.calculaEdad($scope.data.edad);
            return "Tienes " + text + " años";
        }
	};

	CtrlFactoria.$inject = ['$scope', 'firstFactory'];
    angular.module('routerApp').controller('CtrlFactoria', CtrlFactoria);


}());