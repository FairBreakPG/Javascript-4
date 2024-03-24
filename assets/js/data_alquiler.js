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

let cards = document.getElementById('divAlquiler');

data_alquiler.forEach(data_alquiler => {
    console.log("array",data_alquiler);
    divAlquiler.innerHTML+= 
            `<div class="card">
            <img src="${data_alquiler.src}" alt="${data_alquiler.nombreTituloCard}" class="imagen card-img-top">
            <div class="card-body" > 
                <h3 class="card-title">${data_alquiler.nombreTituloCard}</h3>
                <p class="card-text">${data_alquiler.descripcion}</p>
                <i class="fas fa-map-marker-alt">${data_alquiler.ubicacion}</i><br>
                <i class="fas fa-bed">${data_alquiler.habitaciones}</i>   
                <i class="fas fa-bath">${data_alquiler.baños}</i>  
                <p>$ ${data_alquiler.costo}</p>
                <p ${data_alquiler.smoke ? "class= text-success": "class= text-danger"} >${data_alquiler.smoke ?  "<i class='fas fa-smoking'></i> Permitido fumar" : " <i class='fas fa-smoking-ban'></i> No se permite fumar"}</p>
                <p ${data_alquiler.pets ? "class= text-success": "class= text-danger"} >${data_alquiler.pets ?  "<i class='fas fa-paw'></i> Mascotas permitidas" : "<i class='fas fa-ban'></i> No se permiten mascotas"}</p>
            </div>
        </div>`
    });