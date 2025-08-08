const { cartService, cartProducts } = require("../services/cartService");

const cartPostController = async (req, res) => {
  const { id } = req.body;

  if (id) {
    try {
      const respuesta = await cartService(id);
      res.json({ success: true, data: respuesta });
    } catch (error) {
      console.log("algo salió mal", error);
      res.status(500).json({ error: "algo salió mal" });
    }
  } else {
    console.log("No se encontró ningún id");
    res.status(400).json({ error: "No se encontró ningún id" });
  }
};

const cartGetProducts = async (req, res) => {
  try {
    const products = cartProducts();

    if (!products || products.length === 0) {
      return res.status(404).json({ message: "algo salió mal" });
    }

    return res.status(200).json(products); // <-- poné return acá también

    // console.log(respuesta); // --> sacalo o ponelo antes de return, y con la variable correcta
  } catch (error) {
    return res.status(500).json({ message: "Error interno del servidor", error });
  }
};


module.exports = { cartPostController, cartGetProducts };
