const frutas = ['manzana', 'banana', 'higo', 'cereza', 'durazno', 'kiwi'];

// push agrega un elemento al final del array
frutas.push('pera');
console.log(frutas); // ['manzana', 'banana', 'higo', 'cereza', 'durazno', 'kiwi', 'pera']
console.log(frutas[2]); // 'higo'
console.log(frutas.at(4)); // 'durazno'
console.log(frutas.at(-4)); // 'cereza'

// pop elimina el último elemento del array
const ultimaFruta = frutas.pop();
console.log(ultimaFruta); // 'pera'
console.log(frutas); // ['manzana', 'banana', 'higo', 'cereza', 'durazno', 'kiwi']

// shift elimina el primer elemento del array 
const primeraFruta = frutas.shift();
console.log(primeraFruta); // 'manzana'
console.log(frutas); // ['banana', 'higo', 'cereza', 'durazno', 'kiwi']

// unshift agrega un elemento al inicio del array
frutas.unshift('frutilla');
console.log(frutas); // ['frutilla', 'banana', 'higo', 'cereza', 'durazno', 'kiwi']    

// map crea un nuevo array con los resultados de la función aplicada a cada elemento
const frutasEnMayusculas = frutas.map(fruta => fruta.toUpperCase());
console.log(frutasEnMayusculas); // ['FRUTILLA', 'BANANA', 'CEREZA', 'DURAZNO', 'KIWI']

// filter crea un nuevo array con los elementos que cumplen la condición
const frutasConA = frutas.filter(fruta => fruta.includes('i'));
console.log(frutasConA); // ['frutilla', 'higo', 'kiwi']

// find devuelve el primer elemento que cumple la condición
const frutaConH = frutas.find(fruta => fruta.includes('a'));
console.log(frutaConH); // 'frutilla'

// indexOf devuelve el índice del primer elemento que cumple la condición
const indiceDeHigo = frutas.indexOf('higo');
console.log(indiceDeHigo); // 2

// length devuelve la cantidad de elementos en el array
console.log(frutas.length); // 6

// reduce aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlo a un único valor
const frutasConcatenadas = frutas.reduce((acumulador, fruta) => acumulador + ', ' + fruta);
console.log(frutasConcatenadas); // 'frutilla, banana, higo, cereza, durazno, kiwi'

// forEach ejecuta una función para cada elemento del array
frutas.forEach(fruta => console.log(fruta)); 
// frutilla
// banana
// higo
// cereza
// durazno
// kiwi

//for...of permite iterar sobre los elementos de un array
for (let fruta of frutas) {
    console.log(fruta);
}

// join une todos los elementos del array en un string, separados por el separador especificado
const frutasUnidas = frutas.join(' - ');
console.log(frutasUnidas); // 'frutilla - banana - higo - cereza - durazno - kiwi'

// slice devuelve una copia de una parte del array dentro de un nuevo array
const frutasSlice = frutas.slice(1, 4); 
console.log(frutasSlice); // ['banana', 'higo', 'cereza']

// splice cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
frutas.splice(2, 1, 'naranja', 'mandarina');
console.log(frutas); // ['frutilla', 'banana', 'naranja', 'mandarina', 'cereza', 'durazno', 'kiwi']
frutas.splice(2, 1, 'higo', '');
console.log(frutas); // ['frutilla', 'banana', 'higo', 'cereza', 'durazno', 'kiwi']

// copyWithin copia una parte del array dentro del mismo array
frutas.copyWithin(1, 3, 5);
console.log(frutas); // ['frutilla', 'durazno', 'kiwi', 'cereza', 'durazno', 'kiwi']

//  fill cambia todos los elementos del array por un valor estático
frutas.fill('sandía', 1, 4);
console.log(frutas); // ['frutilla', 'sandía', 'sandía', 'sandía', 'durazno', 'kiwi']