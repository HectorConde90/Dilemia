const baseUrl = 'http://localhost:4500/api/';
const anyo = $('#anyo');
const ubicacion = $('#ubicacion');
const dia = $('#dia');
const mes = $('#mes');
const direccion = $('#direccion');
const ciudad = $('#ciudad');
const enviar = $('#enviar');
const body = $('#body');




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



enviar.on('click', crearConcierto);