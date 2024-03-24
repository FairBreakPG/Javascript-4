//arreglos de las propiedades con los datos
//alquiler
const data_alquiler = [
    {
        idPropiedad: 1,
        nombreTituloCard: "Departamento en arriendo",
        src: "https://http2.mlstatic.com/D_NQ_NP_673935-MLC75244099155_032024-O.webp",
        descripcion: "N/A",
        ubicacion: "Altos las condes",
        habitaciones: 1,
        baños: 1,
        costo: 23,
        smoke: false,
        pets: false
      },
      {
        idPropiedad: 2,
        nombreTituloCard: "Departamento",
        src: "https://http2.mlstatic.com/D_NQ_NP_649667-MLC75291090715_032024-O.webp",
        descripcion: "",
        ubicacion: "Providencia, estacion central",
        habitaciones: 1,
        baños: 1,
        costo: 12,
        smoke: true,
        pets: true
      },
      {
        idPropiedad: 3,
        nombreTituloCard: "Departemento centrico",
        src: "https://http2.mlstatic.com/D_NQ_NP_671396-MLC75051741992_032024-O.webp",
        descripcion: "n/a",
        ubicacion: "estacion central",
        habitaciones: 1,
        baños: 1,
        costo: 18,
        smoke: true,
        pets: true
      },
      {
        idPropiedad: 4,
        nombreTituloCard: "Home inclusive",
        src: "https://http2.mlstatic.com/D_NQ_NP_930742-MLC74965178064_032024-W.webp",
        descripcion: "n/a",
        ubicacion: "independencia",
        habitaciones: 1,
        baños: 1,
        costo: 100,
        smoke: true,
        pets: true
      },
      {
        idPropiedad: 5,
        nombreTituloCard: "Depto",
        src: "https://http2.mlstatic.com/D_NQ_NP_628590-MLC74778945819_022024-W.webp",
        descripcion: "n/a",
        ubicacion: "Carmen 648",
        habitaciones: 1,
        baños: 1,
        costo: 400,
        smoke: true,
        pets: true
      },
      {
        idPropiedad: 6,
        nombreTituloCard: "Depto",
        src: "https://http2.mlstatic.com/D_NQ_NP_764662-MLC70845488419_082023-W.webp",
        descripcion: "n/a",
        ubicacion: "santiago centro",
        habitaciones: 1,
        baños: 1,
        costo: 300,
        smoke: true,
        pets: true
      },
      {
        idPropiedad: 7,
        nombreTituloCard: "Arriendo economico",
        src: "https://http2.mlstatic.com/D_NQ_NP_972266-MLC72824499838_112023-W.webp",
        descripcion: "n/a",
        ubicacion: "los vilos",
        habitaciones: 1,
        baños: 1,
        costo: 2700,
        smoke: true,
        pets: true
      },
      {
        idPropiedad: 8,
        nombreTituloCard: "",
        src: "https://http2.mlstatic.com/D_NQ_NP_883027-MLC74867274764_032024-W.webp",
        descripcion: "",
        ubicacion: "Alto hospicio",
        habitaciones: 1,
        baños: 1,
        costo: 180,
        smoke: true,
        pets: true
      },
      {
        idPropiedad: 9,
        nombreTituloCard: "",
        src: "https://http2.mlstatic.com/D_NQ_NP_608847-MLC71584002736_092023-W.webp",
        descripcion: "",
        ubicacion: "santiago centro",
        habitaciones: 1,
        baños: 1,
        costo: 300,
        smoke: true,
        pets: true
      },
      {
        idPropiedad: 10,
        nombreTituloCard: "depto en ultimo piso",
        src: "https://http2.mlstatic.com/D_NQ_NP_732284-MLC53102202183_122022-W.webp",
        descripcion: "",
        ubicacion: "Santiago",
        habitaciones: 4,
        baños: 1,
        costo: 500,
        smoke: true,
        pets: false
      }

]


//ventas
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

  let filtradoVentas = document.getElementById('mostrarDivEnVenta');
  let filtradoAlquiler = document.getElementById('mostrarDivAlquiler');

  //nombres de arrays a filtras solo 3 
  //data_alquiler
  //data_propiedades

  let cardVentas = document.getElementById('divVenta');
  let cardAlquiler = document.getElementById('divAlquiler');
  
  // Función para crear el HTML de una propiedad
  function crearPropiedadHTML(propiedad) {
    return `
      <div class="card">
        <img src="${propiedad.src}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${propiedad.nombreTituloCard}</h5>
          <p class="card-text">Descripción: ${propiedad.descripcion}</p>
          <i class="fas fa-map-marker-alt">${propiedad.ubicacion}</i><br>
          <i class="fas fa-bed">${propiedad.habitaciones}</i>   
          <i class="fas fa-bath">${propiedad.baños}</i>  
          <p class="card-text">Costo: $${propiedad.costo}</p>
          <p ${propiedad.smoke ? "class= text-success": "class= text-danger"} >${propiedad.smoke ?  "<i class='fas fa-smoking'></i> Permitido fumar" : " <i class='fas fa-smoking-ban'></i> No se permite fumar"}</p>
          <p ${propiedad.pets ? "class= text-success": "class= text-danger"} >${propiedad.pets ?  "<i class='fas fa-paw'></i> Mascotas permitidas" : "<i class='fas fa-ban'></i> No se permiten mascotas"}</p>
          </div>
      </div>
    `;
  }
  
  // Mostrar solo 3
  data_propiedades.slice(0, 3).forEach(propiedad => {
    let cardVentas = document.getElementById('mostrarDivEnVenta');
    cardVentas.innerHTML += crearPropiedadHTML(propiedad);
  });
  
  // Mostrar solo 3
  data_alquiler.slice(0, 3).forEach(propiedad => {
    let cardAlquiler = document.getElementById('mostrarDivAlquiler');
    cardAlquiler.innerHTML += crearPropiedadHTML(propiedad);
  });