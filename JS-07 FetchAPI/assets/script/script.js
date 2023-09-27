/*

    APIs
        -APIs internas (API DOM, LocalStorage, Drag and Drop): Son aquellas APIs que vienen por default en el navegador.

        -APIs externas (Google Maps, FakeStore API, API Paypal, etc.): Son todas aquellas que tenemos que utilizar de proveedores externos.

        Ejemplo de la licuadora, donde la licuadora es el cliente, el enchufe es la API y el recurso que se solicita es la electricidad.


    Ventajas de utilizar APIs
        - Reestructurar y organizar los sistemas de forma que sean mas sencillos de utilizar
        - Permiten que los sistemas sean mas robustos
        - Reducen los costos de mantenimiento
        - Permiten que los sistemas sean escalables

*/

/*
Asincronía

Por defecto, JS se comporta de una forma sincrona (de arriba hacia abajo, de izquierda a derecha), es decir, utilizamos JS de una forma autobloqueante (si hay un error, lo que está despues del error no se ejecuta).

*/


//Ejemplo de una operación sincrónica
console.log("inicia operación sincrona");

function dosSincronica(){
    console.log("Dos");
}

function unoSincronico(){
    console.log("uno");
    dosSincronica();
    console.log("tres");
}

unoSincronico();
console.log("Finaliza operacion sincrona");

//Los casos donde conviene tener operaciones síncronas son lectura de arrays, uso de algunos metodos de arrays, condicionales, ciclos, ejecución de funciones "normales".



/*
Asincronía

Es la capacidad que tiene JS para poder ejecutar funciones que no dependan de otras. Esto nos ayuda a ejecutar ciertos bloques de código sin tener que esperar a que termine su ejecución, para ejecutar otras lineas de código.

*/


//Operación Asincrona Ejemplo

// console.log("Inicia operación asincronica");
// function dosAsync(){
//     console.log("uno")
//     setTimeout(function(){//setTime para ejecutar esta función despues de 3 segundos
//         console.log("dos");
//     }, 3000)
// }

// function unoAsync(){
//     dosAsync();
//     console.log("tres");
// }


// unoAsync();
// console.log("Finaliza operación asincronica");



/*
Mecanismos para manejar la Asincronía

Para controlar la asincronía en JS, se pude usar alguno de los siguientes mecanismos:

    - callback : La forma más clásica de manejar la asincronía. Se le conoce como llamada de vuelta, basicamente es pasar una funcion como parámetro de otra funcion, y se ejecutan una vez se cumpla la condición esperada

    //Metodo .map de arrays


    - promesas : Son OBJETOS que representan un valor al momento de conectar con el servidor. Como su nombre lo indica, una promesa es algo que no sabemos si se va a cumplir o no, pero al menos necesitamos saber que hacemos si se cumple o si no se cumple.
    La ventaja que tienen las Promesas, es que no se anidan, en una sola función se puede manejar ambas situaciones

    Las promesas tienen 3 estados posibles:
        
        - pending : estado inicial, cuando se crea la promesa. Aqui aun no hay resultados.
        - fullfilled : cuando la operación asincrona se resuuelve con éxito (resolve)
        - rejected : cuando la operación asincrona falla (reject)

*/

//funcion especial para consumir APIs y manejar promesas

//Instrucción de la conexión al servidor
fetch("https://fakestoreapi.com/products/1")

//dos escenarios (se obtiene respuesta o no se obtiene respuesta)
.then(datos => { //cuando la promesa se resuelve, ejecuta esta función
    console.log(datos);
    return datos.json();//convertir la respuesta
})


.catch(error =>{
    console.log("Error, no se encontró el producto");
    console.log(error.message);

    if(error = "Error, no encontramos el producto"){
        console.log("Elige otro producto");
    }
})


/*
Sintaxis del fetch (con promesas)

    
fetch (url a consumir)
    .then (response => response.text()) //maneja la respuesta
    .then (datos => console.log(datos)) //maneja el dato

    .catch(error => console.log(error));
*/

//Se asigna el fetch a una variable
const conexion = fetch("https://fakestoreapi.com/products/1");

//imprime la variable (para ver el objeto completo)
console.log("Este es el objeto promesa: ", conexion);

//referencia al fetch para usar sus métodos
conexion

    //usar el metodo then para manejar la respuesta (se rellena con la respuesta)
    .then(function(resultado){
        console.log("Dentro de esta funcion que maneja la respuesta, encontraras: ", resultado);
        return resultado.json();
    })

    //Se usa el metodo then para manejar el producto (se rellena con la informacion del producto)
    .then(function(producto){
        console.log("Informacion del producto: ", producto);
    })


    //Se usa el metodo catch para manejar el error (se rellena con un error para que la caja no regrese vacía)
    .catch(function (error){
        console.log("Error", error);
    })



    let respuestaServidor = "Felipe, 31, 2, 1";

    //producto como respuesta de un servidor en formato plano (texto)
let productoServidor = {"id":17,"title":"Rain Jacket Women Windbreaker Striped Climbing Raincoats","price":39.99,"description":"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.","category":"women's clothing","image":"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg","rating":{"rate":3.8,"count":679}}


//producto como objeto JSON
let productoJSON = {
    id:17,
    title:"Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price:39.99,
    description:"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category:"women's clothing",
    image:"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating:{
    rate:3.8,
    count:679
    }
}

//Revisar informacion de un objeto con texto plano
console.log(productoServidor.price);

//Revisar informacion de un objeto tipo JSON
console.log(productoJSON.price);






//Objeto JSON que se enviará al servidor
let paciente = {
    nombre: "Felipe",
    edad : 31,
    estatus: "Registrado"
}

console.log(paciente);

//Se necesita convertir a una cadena de texto para que el servidor lo lea

let pacienteStringifeado = JSON.stringify(paciente);
console.log(pacienteStringifeado);

let pacienteServidor = '{"nombre":"Felipe", "Edad":31, "estatus":"Registrado"}';

let pacienteJSON = JSON.parse(pacienteServidor);
console.log(pacienteJSON);


//Si se manda un JSON al servidor, se stringifea
//Si se recibe string del servidor, se parsea


function generarTarjetaProducto(producto){
    //Crear elemento
    createElement(img);
    img.src = producto.image;
}



//Metodo POST para enviar un nuevo producto a la base de datos (BD) de la FakeStoreAPI

fetch('https://fakestoreapi.com/products',{ //Endpoint
            method:"POST", //Especificar el tipo de método
            body:JSON.stringify( //instrucción para serializar el cuerpo de la solicitud (para la interpretación del servidor)
                {
                    title: 'Sopa Maruchan Habanero',
                    price: 13.5,
                    description: 'Deliciosa sopa maruchan de habanero',
                    image: 'https://media.justo.mx/products/041789001956.jpg',
                    category: 'Sopas Instantaneas'
                }
            )
        })
            .then(res=>res.json()) //Metodo para la respuesta (Saber que el producto llega con bien al servidor)
            .then(json=>console.log(json)) // Impresión en consolapara revisar la información

// fetch('https://fakestoreapi.com/products/7',{ //Endpoint
//             method:"PUT", //Especificar el tipo de método
//             body:JSON.stringify(//instrucción para serializar el cuerpo de la solicitud (para la interpretación del servidor)
//                 {
//                     title: 'test product',
//                     price: 13.5,
//                     description: 'lorem ipsum set',
//                     image: 'https://i.pravatar.cc',
//                     category: 'electronic'
//                 }
//             )
//         })
//             .then(res=>res.json())
//             .then(json=>console.log(json))

fetch('https://fakestoreapi.com/products',{ //endpoint
            method:"PUT", //especificar el tipo de metodo
            body:JSON.stringify( //instruccion para serializar el cuerpo de mi solicitud (para la interpretacion del servidor)
                {
                    id: 1,
                    title: inputTitulo.value,
                    price: inputPrecio.value,
                    description: inputDescripcion.value,
                    image: inputImagen.value,
                    category: inputCategoria.value
                }
            )
        })
            .then(res=>res.json()) //metodo para la respuesta (saber que mi producto llego con bien al servidor)
            .then(json=>console.log(json))//impresion en consola para revisar la info