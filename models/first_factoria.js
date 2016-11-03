(function(){

	var firstFactory =   function ()  {
        var factoria  =   {};
        var data  =   {};
        data.edad = 0;
        /*data.nombre = "";
        data.direccion = "";
        data.telefono = "";*/
 
        factoria.getData =   function ()  {
            return data;
        };
 
        factoria.calculaEdad = function(Age){
        	var date= new Date();
        	var year= date.getFullYear();
        	var resultado= year - Age;
        	
            return resultado;
        }
 
        return factoria;
    };
 
    angular.module('routerApp').factory('firstFactory', firstFactory);
}());