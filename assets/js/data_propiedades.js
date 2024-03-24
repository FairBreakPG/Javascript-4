const data_propiedades = [
  {
    idPropiedad: 1,
    nombreTituloCard: "Portal del Sur X",
    src: "https://http2.mlstatic.com/D_NQ_NP_682891-MLC71900754544_092023-W.webp",
    descripcion: "Casa",
    ubicacion: "Calle diagonal laguna 1413, Puerto Montt",
    habitaciones: 3,
    baños: 2,
    costo: 2700,
    smoke: true,
    pets: true
  },
  {
    idPropiedad: 2,
    nombreTituloCard: "Brisas de chinquihue II",
    src: "https://http2.mlstatic.com/D_NQ_NP_880775-MLC54738983949_032023-W.webp",
    descripcion: "Casa",
    ubicacion: "Luis Tristan 241241",
    habitaciones: 3,
    baños: 1,
    costo: 1900,
    smoke: false,
    pets: false,
    precio: 5000,
  },
  {
    idPropiedad: 3,
    nombreTituloCard: "Costa Chinquio 7",
    src: "https://http2.mlstatic.com/D_NQ_NP_833601-MLC54739446988_032023-W.webp",
    descripcion: "Casa",
    ubicacion: "Camino a chinquihue km 8",
    habitaciones: 3,
    baños: 2,
    costo: 1995,
    smoke: false,
    pets: true,
    precio: 1995,
  },
  {
    idPropiedad: 4,
    nombreTituloCard: "Parque fundadores",
    src: "https://http2.mlstatic.com/D_NQ_NP_928217-MLC73995909886_012024-W.webp",
    descripcion: "Casa",
    ubicacion: "Camino a la vara",
    habitaciones: 3,
    baños: 2,
    costo: 25300,
    smoke: false,
    pets: true
  },
  {
    idPropiedad: 5,
    nombreTituloCard: "Mirado de volcanes 5",
    src: "https://http2.mlstatic.com/D_NQ_NP_626274-MLC51989869641_102022-W.webp",
    descripcion: "Este apartamento de luji esta ubicado ....",
    ubicacion: "Av Alto bonito",
    habitaciones: 3,
    baños: 1,
    costo: 2200,
    smoke: false,
    pets: true
  },
  {
    idPropiedad: 6,
    nombreTituloCard: "Casa en parcela",
    src: "https://http2.mlstatic.com/D_NQ_NP_797548-MLC75193057511_032024-W.webp",
    descripcion: "Parcela",
    ubicacion: "Vía lactea 56, Puerto Montt",
    habitaciones: 7,
    baños: 6,
    costo: 27000,
    smoke: false,
    pets: true
  },
  {
    idPropiedad: 7,
    nombreTituloCard: "Casa en valle volcanes",
    src: "https://http2.mlstatic.com/D_NQ_NP_999490-MLC73437082995_122023-W.webp",
    descripcion: "Casa con 100% de financiamiento",
    ubicacion: "Lagunas del Laja",
    habitaciones: 3,
    baños: 2,
    costo: 0,
    smoke: false,
    pets: true
  },
  {
    idPropiedad: 8,
    nombreTituloCard: "Sector 2 esteros",
    src: "https://http2.mlstatic.com/D_NQ_NP_804113-MLC75196426659_032024-W.webp",
    descripcion: "Casa",
    ubicacion: "Pasaje Nido",
    habitaciones: 4,
    baños: 3,
    costo: 0,
    smoke: false,
    pets: true
  },
  {
    idPropiedad: 9,
    nombreTituloCard: "Sector Alerce",
    src: "https://http2.mlstatic.com/D_NQ_NP_619573-MLC75095910338_032024-W.webp",
    descripcion: "Casa",
    ubicacion: "La paloma",
    habitaciones: 5,
    baños: 2,
    costo: 12000,
    smoke: false,
    pets: true
  },
  {
    idPropiedad: 10,
    nombreTituloCard: "Gran propiedad",
    src: "https://http2.mlstatic.com/D_NQ_NP_900555-MLC75064073714_032024-W.webp",
    descripcion: "Este apartamento de luji esta ubicado ....",
    ubicacion: "123, luxury lane",
    habitaciones: 3,
    baños: 2,
    costo: 174999999,
    smoke: false,
    pets: true
  },
];

let cards = document.getElementById('mostrarCardJs')

data_propiedades.forEach(data_propiedades => {
    console.log("array",data_propiedades);
    mostrarCardJs.innerHTML+= 
            `<div class="card">
            <img src="${data_propiedades.src}" alt="${data_propiedades.nombreTituloCard}" class="imagen card-img-top">
            <div class="card-body" > 
                <h3 class="card-title">${data_propiedades.nombreTituloCard}</h3>
                <p class="card-text">${data_propiedades.descripcion}</p>
                <i class="fas fa-map-marker-alt">${data_propiedades.ubicacion}</i><br>
                <i class="fas fa-bed">${data_propiedades.habitaciones}</i>   
                <i class="fas fa-bath">${data_propiedades.baños}</i>  
                <p>$ ${data_propiedades.costo}</p>
                <p ${data_propiedades.smoke ? "class= text-success": "class= text-danger"} >${data_propiedades.smoke ?  "<i class='fas fa-smoking'></i> Permitido fumar" : " <i class='fas fa-smoking-ban'></i> No se permite fumar"}</p>
                <p ${data_propiedades.pets ? "class= text-success": "class= text-danger"} >${data_propiedades.pets ?  "<i class='fas fa-paw'></i> Mascotas permitidas" : "<i class='fas fa-ban'></i> No se permiten mascotas"}</p>
            </div>
        </div>`
    });
