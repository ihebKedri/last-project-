const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/getall", itemController.selectAll);
router.post("/add", itemController.addOne);
router.put("/update/:id", itemController.updateone);
router.delete("/del/:id", itemController.Delete);

module.exports = router;
