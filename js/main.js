const display = document.querySelector("#display");
const botonCalcular = document.querySelector("#calcular");
const botonReset = document.querySelector("#reset");

botonCalcular.addEventListener("click", calculadora);
botonReset.addEventListener("click", reset);

let totalCuenta;
let porcentajePropina;
let precioFinal;
let resultadoPropina;

function calculadora() {
  let total = prompt("Ingrese el total de la cuenta");
  totalCuenta = Number(total);

  let porcentaje = prompt("Ingrese el % de la propina.");
  porcentajePropina = Number(porcentaje);

  let calcPorcentaje = (total * porcentaje) / 100;
  resultadoPropina = calcPorcentaje;

  let resultado = totalCuenta + resultadoPropina;

  precioFinal = resultado;
  display.value = resultado;
}

function reset() {
  display.value = "";
}

console.log(totalCuenta);
console.log(porcentajePropina);
