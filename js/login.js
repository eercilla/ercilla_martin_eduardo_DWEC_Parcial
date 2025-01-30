$( document ).ready(function() {




let usersJSONPath = 'data/users.json';

function cargarJSONEnLocalStorage() {
    fetch(usersJSONPath)
        .then(response => {
            if (!response.ok) { 
                throw new Error(`No se pudo cargar el archivo JSON desde ${usersJSONPath}`);
            } 
            return response.json(); // Convertir la respuesta a JSON
        })
        .then(data => {
            localStorage.setItem("usuarios", JSON.stringify(data)); // Guardar en Local Storage
        })
        .catch(error => {
        });
}

// Función que valida el usuario y la contraseña
function validarCredenciales() {

    let users = localStorage.getItem("usuarios");
    

    let userObj = JSON.parse(users);


    let nombre = $("#username");
    let pass = $("#password");
    let msg = $("#error-message");


    var encontrado = userObj.usuarios.find( persona => persona.username== nombre.val() && persona.password==pass.val());
    
    if(encontrado){
        location.href="html/juego.html";
    } else{
        msg.css("display","block");
    }


}
cargarJSONEnLocalStorage();

var but1 = $("#login-button");

but1.click(function(){
    validarCredenciales();
})



});