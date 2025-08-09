const { Router } = require("express");
const { cartPostController, cartGetProducts, updateCartController} = require("../controllers/cartController");

const router = Router();

router.post("/cart", cartPostController);
router.get("/cart", cartGetProducts);
router.put("/cart/update", updateCartController);

module.exports = router;
