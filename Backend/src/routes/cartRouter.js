const { Router } = require("express");
const { cartPostController, cartGetProducts} = require("../controllers/cartController");

const router = Router();

router.post("/cart", cartPostController);
router.get("/cart", cartGetProducts);

module.exports = router;
