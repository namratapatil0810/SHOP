const express = require("express");
const router = express.Router();

const adminController = require("../Controllers/adminController");


//    /admin/add-product => POST
router.post("/add-product", adminController.postAddProduct);

//    /admin/edit-product => GET
//router.get("/edit-product/:productId", adminController.getEditProduct);
//
////    /admin/edit-product => POST
//router.post("/edit-product", adminController.postEditProduct);
//
//    /admin/products => GET
router.get("/products", adminController.getProducts);
//
////    /admin/delete-product => POST
//router.post("/delete-product", adminController.postDeleteProduct);

module.exports = router;
