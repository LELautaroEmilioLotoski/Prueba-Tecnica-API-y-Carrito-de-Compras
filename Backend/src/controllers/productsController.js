const { productService } = require("../services/productsService");

const productsController = (req, res) => {
    try {
        const products = productService();        

        if (!products || products.length === 0) {
            return res.status(404).json({ message: "algo salió mal" });
        }

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor", error });
    }
};

module.exports = { productsController };
