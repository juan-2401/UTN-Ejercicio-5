const carrito = [];
let totalProductos = 0

const nombre = "";
const email = "";
const password = "";

const datos = "nombre, email, password";

function agregarProducto(nombre, precio) {
    const producto = {
        nombre: nombre,
        precio: precio
    };

    carrito.push(producto);

    totalProductos = totalProductos + 1;
    document.getElementById('total-productos').innerHTML = totalProductos;
}

function mostrarProductos(){
    const contenedorProductos = document.getElementById('contenedor-productos');
    let listado = "";

    carrito.forEach( function (elementoCarrito){
        listado += '<li>' + elementoCarrito.nombre + ' ' +  elementoCarrito.precio + '</li>'
    });

    contenedorProductos.innerHTML = '<ul>' + listado + '</ul>';
}