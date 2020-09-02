const nombre = $('#nombre');
const email = $('#email');
const asunto = $('#asunto');
const mensaje = $('#mensaje');
const submit = $('#submit');
const btsAlert = $('#alert');




const comprobarMensaje = () => {
  
    if (nombre.val() === '' || email.val() === '' || asunto.val() === '' || mensaje.val() === '') {
        errorMensaje();
        
    } else {
        enviarMesnaje();
    }
}



const enviarMesnaje = () => {
    
    btsAlert.html('');
    const url = 'http://localhost:4500/api/messages/';
    const fecha = new Date();

    const nuevoMensaje = {
        mensaje: mensaje.val(),
        nombre: nombre.val(),
        email: email.val(),
        asunto: asunto.val(),
        fecha: fecha
    }
    
    console.log(nuevoMensaje);
    const http = new XMLHttpRequest();

    http.open("POST", url, true);
    http.setRequestHeader('Content-Type', 'application/json');
    http.send(JSON.stringify(nuevoMensaje));

    mensaje.val(''); 
    nombre.val('');
    email.val('');
    asunto.val('');
    
    btsAlert.append('<div class="alert alert-success alert-dismissible fade show" role="alert">¡Tu mensaje ha sido enviado con éxito! </div>');

}



const errorMensaje = () => {
    btsAlert.html('');
    btsAlert.append('<div class="alert alert-danger alert-dismissible fade show" role="alert">Todos los campos son obligatorios! Por favor rellene todos los campos. </div>');
} 






submit.on('click', comprobarMensaje);