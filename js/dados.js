let savedHist = localStorage.getItem("history");
let rollResults = savedHist ? JSON.parse(savedHist) : [];
let lastRoll;

//constructor para los objects del historial
function roll(dice, result, modifier) {
  this.dice = dice;
  this.result = result;
  this.modifier = modifier;
}

//función de apoyo para mostrar el resultado
function updateResult() {
  const inputResult = document.getElementById("result");
  inputResult.value = lastRoll ? lastRoll.result : "";
}

//listener para cada boton
const four = document.getElementById("4sides");
const six = document.getElementById("6sides");
const eight = document.getElementById("8sides");
const ten = document.getElementById("10sides");
const twelve = document.getElementById("12sides");
const twenty = document.getElementById("20sides");
const hundred = document.getElementById("100sides");

function diceroller(dice) {
  const selectedModifier = parseInt(
    document.getElementById("modificadores").value
  );
  let result = Math.floor(Math.random() * dice) + 1 + selectedModifier;
  let diceroll = new roll(dice, result, selectedModifier);
  rollResults.push(diceroll);
  lastRoll = rollResults[rollResults.length - 1];
  updateResult();
  updateHistory();
}

four.addEventListener("click", () => {
  console.log(diceroller(4));
});

six.addEventListener("click", () => {
  console.log(diceroller(6));
});

eight.addEventListener("click", () => {
  console.log(diceroller(8));
});

ten.addEventListener("click", () => {
  console.log(diceroller(10));
});

twelve.addEventListener("click", () => {
  console.log(diceroller(12));
});

twenty.addEventListener("click", () => {
  console.log(diceroller(20));
});

hundred.addEventListener("click", () => {
  console.log(diceroller(100));
});

//funciónes para el historial
const inputHistory = document.getElementById("history");

function updateHistory() {
  if (rollResults.length == 0) {
    inputHistory.value = "No hay historial reciente";
  } else {
    inputHistory.value = rollResults
      .map((roll) => {
        return `Lanzaste un dado de ${roll.dice} caras, con un modificador de ${roll.modifier} y el resultado final fue ${roll.result}`;
      })
      .join("\n");
  }
  inputHistory.scrollTop = inputHistory.scrollHeight;
}
updateHistory();

//botones del historial
const saveBtn = document.getElementById("saveHist");
saveBtn.addEventListener("click", () => {
  localStorage.setItem("history", JSON.stringify(rollResults));
  updateHistory();
});

const delBtn = document.getElementById("delHist");
delBtn.addEventListener("click", () => {
  localStorage.removeItem("history");
  rollResults = [];
  updateHistory();
});

//popup tienda
if (!localStorage.getItem("popupShown")) {
  setTimeout(() => {
    Swal.fire({
      title: "¿TODAVÍA NO JUGASTE A HERO QUEST?",
      showCancelButton: true,
      confirmButtonText: "¡Jugalo Ahora!",
      cancelButtonText: "Ahora no",
      confirmButtonColor: "green",
      cancelButtonColor: "red",
      icon: "question",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "html/hero-quest.html";
      }
    });
    localStorage.setItem("popupShown", true);
  },9000);
}
