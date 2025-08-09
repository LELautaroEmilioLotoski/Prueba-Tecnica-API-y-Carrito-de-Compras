const productosData = [
  { name: "Producto 1", price: 100 },
  { name: "Producto 2", price: 200 },
  { name: "Producto 3", price: 150 },
  { name: "Producto 4", price: 350 },
  { name: "Producto 5", price: 50 },
  { name: "Producto 6", price: 250 },
  { name: "Producto 7", price: 400 },
  { name: "Producto 8", price: 300 },
  { name: "Producto 9", price: 125 },
  { name: "Producto 10", price: 450 }
];

const productos = productosData.map((producto, index) => ({
  id: index + 1,
  ...producto
}));

module.exports = { productos };
