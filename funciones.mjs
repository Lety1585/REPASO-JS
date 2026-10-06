// funciones básicas

export const sumar = (a, b) => a + b;

export const restar = (a, b) => {
    return a - b;
}

export const multiplicar = function(a, b) {
    return a * b;
}

export const dividir = (a, b) => {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}

const resultado = sumar(5, 3);
console.log(`El resultado de la suma es: ${resultado}`);

console.log(restar(10, 4)); // 6

console.log(multiplicar(6, 7)); // 42
console.log(dividir(20, 5)); // 4
//console.log(dividir(10, 0)); // Error: No se puede dividir por cero

//promesas

const promesa = new Promise((resolve, reject) => {
    const exito = true; // Cambia esto a false para simular un error
    if (exito) {
        resolve("La operación fue exitosa");
    } else {
        reject("Hubo un error en la operación");
    }       
});

promesa
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.error(error);
    }).finally(() => {
        console.log("La promesa ha finalizado");
    });

export const sumaAsync = (a, b) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    });
};

function calculadora(a, b, operacion) {
    return operacion(a, b);
}
console.log(calculadora(2, 3, sumar)); // 5