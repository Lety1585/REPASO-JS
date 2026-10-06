// literales de objetos
const persona = {
  nombre: "Juan",
  edad: 30,  
  estudiante: true,
  materias: ["Matemáticas", "Física", "Química"],
};

persona.direccion = {
  calle: "Calle Falsa",
  ciudad: "Madrid"
};

// acceder a las propiedades del objeto
console.log(persona.nombre); // "Juan"
console.log(persona.edad); // 30
console.log(persona.estudiante); // true

// agregar una nueva propiedad al objeto
persona.estudiante = true;
persona.apellido = "Pérez";
console.log(persona); // { nombre: "Juan", edad: 30, estudiante: true, apellido: "Pérez" }

//modificar una propiedad existente del objeto
persona.edad = 31;
console.log(persona); // { nombre: "Juan", edad: 31, estudiante: true, apellido: "Pérez" }

// eliminar una propiedad del objeto
delete persona.estudiante;
console.log(persona); // { nombre: "Juan", edad: 31, apellido: "Pérez" }

//keys devuelve un array con las propiedades del objeto
const propiedades = Object.keys(persona);
console.log(propiedades); // ["nombre", "edad", "apellido"]

//values devuelve un array con los valores de las propiedades del objeto
const valores = Object.values(persona);
console.log(valores); // ["Juan", 31, "Pérez"]

//entries devuelve un array con los pares [propiedad, valor] del objeto
const entradas = Object.entries(persona);
console.log(entradas); // [["nombre", "Juan"], ["edad", 31], ["apellido", "Pérez"]]

// destructuración de objetos
const { nombre, edad } = persona;
console.log(nombre); // "Juan" 

// spread operator para copiar un objeto
const persona2 = { ...persona, ciudad: "Madrid" };
console.log(persona2); // { nombre: "Juan", edad: 31, apellido: "Pérez", ciudad: "Madrid" }

// metoddos de objetos
const calculator = {
  sumar: (a, b) => a + b,
  restar: (a, b) => a - b,
  multiplicar: (a, b) => a * b,
  dividir: (a, b) => a / b,
};
console.log(calculator.sumar(2, 3)); // 5
console.log(calculator.restar(5, 2)); // 3
console.log(calculator.multiplicar(3, 4)); // 12
console.log(calculator.dividir(10, 2)); // 5

// objetos funcionales, casi declarados como clases, pero sin la palabra reservada class. Se pueden crear instancias de objetos a partir de una función constructora.
function crearPersona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

const persona3 = new crearPersona("Ana", 25);
const persona4 = new crearPersona("Luis", 28);
persona3.saludar(); // "Hola, mi nombre es Ana y tengo 25 años."
persona4.saludar(); // "Hola, mi nombre es Luis y tengo 28 años."

// En un metodo de objeto, this hace referencia al objeto que contiene el método. 
// Aqui this se utilliza dentro del metodo de un objeto literal para hacer referencia a las propiedades del objeto.
const heroe = {
  nombre: "Superman",
  universo: "DC Comics",
  poderes: ["Super fuerza", "Vuelo", "Visión de rayos X"],
  hit: 128,
  vitalidad: 100,
  bajaVitalidad: function(danio) {
    return this.vitalidad - danio;
  }
}
console.log(heroe.bajaVitalidad(20)); // 80
// En una función normal, this es undefined en entornos fuera del navegador (como Node.js) y hace referencia al objeto global window en entornos de navegador.
function sayHi() {
  console.log(`Hola, mi nombre es ${this}`);
}

// En una función flecha, this hace conserva el valor del contexto en el que se definió la función, no al objeto que la contiene.
const heroe2 = {
  nombre: "Superman",
  universo: "DC Comics",
  poderes: ["Super fuerza", "Vuelo", "Visión de rayos X"],
  hit: 128,
  vitalidad: 100,
  bajaVitalidad: (danio) => this.vitalidad - danio
}
console.log(heroe2.bajaVitalidad(20)); // undefined, porque this no hace referencia al objeto heroe2, sino al contexto en el que se definió la función flecha (en este caso, el objeto global). Para que this haga referencia al objeto heroe2, se debe utilizar una función normal en lugar de una función flecha.