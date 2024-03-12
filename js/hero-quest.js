const hero = {
  hp: 100,
  atk: 10,
  def: 5,
  inventory: {
    whetstone: 0,
    armor: 0,
    potion: 0,
  },
};

const history = document.getElementById("history");

function hudUpdate() {
  const hpBox = document.getElementById("hpBar");
  hpBox.value = hero.hp;

  const atkBox = document.getElementById("atkBar");
  atkBox.value = hero.atk;

  const defBox = document.getElementById("defBar");
  defBox.value = hero.def;

  const totalWhetstone = document.getElementById("totalWhetstone");
  totalWhetstone.innerText = `Total: ${hero.inventory.whetstone}`;

  const totalArmor = document.getElementById("totalArmor");
  totalArmor.innerText = `Total: ${hero.inventory.armor}`;

  const totalPotion = document.getElementById("totalPotion");
  totalPotion.innerText = `Total: ${hero.inventory.potion}`;
}
hudUpdate();

function checkStatus() {
  if (hero.hp <= 0) {
    history.innerHTML = `
    <p class="youDied">YOU DIED</p>`;

    const buttons = document.querySelectorAll(".gameBtn");
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function scrollBotom() {
  history.scrollTop = history.scrollHeight;
}

function showMessage(message) {
  history.innerHTML += `<p class="gameMsg">${message}</p>`;
}

function fightEnemy() {
  const evilAtk = randomNumber(5, 15);
  const evilDef = randomNumber(3, 10);

  if (hero.atk > evilDef) {
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
  const objects = ["whetstone", "armor", "potion"];
  const objId = randomNumber(0, objects.length - 1);
  const newObj = objects[objId];
  hero.inventory[newObj]++;
  if (newObj == "whetstone") {
    showMessage(
      "¡Encontraste un objeto! Guardaste el afilador en el inventario"
    );
  } else if (newObj == "armor") {
    showMessage(
      "¡Encontraste un objeto! Guardaste una parte de armadura en el inventario"
    );
  } else if (newObj == "potion") {
    showMessage(
      "¡Encontraste un objeto! Guardaste una pocion en el inventario"
    );
  }
}

function randomEvent() {
  const events = ["enemy", "object", "none"];
  const eventId = randomNumber(0, events.length - 1);
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
  showMessage(message);
}

function moveHero() {
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
  checkStatus();
}

btnUp.addEventListener("click", () => {
  moveText("up");
  moveHero();
  hudUpdate();
  scrollBotom();
});

btnLeft.addEventListener("click", () => {
  moveText("left");
  moveHero();
  hudUpdate();
  scrollBotom();
});

btnRight.addEventListener("click", () => {
  moveText("right");
  moveHero();
  hudUpdate();
  scrollBotom();
});

btnDown.addEventListener("click", () => {
  moveText("down");
  moveHero();
  hudUpdate();
  scrollBotom();
});

//zona de objetos del inventario
const whetstoneBtn = document.getElementById("whetstone");
const armorBtn = document.getElementById("armor");
const potionBtn = document.getElementById("potion");

whetstoneBtn.addEventListener("click", () => {
  if (hero.inventory.whetstone > 0) {
    hero.inventory.whetstone--;
    hero.atk += 2;
    showMessage("¡Usaste el afilador! Tu fuerza aumentó en 2");
    scrollBotom();
    hudUpdate();
  } else {
    showMessage("No te quedan afiladores en tu inventario");
    scrollBotom();
  }
});

armorBtn.addEventListener("click", () => {
  if (hero.inventory.armor > 0) {
    hero.inventory.armor--;
    hero.def += 1;
    showMessage("¡Te equipaste la armadura! Tu defensa aumentó en 1");
    scrollBotom();
    hudUpdate();
  } else {
    showMessage("No te quedan partes de armadura en tu inventario");
    scrollBotom();
  }
});

potionBtn.addEventListener("click", () => {
  if (hero.inventory.potion > 0) {
    hero.inventory.potion--;
    hero.hp += 5;
    showMessage("¡Usaste una poción! Tu vida aumentó en 5");
    scrollBotom();
    hudUpdate();
  } else {
    showMessage("No te quedan pociones en tu inventario");
    scrollBotom();
  }
});
