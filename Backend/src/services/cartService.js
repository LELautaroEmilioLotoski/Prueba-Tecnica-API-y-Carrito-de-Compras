const { productos } = require("../dto/productos");
const carrito = [];

const cartService = (id) => {
  const product = productos.find((p) => {
    return p.id === id;

  })

  if (!product) {
    return null;
  }

  carrito.push(product);
  return carrito;
};


const cartProducts = () => {
  return carrito;
}

const updateCart = () => {
  carrito.length = 0;
  return carrito;
}

module.exports = { cartService, cartProducts, updateCart };
