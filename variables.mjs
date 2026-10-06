// let - se puede reasignar
// const - no se puede reasignar

let nombre = "Juan";
nombre = "Pedro";

const apellido = "Gomez";
//apellido = "Perez"; // Esto daría un error

console.log(nombre, apellido);

//Tipos de datos
const texto = "Hola mundo"; //  string
const numero = 42; // number
const booleano = true; // boolean
const nulo = null; // null
const indefinido = undefined; // undefined
const decimal = 3.14; // number

// Arreglos
const frutas = ["manzana", "banana", "naranja"]; // array
console.log(frutas[0]); // manzana
console.log(frutas[1]); // banana
console.log(frutas[2]); // naranja 

// Objetos
const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid"
};
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.ciudad);

//typeof - nos permite saber el tipo de dato de una variable
console.log(typeof texto, typeof numero, typeof booleano, typeof nulo, typeof indefinido, typeof decimal)

console.log(texto, numero, booleano, nulo, indefinido, decimal);
console.log(frutas);
console.log(persona);