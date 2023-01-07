const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btncalcular");
const pR = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", sumar)

function sumar(event) {
   event.preventDefault()
  console.log(event); 
  const suma = parseInt(input1.value) + parseInt(input2.value);
  pR.innerText = "resultado: " + suma;
}

;

