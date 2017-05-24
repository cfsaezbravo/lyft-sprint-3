//Variables

var btndriver = document.getElementById("driver");
var inputNumber = document.getElementById("number");

//Funciones

var validarTelefono = function(inputNumber){
	var phone = /^[0-9]{9,11}$/;
	if(inputNumber.value.match(phone)){
		inputNumber.value = "";
		return true;
	}else{
		inputNumber.value = "";
		alert("Debe ingresar un número de teléfono válido con más de 9 dígitos");  
		inputNumber.focus();  
		return false; 
	}
};

var agregarNumero = function(){
	event.preventDefault();

	if(validarTelefono(inputNumber)){
		alert("Gracias");
	}
}

//Botón driver

btndriver.addEventListener("click", agregarNumero);


