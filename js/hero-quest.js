const hero = {
  hp: 100,
  str: 10,
  def: 5,
  inventory: [],
};

//funciones fundamentales
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + 1;
}

function showMessage(message) {
  const history = document.getElementById("history");
  history.innerHTML += `<p>${message}</p>`;
}

function fightEnemy() {
  const evilAtk = randomNumber(5, 15);
  const evilDef = randomNumber(3, 10);

  if (hero.str > evilDef) {
    let hpLost = randomNumber(4, 10);
    hero.hp -= hpLost;
    showMessage(
      `¡Encontraste un enemigo! Sin embargo tu maestría con la espada fue suficiente para derrotarlo. <br> Venciste ¿Pero a que costo? <br> Perdiste ${hpLost} de vida`
    );
  } else {
    let hpLost = evilAtk - hero.def;
    hero.hp -= hpLost;
    showMessage(
      `¡Encontraste un enemigo muy poderoso! Fue un combate difícil. <br> Perdiste ${hpLost} de vida`
    );
  }
}

function findObject() {
  const objects = ["Afilador", "Pieza de Armadura", "Poción"];
  const objId = randomNumber(0, objects.length);
  const newObj = objects[objId];
  hero.inventory.push(newObj);
  showMessage(`¡Encontraste un objeto! Guardaste ${newObj} en el inventario`);
}

function randomEvent() {
  const events = ["enemy", "object", "none"];
  const eventId = randomNumber(0, events.length);
  return events[eventId];
}   

//movimiento
const btnUp = document.getElementById("btnUp");
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");
const btnDown = document.getElementById("btnDown");

function moveText(direction) {
  switch (direction) {
    case "up":
      message = "Te moviste hacia arriba";
      break;
    case "left":
      message = "Te moviste hacia la izquierda";
      break;
    case "right":
      message = "Te moviste hacia la derecha";
      break;
    case "down":
      message = "Te moviste hacia abajo";
      break;
  }
}

function moveHero(direction) {
  moveText(direction);
  const newEvent = randomEvent();

  switch (newEvent) {
    case "enemy":
      fightEnemy();
      break;
    case "object":
      findObject();
      break;
    case "none":
      showMessage("Esta vez no encontraste nada.");
      break;
  }
  showMessage(message);
}

btnUp.addEventListener("click", () => {
  moveHero("up");
});

btnLeft.addEventListener("click", () => {
  moveHero("left");
});

btnRight.addEventListener("click", () => {
  moveHero("right");
});

btnDown.addEventListener("click", () => {
  moveHero("down");
});
