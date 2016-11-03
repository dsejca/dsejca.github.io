(function () {
	var FirstCtrl = function ($scope) {
 		
	    $scope.mySex = 'masculino';
	    $scope.myYear = 1990;
	    $scope.result1=0;
 
		$scope.fontsfeatures = {
			inicial: 'bold'
		};
 
		$scope.fonts = [
	        {value: 'bold', displayName: 'negrita'},
	        {value: 'underline', displayName: 'subrayado'},
	        {value: 'italic', displayName: 'cursiva'}
		];

		$scope.GetYearsOld = function(myYear){
 			var date= new Date();
 			var yyyy= date.getFullYear();
 			//console.log(yyyy + " "+ myYear); 			
	    	$scope.result1 = yyyy -  myYear;
	    	
	    	return  $scope.result1;

		};
 
	    /*$scope.$watch('myYear', function(mySex, myYear) {
	    	console.log (mySex);
 			var date= new Date();
 			var yyyy= date.getFullYear();
 			console.log(yyyy);
 			
	    	 $scope.result= yyyy - myYear;    	 

	    },true);*/
 
	};
 
    FirstCtrl.$inject = ['$scope'];
    angular.module('routerApp').controller('FirstCtrl', FirstCtrl);	
}());