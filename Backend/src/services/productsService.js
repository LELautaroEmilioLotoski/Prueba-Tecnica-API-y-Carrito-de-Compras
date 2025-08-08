const { productos } = require("../dto/productos");

const productService = () => {
    return productos;
};

module.exports = { productService };
