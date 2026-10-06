const precios = [120, 80, 250, 300, 200, 150];
const productos = ['Producto A', 'Producto B', 'Producto C', 'Producto D', 'Producto E', 'Producto F'];

const precios_iva = precios.map(precio => precio * 1.21); // Aplicando un 21% de IVA
precios_iva.forEach((precios_iva, index) => console.log(`El precio total con impuestos es: $${(precios_iva)} para ${productos[index]}`)); 

