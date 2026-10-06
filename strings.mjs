const texto = "Hola Mundo"; 

//  length: Devuelve la longitud del string
console.log(texto.length); // Salida: 10

//  toUpperCase(): Convierte el string a mayúsculas //  toLowerCase(): Convierte el string a minúsculas //  toLowerCase(): Convierte el string a minúsculas
console.log(texto.toUpperCase()); // Salida: "HOLA MUNDO"
console.log(texto.toLowerCase()); // Salida: "hola mundo"

//includes(): Verifica si un string contiene una subcadena específica
console.log(texto.includes("Hola")); // Salida: true
console.log(texto.includes("Adiós")); // Salida: false

// indexOf(): Devuelve el índice de la primera aparición de una subcadena específica
console.log(texto.indexOf("Mundo")); // Salida: 5
console.log(texto.indexOf("mundo")); // Salida: -1

// slice(): Extrae una sección de un string y devuelve una nueva cadena
console.log(texto.slice(0, 4)); // Salida: "Hola"  
console.log(texto.slice(5)); // Salida: "Mundo"

// replace(): Reemplaza una subcadena específica por otra
console.log(texto.replace("Mundo", "Amigo")); // Salida: "Hola Amigo"

// trim(): Elimina los espacios en blanco al inicio y al final del string
const textoConEspacios = "   Hola Mundo   ";
console.log(textoConEspacios.trim()); // Salida: "Hola Mundo"

// split(): Divide un string en un array de subcadenas
const palabras = texto.split(" ");
console.log(palabras); // Salida: ["Hola", "Mundo"]