class Usuario {
    constructor(nombre, email, password) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }
    login(inputEmail, password) {
        return inputEmail === this.email && password === this.password
        ? "Login exitoso"
        : "Email o contraseña incorrectos";
    }
}
console.log("Clase Usuario:");
const usuario1 = new Usuario("Juan", "juan@example.com", "password123");
console.log(usuario1.login("juan@example.com", "password123")); // "Login exitoso"
console.log(usuario1.login("juan@example.com", "wrongpassword")); // "Email o contraseña incorrectos"

class Comprador extends Usuario {
    constructor(nombre, email, password, direccion, compras, balance) {
        super(nombre, email, password);
        this.direccion = direccion;
        this.compras = compras;
        this.balance = balance;
    }
    hacerCompra(valor) {
        if (valor <= this.balance) {
            this.compras += 1;
            this.balance -= valor;
            return `Compra realizada. Total de compras: ${this.compras}, Saldo restante: ${this.balance}`;
        } else {
            return "Saldo insuficiente";
        }
    }
}
console.log("Clase Comprador:");
const comprador1 = new Comprador("Ana", "ana@example.com", "password123", "Calle Principal 123", 0, 1000);
console.log(comprador1.hacerCompra(200)); // "Compra realizada. Total de compras: 1, Saldo restante: 800"
console.log(comprador1.hacerCompra(900)); // "Saldo insuficiente"

class Vendedor extends Usuario {
    constructor(nombre, email, password, tienda, ventas, ganancias) {
        super(nombre, email, password);
        this.tienda = tienda;
        this.ventas = ventas;
        this.ganancias = ganancias;
    }

    nuevaVenta(valor) {
        this.ventas += 1;
        this.ganancias += valor;
        return `Nueva venta realizada. Total de ventas: ${this.ventas}, Ganancias: ${this.ganancias}`;
    }
}
console.log("Clase Vendedor:");
const vendedor1 = new Vendedor("María", "maria@example.com", "password123", "Tienda A", 0, 0);
console.log(vendedor1.nuevaVenta(500)); // "Nueva venta realizada. Total de ventas: 1, Ganancias: 500"
