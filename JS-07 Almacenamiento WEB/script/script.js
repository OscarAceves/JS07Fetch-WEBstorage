/*

API de almacenamiento web


Nos permite almacenar informacion en nuestro navegador, de dos formas:

    - local (persistencia de los datos)
    - sesion (los datos son volatiles)

    
Tanto el almacenamiento local como el de sesion, proporcionan un area privada para tratar sus datos, esto quiere decir que otros sitios web no pueden acceder a los datos que almacenamos.


*/


/*

Almacenamiento Local (localStorage)


La informacion que pongamos en un almacenamiento local se guarda indefinidiamente hasta que sea eliminada por codigo o borrada del navegador.

Casos de uso: articulos de un carrito de compras, guardamos un perfil de configuracion, historial de uso.


*/


//Guardando primer dato en localStorage

//localStorage.setItem(key, value)

localStorage.setItem("Nombre", "Oscar");
localStorage.setItem("Apellido", "Aceves");
localStorage.setItem("Edad", "31");


//Guardando un carrito de compras
let carritoComprasFelipe = ["sabritones", "Cocacola", "Chicles", "Tortillas"];

localStorage.setItem("Carrito de compras", carritoComprasFelipe);

//Obtener la información almacenada en mi localStorage

//localStorage.getItem(key);

let apellido = localStorage.getItem("Apellido");
console.log(apellido);

let carrito = localStorage.getItem("Carrito de compras");
console.log(carrito);

//borrar un elemento del localStorage
//localStorage.removeItem(key)
localStorage.removeItem("Carrito de compras");

//Conocer el largo o longitud del localStorage
//localStorage.lenght

let longitudLocalStorage = localStorage.length;
console.log(longitudLocalStorage);


//Para modificar datos con set
localStorage.setItem("Apellido", "Lopez");