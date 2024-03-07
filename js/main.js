//Contenido dinámico, seleccionador del modificador
let modificadores = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const modificador = document.getElementById("modificadores").value;

const select = document.querySelector("#modificadores");

modificadores.forEach((modificador) => {
  let modif = document.createElement("option");
  modif.value = modificador;
  modif.innerText = modificador;
  select.append(modif);
});

select.addEventListener("change", () => {
  let modif = select.options[select.selectedIndex].value;
  console.log(modif);
});

let resultadosTiradas = []; //esto será la clave del éxito del simulador

//constructor para los objects del historial
function tirada(dado, resultado) {
  this.dado = dado;
  this.resultado = resultado;
}

//listener para cada boton
const four = document.getElementById("4sides");
const six = document.getElementById("6sides");
const eight = document.getElementById("8sides");
const ten = document.getElementById("10sides");
const twelve = document.getElementById("12sides");
const twenty = document.getElementById("20sides");
const hundred = document.getElementById("100sides");

function lanzadado(dado) {
  let result = Math.floor(Math.random() * dado) + 1;
  let nueva = new tirada(dado, result);
  resultadosTiradas.push(nueva);
  console.log(resultadosTiradas);
}

four.addEventListener("click", () => {
  console.log(lanzadado(4));
});

six.addEventListener("click", () => {
  console.log(lanzadado(6));
});

eight.addEventListener("click", () => {
  console.log(lanzadado(8));
});

ten.addEventListener("click", () => {
  console.log(lanzadado(10));
});

twelve.addEventListener("click", () => {
  console.log(lanzadado(12));
});

twenty.addEventListener("click", () => {
  console.log(lanzadado(20));
});

hundred.addEventListener("click", () => {
  console.log(lanzadado(100));
});
