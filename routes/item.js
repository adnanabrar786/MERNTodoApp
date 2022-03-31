const express = require("express")

const router = express.Router()

const ItemControllers = require("../controllers/items")



router.get("/"  , ItemControllers.insertItems)

router.post("/delete" , ItemControllers.deleteItems)
 
router.post("/" , ItemControllers.saveItems)

module.exports = router ;