//dejé el adivinador porq era realmente simple

let wordsTried = [];
let attemps = 5;
const remainingAttempts = document.getElementById("remainingAttempts");
remainingAttempts.innerText = attemps;
const hintBox = document.getElementById("hintBox");
const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
let magicWord = "Fireball";
console.log(magicWord);

function newHint(attempsLeft) {
  let hint = "";
  switch (attempsLeft) {
    case 4:
      hint = `La palabra está en ingles y tiene ${magicWord.length} letras`;
      break;
    case 3:
      hint = `La palabra está en ingles y tiene ${magicWord.length} letras`;
      break;
    case 2:
      hint = "Es lo primero que hace un mago ante cualquier situación";
      break;
    case 1:
      hint =
        "Está relacionado con el fuego";
      break;
  }
  hintBox.innerHTML = `<p class="hint">${hint}</p>`;
}

guessBtn.addEventListener("click", () => {
  const userInput = guessInput.value.trim();
  const userInputCaps = userInput.charAt(0).toUpperCase() + userInput.slice(1);

  if (attemps > 0) {
    if (userInputCaps === magicWord) {
      Swal.fire({
        title: "¡Adivinaste!",
        text: "Felicitaciones",
        icon: "success",
        confirmButtonText: "¡Gracias!",
        confirmButtonColor: "#008f39",
      });
    } else {
      attemps--;
      remainingAttempts.innerText = attemps;
      newHint(attemps);
      if (attemps == 0) {
        Swal.fire({
          title: "Se acabaron tus intentos",
          text: `La palabra era ${magicWord}`,
          icon: "error",
          confirmButtonText: "Que mal :(",
          confirmButtonColor: "#FF0000",
        });
      }
    }
  }
});
