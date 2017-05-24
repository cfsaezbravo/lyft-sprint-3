/* --------------------- Validando el número de teléfono ---------------------*/

/*Variables (primero llamo a los elementos a los que quiero afectar en mi HTML)*/

var btndriver = document.getElementById("driver");
var inputNumber = document.getElementById("number");

/*Botón driver (le agrego la funcionalidad de dar "click" al boton desde el JS y llamo a la función que va
a validar el número de teléfono que ingrese*/

btndriver.addEventListener("click", agregarNumero);

/*Funciones (primero, creo una función expression en la que le demos los parámetros al número, es decir, 
que los números vayan del 0 al 9 y que su largo sea de mínimo 9 números y máximo 11. Luego le digo: 

	1. Si el número que entra en mi input, es "igual" a mi variable phone, retorna "true", es decir, acéptalo.
	2. Si no, limpia el input y tira un alert que diga que la información es incorrecta. Retorna false porque
	no funciona. 

En mi segunda función expression, estoy diciendo que si en mi primera función, validarTelefono, entra inputNumber
correctamente, entonces avise que el registro fue realizado con éxito. */

var validarTelefono = function(inputNumber){
	var phone = /^[0-9]{9,11}$/;
	if(inputNumber.value.match(phone)){
		inputNumber.value = "";
		return true;
	}else{
		inputNumber.value = "";
		alert("Debe ingresar un número de teléfono válido");
		return false; 
	}
};

var agregarNumero = function(){
	event.preventDefault();

	if(validarTelefono(inputNumber)){
		alert("Registro realizado con éxito");
	}
}

/*--------------------- Validación de inputs tablero ---------------------*/

/*Tomo los valores de los inputs y del botón*/

var btnStart = document.getElementById("start");
var coorX = document.getElementById("coorX");
var coorY = document.getElementById("coorY");

/* Al botón le digo que al hacer click, ejecute la función "validacion"*/

btnStart.addEventListener("click", validacion);

/*En esta función tengo: 

	1. Que el "x" cuando entre, sea un número del 0 al 9 y que si el valor
	que entra es igual a mi variable num, entonces lo acepte.
	2. Lo mismo con el "y" */

function validacion (){
var validarX = function (coorX){
	var num = /^[0-9]$/;
	if(coorX.value.match(num)){
		return true;
	}else{
		coorX.value="";
		alert("Ingresa un número válido");
		return false;
	}
};

var validarY = function (coorY){
	var num = /^[0-9]$/;
	if(coorY.value.match(num)){
		return true;
	}else{
		coorY.value="";
		alert("Ingresa un número válido");
		return false;
	}
};

/*Si "x" fue correctamente ingresa e "y" fue correctamente ingresado, entonces
ingresa los valores*/

if(validarX(coorX)){
		if(validarY(coorY)){
			alert("Números ingresados correctamente");
			/*btnStart.addEventListener("click", hola)

			var hola = function (){
			var cajaNueva = document.getElementById("contenedor-juego");
			cajaNueva.setAttribute("class", "caja-nueva");*/
		}
	}
	var agregarNum = function(){
	event.preventDefault();
}
};



	







