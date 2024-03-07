//El chiste del adivina palabra se queda por ahora, me hizo gracia
function adivinaPalabra() {
  let palabraMagica = "Dados";
  console.log(palabraMagica);

  for (let i = 0; i < 3; i++) {
    let ingreso = prompt("Ingresá tu palabra");
    if (ingreso === palabraMagica) {
      alert("¡Acertaste! Felicitaciones");
      break;
    } else if (i === 2) {
      alert("¡Te quedaste sin intentos! La palabra era: " + palabraMagica);
    } else {
      alert("Fallaste :(");
    }
  }
}

const botonSimDados = document.getElementById("simDados");

botonSimDados.addEventListener("click", function () {
  adivinaPalabra();
});
