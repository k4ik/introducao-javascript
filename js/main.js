var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
var titulo2 = document.querySelector(".titulo2");
titulo2.textContent = "Pacientes:";

var paciente = document.querySelector("#Paulo");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent

var imc = peso / (altura * altura);

console.log(imc)
