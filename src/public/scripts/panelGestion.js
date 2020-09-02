const baseUrl = 'http://localhost:4500/api/';
const anyo = $('#anyo');
const ubicacion = $('#ubicacion');
const dia = $('#dia');
const mes = $('#mes');
const direccion = $('#direccion');
const ciudad = $('#ciudad');
const enviar = $('#enviar');
const body = $('#body');
const contenedorConciertos = $('#conciertos');
let eliminarConcierto = $('.eliminar');
const mensajes = $('#mensajes');

// const http = new XMLHttpRequest();


// Crear concierto
const crearConcierto = () => {
    const url = baseUrl + 'concerts';
    const concierto = {
        dia: dia.val(),
        mes: mes.val(),
        anyo: anyo.val(),
        ubicacion: ubicacion.val(),
        direccion: direccion.val(),
        ciudad: ciudad.val()
    }

    const http = new XMLHttpRequest();
    
    http.open("POST", url, true);
    http.setRequestHeader('Content-Type', 'application/json');
    http.send(JSON.stringify(concierto));

    dia.val('');
    mes.val('');
    anyo.val('');
    ubicacion.val('');
    direccion.val('');
    ciudad.val('');

}

// Cargar conciertos

const cargarConciertos = () => {
    const url = baseUrl + 'concerts';
    
    const http = new XMLHttpRequest();

  
    http.open('GET', url, true);
    http.send();
    http.addEventListener('load', (event) => {
        let conciertos = '';
        conciertos = JSON.parse(event.target.response);
        pintarConcierto(conciertos);
    });

    
}

// Pintar conciertos

const pintarConcierto = (conciertos) => {
    body.html('');
    
    for (let concierto of conciertos) {

        body.append(`<div class="col-12 container-card mt-4">
            <div class="row">
              <div class="col-12 col-md-2 side-card">
                <div class="row">
                  <div class="col-4 col-md-12 side-card-color ">
                    <h3 class="d-flex justify-content-center">${concierto.dia}</h3>
                  </div>
                  <div class="col-4 col-md-12 side-card-color ">
                    <h3 class="d-flex justify-content-center">${concierto.mes}</h3>
                  </div>
                  <div class="col-4 col-md-12 side-card-color ">
                    <h3 class="d-flex justify-content-center">${concierto.anyo}</h3>
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-10">
                <div class="row">
                   
                        <div class="col-12 col-md-4 d-flex justify-content-center align-self-center my-3">
                            <h2>${concierto.ciudad}</h2>
                        </div>
                        <div class="col-12 col-md-4 d-flex justify-content-center align-self-center my-3">
                            <h3>${concierto.direccion}</h3>
                        </div>
                        <div class="col-12 col-md-4 d-flex justify-content-center align-self-center">
                            
                            <button class="btn btn-outline-danger eliminar" data-id="${concierto._id}"  my-3">Eliminar</button>
                        
                    </div>
                </div>

              </div>
            </div>
          </div>`);
        
    }

    eliminarConcierto = $('.eliminar');
    eliminarConcierto.on('click', eliminarConciertoFunction);
}

// Eliminar concierto

const eliminarConciertoFunction = (event) => {
    let id = event.target.dataset.id;
    const url = baseUrl + 'concerts/delete/' + id;
    console.log(url)
    
    const http = new XMLHttpRequest();

    http.open("POST", url, true);
    http.setRequestHeader('Content-Type', 'application/json');
    http.send();
    
    
    
    cargarConciertos();
}

// *************************             MENSAJES                        **********************************

// Pedir mensajes

const pedirMensajes = () => {
  const url = baseUrl + '/messages'
  body.html('');

  const http = new XMLHttpRequest();

  http.open('GET', url, true);
  http.send();
  http.addEventListener('load', (event) => {
    const mensajes = JSON.parse(event.target.response);

    
    pintarMensajes(mensajes);
  })
}


// Pintar mensajes 

const pintarMensajes = (mensajes) => {

  if(mensajes == '') body.append('<h3 class="mt-5" >No hay mensajes</h3>')
  body.append('');
  for (let mensaje of mensajes) {
    
    body.append(`  <div class="col-12 mb-5 mt-5 border-bottom">
        <div class="row">
            <div class="col-6">
                <h6><strong>Nombre: </strong> ${mensaje.nombre}</h6>
            </div>
            <div class="col-6">
                <h6><strong>Email: </strong> ${mensaje.email}</h6>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
            <h6><strong>Asunto: </strong> ${mensaje.asunto}</h6>
            </div>
            <div class="col-12">
                <h6>Mensaje:</h6>
                <p>${mensaje.mensaje}</p>
            </div>
        </div>

        <div class="mb-3" ><button class="btn btn-outline-danger eliminarMensaje" data-id="${mensaje._id}"> X </button></div>
        
        

    </div>`);
  }

  const eliminarMensaje = $('.eliminarMensaje');
  eliminarMensaje.on('click', eliminarMensajeFuncion);

}


// eliminar Mensajes

const eliminarMensajeFuncion = (event) => {


  const id = event.target.dataset.id;
  const url = baseUrl + 'messages/' + id
  
  const http = new XMLHttpRequest();

  http.open('POST', url, true)
  http.send();

  pedirMensajes();
}


mensajes.on('click', pedirMensajes);
contenedorConciertos.on('click', cargarConciertos);
enviar.on('click', crearConcierto);
cargarConciertos();