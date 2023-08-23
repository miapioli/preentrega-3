const productos = [
  {
    id: 1,
    producto: "Tarjeta Gráfica",
    categoria: "Componentes",
    precio: 399.99,
    marca: "Nvidia",
    imagen: "img/tarjeta_grafica.jpg",
    descripcion: "Potente tarjeta gráfica para gaming de última generación.",
  },
  {
    id: 2,
    producto: "Monitor",
    categoria: "Periféricos",
    precio: 249.99,
    marca: "Dell",
    imagen: "img/monitor.jpg",
    descripcion: "Monitor de alta resolución y excelente calidad de color.",
  },
  {
    id: 3,
    producto: "SSD",
    categoria: "Almacenamiento",
    precio: 89.99,
    marca: "Samsung",
    imagen: "img/ssd.jpg",
    descripcion: "Unidad de estado sólido de gran capacidad y velocidad.",
  },
  {
    id: 4,
    producto: "Teclado Mecánico",
    categoria: "Periféricos",
    precio: 129.99,
    marca: "Corsair",
    imagen: null,
    descripcion: "Teclado mecánico con retroiluminación RGB personalizable.",
  },
  {
    id: 5,
    producto: "Procesador",
    categoria: "Componentes",
    precio: 299.99,
    marca: "Intel",
    imagen: "img/procesador.jpg",
    descripcion: null,
  },
  {
    id: 6,
    producto: "Mouse Inalámbrico",
    categoria: "Periféricos",
    precio: 39.99,
    marca: "Logitech",
    imagen: "img/mouse.jpg",
    descripcion: "Mouse ergonómico inalámbrico con precisión óptica.",
  },
  {
    id: 7,
    producto: "Memoria RAM",
    categoria: "Componentes",
    precio: 79.99,
    marca: "Crucial",
    imagen: "img/ram.jpg",
    descripcion:
      "Módulo de memoria RAM de alta velocidad para mejorar el rendimiento.",
  },
  {
    id: 8,
    producto: "Disco Duro Externo",
    categoria: "Almacenamiento",
    precio: 119.99,
    marca: "Western Digital",
    imagen: "img/disco_externo.jpg",
    descripcion:
      "Disco duro externo de gran capacidad para almacenar tus archivos.",
  },
  {
    id: 9,
    producto: "Fuente de Alimentación",
    categoria: "Componentes",
    precio: 89.99,
    marca: "EVGA",
    imagen: null,
    descripcion: "Fuente de alimentación eficiente y de alta potencia.",
  },
  {
    id: 10,
    producto: "Auriculares Gaming",
    categoria: "Audio",
    precio: 69.99,
    marca: "Razer",
    imagen: "img/auriculares.jpg",
    descripcion:
      "Auriculares gaming con sonido envolvente y micrófono retráctil.",
  },
];

const generarTarjetas = (productos) => {
  const contenedor = document.getElementById("productos-container");

  const tarjetasHTML = productos.reduce((acumulador, producto) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-producto");

    const nombre = document.createElement("h2");
    nombre.textContent = producto.producto;

    const precio = document.createElement("p");
    precio.textContent = `Precio: $${producto.precio}`;

    const descripcion = document.createElement("p");
    descripcion.textContent =
      producto.descripcion || "Descripción no disponible";

    const botonAgregar = document.createElement("button");
    botonAgregar.textContent = "Agregar al Carrito";

    const imagen = document.createElement("img");
    if (producto.imagen) {
      imagen.src = producto.imagen;
      imagen.alt = producto.producto;
    } else {
      imagen.src = "img/imagen_por_defecto.jpg";
      imagen.alt = "Imagen no disponible";
    }
    botonAgregar.addEventListener("click", () => {
      const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      carrito.push(producto);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      alert("Producto agregado al carrito.");
    });

    tarjeta.appendChild(nombre);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(descripcion);
    tarjeta.appendChild(imagen);
    tarjeta.appendChild(botonAgregar);

    acumulador.appendChild(tarjeta);
    return acumulador;
  }, document.createElement("div"));

  contenedor.innerHTML = "";
  contenedor.appendChild(tarjetasHTML);
};

generarTarjetas(productos);
