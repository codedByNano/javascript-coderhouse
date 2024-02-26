// INICIO
function saludo(nomb = "usuario") {
  alert("Hola " + nomb);
}

let user = prompt("Ingresá tu nombre");

if (user != "") {
  saludo(user);
} else {
  saludo();
}

//El chiste del adivina palabra se queda por ahora, me hizo gracia
function adivinaPalabra() {
  let palabraMagica = "Dados";
  console.log("La palabra es " + palabraMagica);

  for (let i = 0; i < 3; i++) {
    let ingreso = prompt("Ingresá tu palabra");
    if (ingreso === palabraMagica) {
      alert("¡Acertaste! Felicitaciones " + user);
      break;
    } else if (i === 2) {
      alert("¡Te quedaste sin intentos! La palabra era: " + palabraMagica);
    } else {
      alert("Fallaste :(");
    }
  }
}

//Armando el simulador de dados

let = resultadosTiradas = [];

function lanzadados() {
  let elegirDado = prompt(
    "Elige el tipo de dado que quieres tirar:\n" +
      "1) Dado de 4 caras\n" +
      "2) Dado de 6 caras\n" +
      "3) Dado de 8 caras\n" +
      "4) Dado de 10 caras\n" +
      "5) Dado de 12 caras\n" +
      "6) Dado de 20 caras\n" +
      "7) Dado de 100 caras"
  );
  console.log(elegirDado);

  let resultadoTirada;

  switch (elegirDado) {
    case "1":
      resultadoTirada = tirarD4();
      break;
    case "2":
      resultadoTirada = tirarD6();
      break;
    case "3":
      resultadoTirada = tirarD8();
      break;
    case "4":
      resultadoTirada = tirarD10();
      break;
    case "5":
      resultadoTirada = tirarD12();
      break;
    case "6":
      resultadoTirada = tirarD20();
      break;
    case "7":
      resultadoTirada = tirarD100();
      break;
    default:
      alert("¡Opción inválida! Por favor, elige una opción válida.");
      break;
  }

  if (resultadoTirada) {
    resultadosTiradas.push(resultadoTirada);
    console.log(resultadoTirada);
    alert("EL RESULTADO DE TU TIRADA FUE " + resultadoTirada);
  }
}

//FUNCIONES PARA LOS 7 TIPOS DE DADOS

function tirarD4() {
  return Math.floor(Math.random() * 4) + 1;
}

function tirarD6() {
  return Math.floor(Math.random() * 6) + 1;
}

function tirarD8() {
  return Math.floor(Math.random() * 8) + 1;
}

function tirarD10() {
  return Math.floor(Math.random() * 10) + 1;
}

function tirarD12() {
  return Math.floor(Math.random() * 12) + 1;
}

function tirarD20() {
  return Math.floor(Math.random() * 20) + 1;
}

function tirarD100() {
  return Math.floor(Math.random() * 100) + 1;
}

//Acá arranca la parte que el usuario participa
let ingreso = prompt(
  "Que bueno verte, como podemos ayudarte hoy " +
    user +
    "\n 1) Juguemos a adivina la palabra \n 2) Inicia el simulador de dados de rol \n 3) Salir"
);
switch (ingreso) {
  case "1":
    alert(
      "Bienvenido a Adivina la palabra, vas a tener 3 intentos para acertar"
    );
    adivinaPalabra();
    break;
  case "2":
    lanzadados();
    break;
  case "3":
    break;
  default:
    alert("¡Esa no es una opcion! Intente de nuevo");
}

console.log(resultadosTiradas);

const botonSimDados = document.getElementById("simDados");
console.log(botonSimDados);

botonSimDados.addEventListener("click", function () {
  lanzadados();
  console.log(resultadosTiradas);
});
