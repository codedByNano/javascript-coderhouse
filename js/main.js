function saludo(nomb = "usuario") {
  alert("Hola " + nomb);
}

let user = prompt("Ingresá tu nombre");

if (user != "") {
  saludo(user);
} else {
  saludo();
}

let ingreso = prompt(
  "Que bueno verte, como podemos ayudarte hoy " +
    user +
    "\n 1) Juguemos a adivina la palabra \n 2) Inicia el simulador de dados de rol \n 3) Salir"
);

switch (ingreso) {
  case "1":
    alert("Bienvenido a Adivina la palabra, vas a tener 3 intentos para acertar")
    let palabraMagica = "Gato";
    console.log("La palabra es " + palabraMagica);

    for (let i = 0; i < 3; i++) {
      let ingreso = prompt("Ingresá tu palabra");
      if (ingreso === palabraMagica) {
        alert("¡Acertaste! Felicitaciones " + user);
        break;
      } else if ( i === 2) {
        alert("¡Te quedaste sin intentos! La palabra era: " + palabraMagica)
      } else {
        alert("Adivinasten't :C"); 
      }
    }
    break;
  case "2":
    alert("El simulador de dados (proyecto final) está todavía en construcción por falta de conocimientos, pero pronto estará disponible")
    break
  case "3":
    break
  default:
    alert("¡Esa no es una opcion! Intente de nuevo");
}
