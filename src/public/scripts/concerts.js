const url = "http://localhost:4500/api/concerts";
const mainConcert = $('#main-concert');
let concerts = {};



const cargarConciertos = () => {

    $.getJSON(url, (result) => {
        concerts = result;
        pintarConcierto(concerts);
    });

}



const pintarConcierto = (conciertos) => {
    console.log(conciertos);

    for (let concierto of conciertos) {

        mainConcert.append(`<div class="col-12 container-card mt-4">
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
                            <button class="btn btn-outline-warning my-3">Cómo llegar</button>
                        
                    </div>
                </div>

              </div>
            </div>
          </div>`)
    }

}




cargarConciertos();