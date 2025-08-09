const { cartService, cartProducts, updateCart } = require("../services/cartService");

const cartPostController = async (req, res) => {
  const { id } = req.body;

  if (id) {
    try {
      const respuesta = await cartService(id);
      res.json({ success: true, data: respuesta });
    } catch (error) {
      res.status(500).json({ error: "algo salió mal" });
    }
  } else {
    res.status(400).json({ error: "No se encontró ningún id" });
  }
};

const cartGetProducts = async (req, res) => {
  try {
    const products = cartProducts();

    if (!products) {
      return res.status(500).json({ message: "Error al obtener los productos del carrito" });
    }

    return res.status(200).json(products);
    
  } catch (error) {
    return res.status(500).json({ message: "Error interno del servidor", error });
  }
};

const updateCartController = async(req, res) => {
  try {
    const carritoActualizado = await updateCart();

        if (!carritoActualizado) {
      return res.status(500).json({ message: "Error al obtener el carrito actualizado" });
    }

    return res.status(200).json(carritoActualizado);
    
  } catch (error) {
    return res.status(500).json({ message: "Error interno del servidor", error });
  }
}



module.exports = { cartPostController, cartGetProducts, updateCartController };
