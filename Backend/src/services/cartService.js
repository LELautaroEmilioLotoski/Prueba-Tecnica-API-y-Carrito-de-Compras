const { productos } = require("../dto/productos");
const carrito = [];

const cartService = (id) => {
  const product = productos.find((p) => p.id === id);
  console.log(product);

  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  carrito.push(product);

  console.log("El contenido del carrito es:", carrito);

  return carrito;
};

const cartProducts = () => {
  return carrito;
};

module.exports = { cartService, cartProducts };
