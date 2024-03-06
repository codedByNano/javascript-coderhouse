let productos = [
  { id: 1, nombre: "Set de dados", precio: 4000, imagen: "set_dados.jpg" },
  {
    id: 2,
    nombre: "D&D Libro del jugador",
    precio: 5000,
    imagen: "handbook.jpeg",
  },
  {
    id: 3,
    nombre: "D&D Guía del amo de la mazmorra",
    precio: 5500,
    imagen: "master.jpg",
  },
  {
    id: 4,
    nombre: "D&D Kit de esenciales",
    precio: 7500,
    imagen: "esenciales.jpg",
  },
  { id: 5, nombre: "Tableros", precio: 3000, imagen: "tableros.jpg" },
];

function bienes(id, nombre, precio, imagen) {
  this.id = id;
  this.nombre = nombre;
  this.precio = precio;
  this.imagen = imagen;
}

function crearHtml(arr) {
  container.innerHTML = "";
  let html;
  for (const producto of arr) {
    const { imagen, nombre, precio, id } = producto;
    html = `<div class="prod">
                <img src="../media/productos/${imagen}" alt="${nombre}">
                <hr>
                <h3>${nombre}</h3>
                <p>Precio: $${precio}</p>
                  <div class="card-action">
                    <button class="btn btn-success" id="${id}">Agregar</button>
                  </div>
              </div>`;
    container.innerHTML = container.innerHTML + html;
  }
}
crearHtml(productos);
