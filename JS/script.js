const validemail = "admin@admin.com";
const validpassword = 123456;


function login(event){
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email == validemail && password == validpassword) {
        window.location.href = 'inicio.html';
    } else {
        document.getElementById('error').innerHTML = "<span>Usuario o Contraseña incorrectos</span>";
    }
}