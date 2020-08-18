let entrar = $('#entrar');
const password = $('#password');
const main = $('#main');



const enviarAuth = () => {

    const url = 'http://localhost:4500/admin';
    
    // console.log(header);
    $.get({ url: url, headers: { Authorization: password.val()} }  , (res) => {
        main.html(res);
    })

}


entrar.on('click', ()=> {
    enviarAuth();

})




