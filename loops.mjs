// FOR clasico
// se usa cuando se sabe cuantas veces se va a repetir el bucle
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// WHILE clasico
// se ejecuta mientras la condicion sea verdadera
let contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;
}

// DO WHILE clasico
// se ejecuta al menos una vez y luego verifica la condicion
let numero = 0;
do {
    console.log(numero);
    numero++;
} while (numero < 5);

// FOR OF
// se usa para iterar sobre elementos de un array o una colección iterable
const frutas = ["Manzana", "Banana", "Pera"];
for (const fruta of frutas) {
    console.log(fruta);
}

// FOR IN
// se usa para iterar sobre las propiedades de un objeto
const persona = { nombre: "Juan", edad: 30 };
for (const propiedad in persona) {
    console.log(propiedad, persona[propiedad]);
}

// BONUS: some()
// se usa para verificar si al menos un elemento de un array cumple con una condición
const numeros = [1, 2, 3, 4];
const hayMayor = numeros.some(n => n > 3);
console.log(hayMayor); // true

// BONUS: every()
// se usa para verificar si todos los elementos de un array cumplen con una condición
const todosPositivos = numeros.every(n => n > 0);
console.log(todosPositivos); // true

