import {    
    sumar,
    restar,
    multiplicar,
    dividir,
    sumaAsync
} from './funciones.mjs';

console.log("Suma:", sumar(5, 3));
console.log("Resta:", restar(5, 3));
console.log("Multiplicación:", multiplicar(5, 3));
console.log("División:", dividir(5, 3));

// uso de promesa
sumaAsync(10, 5).then((resultado) => {
    console.log("Suma asíncrona:", resultado);
});

const resultadoPromesa = sumaAsync(20, 10);
console.log("Resultado de la promesa:", resultadoPromesa);

const resultadoPromesaAwait = async () => {
    const resultado = await sumaAsync(15, 5);
    console.log("Resultado de la promesa con await:", resultado);
}

resultadoPromesaAwait();